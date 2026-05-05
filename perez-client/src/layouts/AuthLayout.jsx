import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";


const AuthLayout = ({ children }) => {


  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      document.title = "perez.dev";
    } else if (pathname.includes("signin")) {
      document.title = "Sign In | perez.dev";
    } else if (pathname.includes("signup")) {
      document.title = "Sign Up | perez.dev";
    } else {
      document.title = "perez.dev";
    }
  }, [pathname]);



  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-purple-500/10">
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;