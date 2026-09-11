import Hero from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full py-2 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Build Your Ideal <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                Explore Technologies
              </button>
              <button className="px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:scale-[1.02] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={Hero}
              alt="Development Stack"
              className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
