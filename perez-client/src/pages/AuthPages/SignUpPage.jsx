import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthLayout>

      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
        Create Account
      </h1>

      <p className="mt-2 text-sm text-zinc-400">
        Join GameSphere and start exploring.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Username"
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-purple-600 py-2 font-semibold text-white hover:bg-purple-700 transition"
        >
          Sign Up
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