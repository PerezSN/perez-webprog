import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { registerUser } from "../../services/UserService";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    age: "",
    gender: "",
    contactNumber: "",
    address: "",
    type: "viewer",
    isActive: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate required fields
      if (
        !newUser.firstName ||
        !newUser.lastName ||
        !newUser.email ||
        !newUser.username ||
        !newUser.password ||
        !newUser.age ||
        !newUser.gender ||
        !newUser.contactNumber ||
        !newUser.address
      ) {
        setError("Please fill in all required fields");
        setLoading(false);
        return;
      }

      const { data } = await registerUser(newUser);
      console.log("Sign up successful:", data);

      // Navigate to sign in page
      navigate("/signin", { state: { message: "Account created successfully. Please sign in." } });
    } catch (err) {
      console.error("Sign up failed:", err);
      setError(err.response?.data?.message || "Sign up failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
        Create Account
      </h1>

      <p className="mt-2 text-sm text-zinc-400">
        Join GameHub and start exploring.
      </p>

      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name *"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="text"
          placeholder="Last Name *"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="email"
          placeholder="Email *"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="text"
          placeholder="Username *"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="password"
          placeholder="Password *"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="number"
          placeholder="Age *"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <select
          value={newUser.gender}
          onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Gender *</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

        <input
          type="tel"
          placeholder="Contact Number *"
          value={newUser.contactNumber}
          onChange={(e) => setNewUser({ ...newUser, contactNumber: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="text"
          placeholder="Address *"
          value={newUser.address}
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-purple-600 py-2 font-semibold text-white hover:bg-purple-700 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-400">
        Already have an account?{" "}
        <Link to="/signin" className="text-purple-400 hover:underline">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUpPage;
