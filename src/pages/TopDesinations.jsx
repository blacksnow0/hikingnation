import DestinationCard from "./DestinationCard";
import { topDestinations } from "../utils/data.js";

function TopPicks() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <span className="text-sm sm:text-base uppercase tracking-widest text-brand font-semibold">
          This Season’s Top Picks
        </span>
        <h2 className="text-[1.7rem] sm:text-[2.3rem] lg:text-[2.5rem] leading-tight font-semibold  uppercase tracking-wide text-brand-accent">
          Most Popular Treks Right Now
        </h2>
        <div className="mt-3 w-24 h-[3px] bg-brand mx-auto rounded-full" />
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
        {topDestinations.map((dest, index) => (
          <DestinationCard
            key={index}
            name={dest.name}
            image={dest.image}
            description={dest.description}
            price={dest.price}
            id={dest.id}
          />
        ))}
      </div>
    </section>
  );
}

export default TopPicks;
