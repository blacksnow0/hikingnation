import React from "react";
import aboutImg from "../assets/images/valley-of-flowers.jpg"; // Replace as needed

export default function About() {
  const timeline = [
    {
      year: "1950s",
      text: "Local families begin guiding sacred trails near Badrinath.",
    },
    {
      year: "1990s",
      text: "Cultural hospitality expands with home-cooked food & homestays.",
    },
    {
      year: "2020s",
      text: "Hiking Nation is born — taking this legacy online.",
    },
  ];
  return (
    <section className="relative mt-10 px-6 py-16 sm:py-20 bg-white text-neutral-800 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle Background Shape */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#e6f7ed] rounded-full blur-2xl -z-10"></div>

      {/* Intro */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand uppercase tracking-wide">
          About Us
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
          We’re not just guides — we’re storytellers of the wild, rooted in
          Himalayan soul.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Container */}
        <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-md">
          <img
            src={aboutImg}
            alt="Team in Himalayas"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-black/30 " />
          <div className="absolute bottom-4 left-4 bg-[#228b22]/60 text-white px-3 py-1 text-xs font-semibold rounded-full shadow">
            -Locals of Ghangharia Valley
          </div>
        </div>
        {/* Text Block */}
        <div className="space-y-5 text-sm sm:text-base leading-relaxed text-neutral-700">
          <p>
            A company built by locals of{" "}
            <span className="font-semibold text-brand">
              Ghangharia and Bhyundar Valley
            </span>
            , we offer unmatched hospitality across <strong>Badrinath</strong>{" "}
            and <strong>Satopanth</strong>.
          </p>

          <p>
            With over <strong>70 years</strong> of heritage in the valley, our
            treks carry the wisdom of medicinal flora, sacred trails, and
            personal legends passed through generations.
          </p>

          <p>We specialize in:</p>

          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>Authentic mountain stays curated by locals</li>
            <li>Freshly-prepared traditional meals</li>
            <li>Immersive cultural storytelling & spiritual walks</li>
            <li>Sustainable and eco-aware trail ethics</li>
          </ul>
        </div>
      </div>

      {/* Testimonial / CTA */}
      <div className="mt-16 bg-[#f6faf8] px-6 py-10 rounded-xl border border-brand/30 shadow-sm text-center">
        <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto leading-relaxed">
          Whether you seek silence in the mountains or the pulse of a sacred
          trail —{" "}
          <span className="text-brand font-medium">
            we guide you beyond the maps
          </span>
          .
        </p>
        <p className="mt-3 text-xs text-neutral-500 italic">
          Join thousands of adventurers who walked these paths with us.
        </p>
      </div>

      <section className="bg-white px-6 py-16 max-w-4xl mx-auto text-neutral-800">
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-brand uppercase mb-10">
          Our Legacy
        </h2>

        <div className="space-y-8 border-l-2 border-brand pl-6">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              <h3 className="text-lg font-semibold text-brand">{item.year}</h3>
              <p className="text-sm text-gray-700 mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-600 italic">
          These valleys raised us. Now, we guide you through them.
        </p>
      </section>
    </section>
  );
}
