import { useEffect, useState } from "react";
import ArticleList from "../../components/ArticleList";
import Button from "../../components/Button";
import { fetchArticles } from "../../services/ArticleService";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const { data } = await fetchArticles();
        setArticles(data?.articles || []);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Unable to load articles right now.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">

     
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-[11px] uppercase text-purple-500">
          Articles
        </p>

        <h1 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 sm:text-4xl pb-1">
          All Gaming Articles
        </h1>

        <p className="mt-2 text-zinc-400">
          Browse all available gaming content.
        </p>

        <div className="mt-4">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
        {loading && <p className="text-zinc-400">Loading articles...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && <ArticleList articles={articles} />}
      </section>

    </div>
  );
};

export default ArticleListPage;
