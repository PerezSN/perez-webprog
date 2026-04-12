import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <NavBar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;