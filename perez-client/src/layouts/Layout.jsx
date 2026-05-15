import { Outlet, useLocation} from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
 
    useEffect(() => {
    if (pathname === "/" || pathname === "") {
      document.title = "GameHub";
    } else if (pathname.includes("about")) {
      document.title = "About | GameHub";
    } else if (pathname.includes("articles")) {
      document.title = "Articles | GameHub";
    } else {
      document.title = "GameHub";
    }
  }, [pathname]);




  return (
    <div className="min-h-screen bg-zinc-950">
      <NavBar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
