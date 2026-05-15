import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

      {articles.map((article) => (
        <article
          key={article.name}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50"
        >
          
          
          <div className="flex h-48 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800 overflow-hidden transition duration-300 hover:brightness-110">
            {article.image ? (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="px-4 text-center text-sm font-semibold text-zinc-500">
                {article.category}
              </span>
            )}
          </div>

         
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-400">
            {article.category}
          </p>

          
          <h3 className="mt-2 text-lg font-semibold text-white">
            {article.title}
          </h3>

          
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {article.description}
          </p>

        
          <Link
            to={`/articles/${article.name}`}
            className="mt-4 inline-block text-sm font-semibold text-purple-400 hover:underline"
          >
            Read Article →
          </Link>

        </article>
      ))}

    </div>
  );
};

export default ArticleList;
