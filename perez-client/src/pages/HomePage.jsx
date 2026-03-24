import Button from '../components/Button';
import HeroImage from '../assets/Crimson_Desert_Steam_Cover.jpg';
import featureImage1 from '../assets/openworld.jpg';
import featureImage2 from '../assets/minecraft.jpg';
import featureImage3 from '../assets/horror.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">

      {/* HERO SECTION */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
              Featured News
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 sm:text-4xl pb-1">
              The Biggest Games Releasing This Month
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
              Stay ahead of the curve with the latest AAA releases, indie hits, and updates shaping the gaming world today.
            </p>

            <div className="mt-6">
              <Button to="/about" variant="primary">
                Explore More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
              <img
                src={HeroImage}
                alt="Hero"
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* KPI SECTION */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
            Platform Stats
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Gaming Highlights
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800/50">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">120+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Games Covered
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800/50">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">35</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Reviews
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800/50">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">80K</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Readers
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800/50">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">15</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Weekly Posts
            </p>
          </div>

        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
            Latest Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Trending in Gaming
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50">
            <div className="w-full rounded-[1.25rem] bg-zinc-800 overflow-hidden transition duration-300 hover:brightness-110">
              <img
                src={featureImage1}
                alt="Feature 1"
                className="w-full h-auto object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              Open-World Games You Shouldn’t Miss
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Explore massive worlds filled with adventure, secrets, and unforgettable stories.
            </p>

            <Button className="mt-4" variant="primary">
              Read Article
            </Button>
          </article>

          {/* Card 2 */}
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50">
            <div className="w-full rounded-[1.25rem] bg-zinc-800 overflow-hidden transition duration-300 hover:brightness-110">
              <img
                src={featureImage2}
                alt="Feature 2"
                className="w-full h-auto object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              Survival Games That Test Your Skills
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              From harsh environments to limited resources, these games push you to your limits.
            </p>

            <Button className="mt-4" variant="primary">
              Read Article
            </Button>
          </article>

          {/* Card 3 */}
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50">
            <div className="w-full rounded-[1.25rem] bg-zinc-800 overflow-hidden transition duration-300 hover:brightness-110">
              <img
                src={featureImage3}
                alt="Feature 3"
                className="w-full h-auto object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              Horror Games That Will Keep You Up
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Dive into terrifying experiences that redefine fear in modern gaming.
            </p>

            <Button className="mt-4" variant="primary">
              Read Article
            </Button>
          </article>

        </div>
      </section>

    </div>
  );
};

export default HomePage;