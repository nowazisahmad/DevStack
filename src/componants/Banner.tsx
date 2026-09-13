import Hero from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full py-2 md:py-5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-black-500">
              Build Your Ideal <br className="hidden md:block" />
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="text-slate-700 text-base max-w-lg mx-auto md:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <button className="px-8 py-3.5 rounded-full bg-brand-gradient text-white font-medium shadow-md hover:scale-[1.02] transition-all duration-300">
                Explore Technologies
              </button>
              <button className="px-8 py-3.5 rounded-full bg-sky-300 border-none text-gray-700 font-medium hover:bg-sky-400 hover:scale-[1.02] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={Hero}
              alt="Development Stack"
              className="w-full max-w-70px max-w-100px md:max-w-125px object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
