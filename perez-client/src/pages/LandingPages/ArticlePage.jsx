import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { fetchArticleByName } from "../../services/ArticleService";

const ArticlePage = () => {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const { data } = await fetchArticleByName(name);
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Article not found");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [name]);

  if (loading) {
    return (
      <div className="px-4 py-10 text-zinc-400 bg-zinc-950">
        Loading article...
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="px-4 py-10 text-white bg-zinc-950">
        <h2>{error || "Article not found"}</h2>
      </div>
    );
  }

  const bodyParagraphs = Array.isArray(article.content) && article.content.length
    ? article.content
    : article.paragraphs || [];

  return (
    <div className="flex w-full flex-col gap-6">

      {/* HEADER */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
        
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-400">
          {article.category}
        </p>

        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 sm:text-4xl pb-1">
            {article.title}
        </h1>

      </section>

      {/* CONTENT */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">

        <div className="mt-8">
          <Button to="/articles">
            Back to Articles
          </Button>
        </div>
        
        {article.image && (
          <div className="mt-6 rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover rounded-[1.25rem]"
            />
          </div>
        )}

        <div className="max-w-3xl space-y-5 text-zinc-300 leading-7">
          {bodyParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

      </section>

    </div>
  );
};

export default ArticlePage;
