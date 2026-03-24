import Button from '../components/Button';
import Rgrid1 from '../assets/drg.jpg';
import Rgrid2 from '../assets/ddo2.jpg';
import Rgrid3 from '../assets/f4.png';
import Rgrid4 from '../assets/mhwilds.png';
import Hero1 from '../assets/horror.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col">

      {/* HERO / PROFILE */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-800">
              <img
                src={Hero1}
                alt="Hero 1"
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
              About Us
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 sm:text-4xl pb-1">
              Your Hub for Gaming News, Reviews, and Insights
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
              GameSphere is built for gamers who want the latest updates, in-depth reviews, and curated content from across the gaming world.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">
                Browse Articles
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
            Platform Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Our Growth
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800/50">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">5+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Years Active
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800/50">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">150+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Articles
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800/50">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">50K</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Readers
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-800/50">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">10</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Contributors
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT + GRID */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
              What We Do
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Our Content Focus
            </h2>

            <div className="mt-6 space-y-4">

              <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                <h3 className="text-lg font-semibold text-white">
                  News & Updates
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  We cover the latest announcements, releases, and industry trends.
                </p>
              </article>

              <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Game Reviews
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Honest and detailed reviews to help you decide what to play next.
                </p>
              </article>

              <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Guides & Features
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  In-depth guides, tips, and curated content for gamers of all levels.
                </p>
              </article>

            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500">
              Gallery
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
                <img
                  src={Rgrid1}
                  alt="Rgrid 1"
                  className="h-full w-full object-cover rounded-[1.25rem]"
                  />
              </div>

              <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
                <img
                  src={Rgrid2}
                  alt="Rgrid 2"
                  className="h-full w-full object-cover rounded-[1.25rem]"
                  />
              </div>

              <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
                <img
                  src={Rgrid3}
                  alt="Rgrid 3"
                  className="h-full w-full object-cover rounded-[1.25rem]"
                  />
              </div>

              <div className="flex min-h-20 w-full items-center justify-center rounded-[1.25rem] bg-zinc-800">
                <img
                  src={Rgrid4}
                  alt="Rgrid 4"
                  className="h-full w-full object-cover rounded-[1.25rem]"
                  />
              </div>
            </div>

            <Button className="mt-5">
              View More
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;