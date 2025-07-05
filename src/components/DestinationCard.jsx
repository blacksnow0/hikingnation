import { Link } from "react-router-dom";

export default function DestinationCard({
  name,
  image,
  description,
  price,
  id,
}) {
  return (
    <Link to={`destinations/${id}`} className="block">
      <div className="w-[90%] max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-[#2a2a2a]">
        {/* Image Block */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-60  sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content Block */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h3 className="text-lg sm:text-xl text-brand font-bold tracking-wide ">
              {name}
            </h3>
            <span className="text-sm text-brand-accent font-semibold">
              ₹ {price}/-
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-snug line-clamp-3">
            {description}
          </p>

          <div className="pt-3 flex justify-between items-center">
            <button className="text-xs sm:text-sm px-4 py-1.5 bg-brand text-white rounded-full hover:bg-brand-hover transition-all font-medium">
              Explore
            </button>
            <span className="text-[10px] sm:text-xs text-gray-500">
              Adventure • Wild • Trail
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
