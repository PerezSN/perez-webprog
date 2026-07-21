const User = require('../models/User');
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating tokens

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Exclude the password field
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    const { firstName, lastName, email, username, password, type, age, gender, contactNumber, address } = req.body;

    // Server-side validation for required fields
    if (!firstName || !lastName || !email || !username || !password || !type || !age || !gender || !contactNumber || !address) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Email format validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Password length validation
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    try {
        // Check if user already exists (email or username)
        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: 'Email or Username is already taken' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ ...req.body, password: hashedPassword });
        const createdUser = user.toObject();
        delete createdUser.password;

        res.status(201).json(createdUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const setupAdmin = async (req, res) => {
    try {
        const userCount = await User.countDocuments();

        if (userCount > 0) {
            return res.status(403).json({ message: 'Initial admin setup is already complete' });
        }

        req.body.type = 'admin';
        return createUser(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const registerUser = async (req, res) => {
    req.body.type = 'viewer';
    return createUser(req, res);
};

const updateUser = async (req, res) => {
    const { email, username, password } = req.body;

    // Validation for update (only if fields are provided)
    if (email) {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
    }

    if (password && password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    try {
        // Check for duplicates if email or username is being changed
        if (email || username) {
            const duplicate = await User.findOne({
                $or: [
                    ...(email ? [{ email }] : []),
                    ...(username ? [{ username }] : [])
                ],
                _id: { $ne: req.params.id } // Exclude current user from search
            });
            if (duplicate) {
                return res.status(400).json({ message: 'Email or Username is already taken' });
            }
        }

        if (password) {
            req.body.password = await bcrypt.hash(password, 10);
        }

        // Update with runValidators to ensure Schema rules are applied
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user is active
        if (!user.isActive) {
            return res.status(403).json({ message: 'Your account is inactive. Please contact support.' });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email, type: user.type }, // Include type in the token
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ message: 'Login successful', token, type: user.type, firstName: user.firstName }); // Include type in the response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, loginUser, setupAdmin, registerUser };
