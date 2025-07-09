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
      "Famed for its blooming alpine meadows, the Valley of Flowers Trek is a kaleidoscope of colors tucked away in Uttarakhand. This Rishikesh-to-Rishikesh plan is perfect for beginners and nature lovers who want a seamless, soul-touching experience.",
    imageUrl: valleyImage, // Replace with actual import if needed
    bestTimeToVisit: "July - September",
    price: "8000 + GST (5%)",
    attractions: [
      "Valley of Flowers",
      "Hemkund Sahib",
      "Ghangaria",
      "Pulna",
      "Govindghat",
    ],
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Pickup from Rishikesh, Stay at Pulna",
        description:
          "Start your journey from Rishikesh with a scenic drive through the mountains, reaching Pulna. Overnight stay at a cozy homestay to acclimate and rest.",
      },
      {
        day: "Day 2",
        highlight: "Trek to Ghangaria",
        description:
          "Begin the 13 km trek from Pulna to Ghangaria. Reach one of the best hotels in the area and relax amidst Himalayan serenity.",
      },
      {
        day: "Day 3",
        highlight: "Explore the Valley of Flowers",
        description:
          "Post breakfast, trek 4 km into the Valley of Flowers with a packed lunch. Return to your hotel after soaking in the colorful alpine flora.",
      },
      {
        day: "Day 4",
        highlight: "Visit Hemkund Sahib",
        description:
          "Early morning trek to the sacred Hemkund Sahib (6 km) surrounded by a glacial lake and spiritual vibes. Return to your hotel by evening.",
      },
      {
        day: "Day 5",
        highlight: "Return to Rishikesh",
        description:
          "Checkout from the hotel and descend back to Pulna. Drive back to Rishikesh with stories, memories, and flower-filled hearts.",
      },
    ],
    highlights: [
      "Beginner-friendly trek",
      "UNESCO World Heritage Site",
      "All stays included (Rishikesh to Rishikesh)",
      "Floral diversity & spiritual immersion",
      "Top-rated local accommodations",
    ],
    inclusions: [
      "Pickup & drop from Rishikesh",
      "Accommodation (Pulna & Ghangaria)",
      "All meals during the trek",
      "Certified guide support",
      "Permits and entry tickets",
      "First aid support",
    ],
    exclusions: [
      "Personal trekking gear",
      "Snacks and beverages",
      "Tips and gratuities",
      "Trek equipment (₹900)",
      "Backpack offloading (₹800)",
    ],
    gallery: [gallery2, gallery3, gallery5],
  },
  {
    id: "kuari-pass",
    name: "Kuari Pass Trek",
    country: "India",
    description:
      "A classic Himalayan trek with panoramic views of snow-capped peaks, the Kuari Pass is perfect for adventure seekers. It offers enchanting campsites, alpine forests, and an unforgettable summit day at 12,500 ft.",
    imageUrl: kuariImage, // 🔁 Replace with your imported image
    bestTimeToVisit: "December - March",
    attractions: [
      "Kuari Pass Summit",
      "Joshimath",
      "Khullara Campsite",
      "Gulling Meadows",
    ],
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Rishikesh to Pipalkoti / Joshimath",
        description:
          "A scenic 10–11 hour drive covering 252 km through the mountain roads, arriving at the base town for the trek.",
      },
      {
        day: "Day 2",
        highlight: "Drive to Dhak and Trek to Gulling Campsite",
        description:
          "After a short drive, begin a 7 km trek ascending from 6,150 ft to 9,000 ft through beautiful forests and local trails.",
      },
      {
        day: "Day 3",
        highlight: "Trek to Khullara Campsite",
        description:
          "Trek 6 km in 4–5 hours gaining significant altitude up to 11,800 ft. Stunning views and alpine terrain dominate the route.",
      },
      {
        day: "Day 4",
        highlight: "Trek to Kuari Pass & Return to Khullara",
        description:
          "Push for the summit with an 11 km round-trip trek reaching the Kuari Pass at 12,500 ft before returning to camp.",
      },
      {
        day: "Day 5",
        highlight: "Descend to Tuagasi / Dhak and Drive to Joshimath",
        description:
          "A beautiful descent through meadows and villages, followed by a 2–3 hour drive back to Joshimath or Pipalkoti.",
      },
      {
        day: "Day 6",
        highlight: "Joshimath / Pipalkoti to Rishikesh",
        description:
          "Return journey of 252 km via road, wrapping up the trek with views and stories from the Himalayas.",
      },
    ],
    highlights: [
      "Summit views of Mt. Nanda Devi & Dronagiri",
      "Alpine forest and snow experience",
      "Camping at scenic locations",
      "Perfect winter snow trek",
    ],
    inclusions: [
      "Accommodation in tents/lodges",
      "All meals during the trek",
      "Certified local guide",
      "Entry and forest permits",
      "First aid kit",
    ],
    exclusions: [
      "Transportation to base location (Rishikesh)",
      "Personal trekking gear",
      "Insurance",
      "Snacks & beverages",
      "Optional trekking equipment (₹750)",
      "Backpack off-loading (₹1600)",
    ],
    gallery: [gallery1, gallery2, gallery3],
  },
];

export const topDestinations = [
  {
    id: "kagbhusandi-trek",
    name: "Kagbhusandi Trek",
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
    price: "8,000",
  },
  {
    id: "kuari-pass",
    name: "Kuari Pass",
    image: kuariImage,
    description: "A tropical paradise with beautiful beaches and rich culture.",
    price: "12,000",
  },
];
