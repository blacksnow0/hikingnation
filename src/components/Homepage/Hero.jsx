import hero2 from "../../assets/images/hero2.jpg";

function Hero() {
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

        {/* <button className="mt-4 bg-white text-brand hover:bg-[#e6f4e6] font-semibold px-6 py-3 rounded-lg shadow transition duration-300">
          Explore Destinations
        </button> */}
      </div>

      {/* Enhanced Image Section */}
      <div className="mt-12 w-full max-w-sm z-10">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-[#1aac83]/30 hover:border-[#1aac83] transition duration-300">
          <img
            src={hero2}
            alt="Hiking Trail"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {/* Optional Caption */}
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Valley of Flowers • Uttarakhand
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Local Insight Card */}
      <div className="mt-10 w-full max-w-xl bg-white/90 backdrop-blur-lg rounded-xl px-6 py-5 shadow-md border border-[#d1e7d1] text-left space-y-4 z-10">
        <div className="flex items-center gap-3">
          <span className="inline-block px-3 py-1 text-xs font-bold text-brand bg-[#e6f7ed] rounded-full uppercase tracking-wider">
            Local Insight
          </span>
          <span className="text-[11px] text-gray-500 italic">
            From the heart of the valley
          </span>
        </div>

        <p className="text-sm text-gray-800 leading-relaxed line-clamp-2">
          A company built by locals of Ghangharia and Bhyundar Valley, we
          provide unmatched hospitality in Badrinath and Satopanth. With 70+
          years rooted in this valley, our treks come alive with tales of
          medicinal flowers, sacred legends, and deeply personal connections to
          this land. We’re the only team in the valley offering authentic stays,
          hand-prepared food, and immersive cultural experiences.
        </p>

        {/* Read More CTA */}
        <div className="text-right">
          <button className="text-sm  font-semibold text-brand hover:underline hover:text-[#159e70] transition-all duration-200">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
