import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

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

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;