import Button from '../components/Button';
import Card1 from '../assets/skyrim.jpg';
import Card2 from '../assets/survivalhorror.jpg';
import Card3 from '../assets/horrorgames.jpg';
import Card4 from '../assets/indiegames.jpg';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col">

      {/* HEADER / INTRO */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
          Articles
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 sm:text-4xl pb-1">
          Latest Gaming News & Features
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
          Explore the latest updates, reviews, and deep dives into the gaming world—from AAA titles to indie gems.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Trending in Gaming
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 hover:scale-[1.02] transition hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50">
            <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
              <img
                src={Card1}
                alt="Card 1"
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
              </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-500">
              Action
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              Open-World Adventures You Must Try
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Discover expansive worlds filled with quests, exploration, and immersive storytelling.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 hover:scale-[1.02] transition hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50">
            <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
              <img
                src={Card2}
                alt="Card 2"
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
              </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-500">
              Survival
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              Hardcore Survival Games Ranked
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Test your limits with challenging survival mechanics and unforgiving environments.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 hover:scale-[1.02] transition hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50">
             <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
              <img
                src={Card3}
                alt="Card 3"
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
              </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-500">
              Horror
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              Horror Games That Redefine Fear
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Experience terrifying atmospheres and intense gameplay that will keep you on edge.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 hover:scale-[1.02] transition hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50">
             <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
              <img
                src={Card4}
                alt="Card 4"
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
              </div>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-500">
              Indie
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              Indie Games You Shouldn’t Miss
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Hidden gems from indie developers that bring fresh ideas and unique gameplay.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

        </div>
      </section>
    </div>
  );
};

export default ArticlePage;