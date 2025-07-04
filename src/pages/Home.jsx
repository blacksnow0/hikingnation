import hero1 from "../assets/images/hero1.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-32 overflow-hidden">
      {/* Gradient Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#355938] via-[#5f8d5f] to-[#b3f9b3]" />

      {/* Content */}
      <div className="max-w-md text-center space-y-6 text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Embrace the Trail <br />
          with <span className="text-white/90">Hiking Nation</span>
        </h1>

        <p className="text-sm md:text-base text-white/80">
          Discover breathtaking destinations, connect with fellow hikers, and
          plan your next adventure into the wild.
        </p>

        <button className="mt-4 bg-white text-brand hover:bg-[#e6f4e6] font-semibold px-6 py-3 rounded-lg shadow transition duration-300">
          Explore Destinations
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-16 w-full max-w-md z-10">
        <div
          className="w-full aspect-video rounded-lg overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${hero1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
}
