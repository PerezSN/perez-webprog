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
import DashLayout from "./layouts/DashLayout";
import DashboardPage from "./pages/DashboardPages/DashboardPage";
import ReportsPage from "./pages/DashboardPages/ReportsPage";
import UsersPage from "./pages/DashboardPages/UsersPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/articles/:name" element={<ArticlePage />} />
        </Route>

        {/* Auth Pages */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Dashboard */}
       <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;