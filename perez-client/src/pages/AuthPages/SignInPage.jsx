import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout>

      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
        Sign In
      </h1>

      <p className="mt-2 text-sm text-zinc-400">
        Welcome back! Please login to continue.
      </p>

      <form className="mt-6 space-y-4">

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