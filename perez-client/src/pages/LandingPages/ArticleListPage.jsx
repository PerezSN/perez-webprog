import ArticleList from "../../components/ArticleList";
import articles from "../../assets/article-content";
import Button from "../../components/Button";

const ArticleListPage = () => {
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
        <ArticleList articles={articles} />
      </section>

    </div>
  );
};

export default ArticleListPage;