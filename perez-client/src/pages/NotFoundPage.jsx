import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-zinc-950 text-center px-4">

      <h1 className="text-6xl font-bold text-purple-500">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-white">
        Page Not Found
      </h2>

      <p className="mt-2 text-zinc-400">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFoundPage;