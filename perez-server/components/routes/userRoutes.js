const express = require('express');
// import functions

const { getUsers, createUser, updateUser, deleteUser, loginUser, setupAdmin, registerUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Specific routes must come BEFORE catch-all routes
router.post('/login', loginUser);
router.post('/setup-admin', setupAdmin);
router.post('/register', registerUser);

router.route('/').get(protect, admin, getUsers).post(protect, admin, createUser);

router.route('/:id').put(protect, admin, updateUser).delete(protect, admin, deleteUser);

module.exports = router;
