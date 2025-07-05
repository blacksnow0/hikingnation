import valleyImage from "../assets/images/valley-of-flowers.jpg";
import kuariImage from "../assets/images/kuari-pass.jpeg";

import gallery1 from "../assets/images/trip1.jpeg";
import gallery2 from "../assets/images/trip2.jpeg";
import gallery3 from "../assets/images/trip3.jpeg";
import gallery4 from "../assets/images/kagbhusandi.jpeg";
import gallery5 from "../assets/images/hero3.jpeg";
import gallery6 from "../assets/images/trip.jpeg";

export const destinations = [
  {
    id: "kagbhusandi-trek",
    name: "Kagbhusandi Trek",
    country: "India",
    description:
      "Nestled in the Garhwal Himalayas, Kagbhusandi Trek offers breathtaking views, alpine meadows, and a spiritual escape into nature. It's a lesser-known gem ideal for experienced trekkers seeking solitude and serenity.",
    imageUrl: kuariImage,
    bestTimeToVisit: "June - October",
    attractions: [
      "Kagbhusandi Lake",
      "Valley of Flowers",
      "Hemkund Sahib",
      "Joshimath",
    ],
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Arrival & Acclimatization in Joshimath",
        description:
          "Arrive in Joshimath, explore local temples like Narasimha Temple, and acclimate to the altitude with a peaceful evening briefing.",
      },
      {
        day: "Day 2",
        highlight: "Scenic Trek to Ghangaria",
        description:
          "Trek through forests and waterfalls along the Pushpawati River to reach the peaceful alpine village of Ghangaria.",
      },
      {
        day: "Day 3",
        highlight: "Spiritual Hike to Kagbhusandi Lake",
        description:
          "Trek to the sacred and serene Kagbhusandi Lake, known for its emerald water and mystical legends.",
      },
      {
        day: "Day 4",
        highlight: "Discover the Valley of Flowers",
        description:
          "Explore the UNESCO site filled with rare Himalayan flora and dreamy landscapes — nature’s true masterpiece.",
      },
      {
        day: "Day 5",
        highlight: "Descent & Departure from Joshimath",
        description:
          "Descend back to Govindghat and drive to Joshimath for final goodbyes and heartfelt reflections.",
      },
    ],
    highlights: [
      "6-day guided trek",
      "Camp under the stars",
      "All meals included",
      "Local guide and porter",
    ],
    inclusions: [
      "Accommodation in tents/lodges",
      "All meals during the trek",
      "Certified local guide",
      "First aid kit",
      "Entry and forest permits",
    ],
    exclusions: [
      "Transportation to base location",
      "Personal trekking gear",
      "Insurance",
      "Snacks & beverages",
    ],
    gallery: [gallery1, gallery2, gallery3, gallery4],
  },

  {
    id: "valley-of-flowers",
    name: "Valley of Flowers Trek",
    country: "India",
    description:
      "Famed for its blooming alpine meadows, the Valley of Flowers Trek is a kaleidoscope of colors tucked away in Uttarakhand. Ideal for beginners and nature lovers alike, it's a walk through a living canvas.",
    imageUrl: valleyImage,
    bestTimeToVisit: "July - September",
    attractions: [
      "Valley of Flowers",
      "Hemkund Sahib",
      "Ghangaria",
      "Govindghat",
    ],
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Arrival in Joshimath",
        description:
          "Reach Joshimath and acclimate to the altitude. Explore the town or relax in nature's lap before the trek begins.",
      },
      {
        day: "Day 2",
        highlight: "Joshimath to Ghangaria",
        description:
          "Drive to Govindghat and start the moderate trek to Ghangaria through lush valleys and charming trails.",
      },
      {
        day: "Day 3",
        highlight: "Explore the Valley of Flowers",
        description:
          "Witness a burst of colors in the Valley of Flowers — home to rare Himalayan blooms and fluttering butterflies.",
      },
      {
        day: "Day 4",
        highlight: "Visit Hemkund Sahib",
        description:
          "Climb to the sacred Hemkund Sahib Gurudwara set beside a glacial lake, and return to Ghangaria by evening.",
      },
      {
        day: "Day 5",
        highlight: "Return to Joshimath",
        description:
          "Descend back to Govindghat and drive to Joshimath. Celebrate the trek’s end with your fellow adventurers.",
      },
    ],
    highlights: [
      "Beginner-friendly trek",
      "UNESCO World Heritage Site",
      "Floral diversity",
      "Spiritual and scenic experience",
    ],
    inclusions: [
      "Stay in guesthouses/lodges",
      "Meals during the trek",
      "Experienced guide",
      "Permits and entry tickets",
      "First aid support",
    ],
    exclusions: [
      "Transport to Joshimath",
      "Porter charges",
      "Personal gear",
      "Tips and gratuities",
    ],
    gallery: [gallery2, gallery3, gallery5],
  },
];

export const topDestinations = [
  {
    id: "kagbhusandi-trek",
    name: "Kuari Pass",
    image: kuariImage,
    description: "A tropical paradise with beautiful beaches and rich culture.",
    price: "12,000",
  },
  {
    id: "valley-of-flowers",
    name: "Valley Of Flowers",
    image: valleyImage,
    description:
      "A UNESCO World Heritage site, this trek offers a burst of colorful alpine flowers nestled in the Himalayas.",
    price: "9,500",
  },
  {
    id: "Kuari-pass",
    name: "Kuari Pass",
    image: kuariImage,
    description: "A tropical paradise with beautiful beaches and rich culture.",
    price: "12,000",
  },
];
