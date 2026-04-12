import { useParams } from "react-router-dom";
import articles from "../../assets/article-content";
import Button from "../../components/Button";

const ArticlePage = () => {
  const { name } = useParams();

  const article = articles.find((a) => a.name === name);

  if (!article) {
    return (
      <div className="px-4 py-10 text-white bg-zinc-950">
        <h2>Article not found</h2>
      </div>
    );
  }

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
        
        
        <div className="max-w-3xl space-y-5 text-zinc-300 leading-7">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

         <div className="mt-6 rounded-2xl overflow-hidden border border-zinc-800">
            <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover rounded-[1.25rem]"
            />

            {article.paragraphs.map((para, idx) => (
              <p key={idx} className="p-4 text-zinc-300 leading-7">
                {para}
              </p>
            ))}
        </div>


      </section>

    </div>
  );
};

export default ArticlePage;