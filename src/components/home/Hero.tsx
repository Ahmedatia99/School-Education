import HeroImage from "/images/Image-Container.png";
function Hero() {
  const numCards =
    "flex flex-col gap-2 items-center text-2xl lg:text-3xl font-bold max-sm:border-b-2 max-sm:border-dark max-sm:pb-2 max-sm:p-5 md:border-0";
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 md:p-6">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-80 h-auto md:w-[420px] md:h-auto lg:w-[520px] aspect-auto object-cover shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <div className="w-full flex items-center justify-center md:justify-start mb-4">
          <h4 className="text-lg md:text-xl font-semibold border-b-2 border-dark-300 max-w-[400px] pl-2">
            Welcome to Little Learners Academy
          </h4>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-1 text-center md:text-left">
          Where Young Minds Blossom and
          <span className="text-morning ml-2 tracking-wide block md:inline">
            Dreams Take Flight.
          </span>
        </h2>
        <p className="text-base md:text-lg mt-6 md:mt-4 lg:mt-8 text-dark font-semibold max-w-2xl text-center md:text-left">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className="hero-card">
          <div className={numCards}>
            +7000
            <span className="hero-span">students Passed Out</span>
          </div>
          <div className={numCards}>
            +37
            <span className="hero-span">Awards & Recognitions</span>
          </div>
          <div className={numCards}>
            +15
            <span className="hero-span">Experience Educators</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
