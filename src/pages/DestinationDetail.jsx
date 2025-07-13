import React from "react";
import { useParams, Link } from "react-router-dom";
import { destinations } from "../utils/data";

function DestinationDetail() {
  const handleBookNow = (trekName) => {
    const message = `Hey! I’m interested in booking the "${trekName}" trek. Can you help me out? ⛰️`;
    const phoneNumber = "7536861503";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen mt-10 flex items-center justify-center text-center text-neutral-600">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Destination Not Found</h2>
          <Link to="/" className="text-brand hover:underline">
            ← Go back to homepage
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    imageUrl,
    description,
    bestTimeToVisit,
    attractions,
    highlights,
    inclusions,
    exclusions,
    itinerary,
    gallery,
  } = destination;

  return (
    <section className="px-6 py-12 mt-10 max-w-5xl mx-auto text-neutral-800">
      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center drop-shadow">
            {name}
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 space-y-4">
        <p className="text-base text-neutral-700">{description}</p>

        <div className="text-sm text-neutral-500">
          <span className="font-semibold text-brand">Best Time to Visit:</span>{" "}
          {bestTimeToVisit}
        </div>
      </div>

      {/* Attractions */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-brand mb-2">
          Key Attractions
        </h2>
        <div className="flex flex-wrap gap-2">
          {attractions.map((spot, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#228b22]/10 text-brand rounded-full text-xs"
            >
              {spot}
            </span>
          ))}
        </div>
      </div>

      {/* Itinerary */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-brand mb-4">Itinerary</h2>
        <div className="space-y-4">
          {itinerary.map((day, idx) => (
            <div
              key={idx}
              className="border-l-4 border-brand pl-4 py-3 bg-neutral-50 rounded-md shadow-sm"
            >
              <h4 className="font-bold text-neutral-800">
                {day.day}: {day.highlight}
              </h4>
              <p className="text-sm text-neutral-600 mt-1">{day.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:col-span-2 mt-6">
        <button
          onClick={() => handleBookNow(name)}
          className="w-full cursor-pointer sm:w-auto bg-green-900/80 hover:bg-[#1a6d1a] text-white px-6 py-3 text-sm sm:text-base font-semibold rounded-md shadow-md transition-all duration-300 ease-in-out"
        >
          📩 Book Now
        </button>
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-brand mb-4">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="rounded-lg object-cover w-full h-32 sm:h-40 border border-neutral-200"
            />
          ))}
        </div>
      </div>

      {/* Highlights & Inclusions */}
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-base font-semibold text-brand mb-2">
            What’s Special
          </h3>
          <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Preparation (Optional) */}
        {destination.preparation && destination.preparation.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-brand mb-2">
              Preparation Tips
            </h2>
            <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
              {destination.preparation.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="text-base font-semibold text-brand mb-2">
            Inclusions
          </h3>
          <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
            {inclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-4 text-base font-semibold text-red-500 mb-2">
            Exclusions
          </h3>
          <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
            {exclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DestinationDetail;
