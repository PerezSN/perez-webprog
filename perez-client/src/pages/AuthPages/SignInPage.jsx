import React, { useState } from 'react'; 
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { loginUser } from '../../services/UserService'; 

const SignInPage = () => {
  
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setError(''); 

    try {
      // Call the login API as seen in image_551b82.png
      const { data } = await loginUser({ email, password }); 
      console.log('Login successful:', data); 

      if (data.type === 'viewer') {
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
        localStorage.removeItem('type');
        navigate("/");
        return;
      }

      // Save authentication data to localStorage
      localStorage.setItem('token', data.token); 
      localStorage.setItem('firstName', data.firstName); 
      localStorage.setItem('type', data.type); 
      // Navigate to dashboard with state
      navigate("/dashboard", { state: { firstName: data.firstName, type: data.type } }); 
    } catch (err) {
      // Error handling from image_551b82.png
      console.error('Login failed:', err.response?.data?.message || err.message); 
      setError(err.response?.data?.message || 'Login failed. Please try again.'); 
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
        Sign In
      </h1>

      <p className="mt-2 text-sm text-zinc-400">
        Welcome back! Please login to continue.
      </p>

      {/* Error display from image_551b82.png */}
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>} //

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email} //
          onChange={(e) => setEmail(e.target.value)} //
          required //
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password} //
          onChange={(e) => setPassword(e.target.value)} //
          required //
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-purple-600 py-2 font-semibold text-white hover:bg-purple-700 transition"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-400">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-purple-400 hover:underline">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignInPage;
