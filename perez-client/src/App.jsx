import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/LandingPages/HomePage";
import ArticleListPage from "./pages/LandingPages/ArticleListPage";
import ArticlePage from "./pages/LandingPages/ArticlePage";
import AboutPage from "./pages/LandingPages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Article Pages */}
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/articles/:name" element={<ArticlePage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />

          {/* Auth Pages */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

        </Routes>
      </Layout>

      
    </BrowserRouter>
  );
}

export default App;