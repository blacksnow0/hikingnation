import React from "react";
import { topDestinations } from "../utils/data";
import { Link } from "react-router-dom";

export default function DestinationsPage() {
  return (
    <section className="mt-10 px-6 py-16 max-w-7xl mx-auto text-neutral-800">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand uppercase tracking-wide">
          Explore All Destinations
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
          Handpicked treks and nature escapes that offer more than just views —
          they offer stories, legends, and serenity.
        </p>
      </div>

      {/* Grid of Destinations */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topDestinations.map((dest, index) => (
          <Link
            to={`/destinations/${dest.id}`}
            key={index}
            className="block group"
          >
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-brand">
                  {dest.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {dest.description}
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-brand-accent font-medium">
                    ₹ {dest.price}
                  </span>
                  <button className="text-xs px-3 py-1.5 bg-brand text-white rounded-full hover:bg-brand-hover transition-all">
                    View Trek
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
