import kuariImage from "../assets/images/kuari-pass.jpeg";

import kagbhusandiImage from "../assets/images/valley/valley2.jpeg";

import valleyImage from "../assets/images/valley/heroImage.jpeg";

import valleyStart from "../assets/images/valley/valleyStart.jpeg";

import gallery1 from "../assets/images/valley/flower1.jpeg";
import gallery2 from "../assets/images/valley/flower2.jpeg";
import gallery3 from "../assets/images/valley/flower3.jpeg";
import gallery4 from "../assets/images/valley/flower4.jpeg";
import gallery5 from "../assets/images/valley/flower5.jpeg";
import gallery6 from "../assets/images/valley/flower6.jpeg";
import gallery7 from "../assets/images/valley/valley.jpeg";

export const destinations = [
  {
    id: "kagbhusandi-tal",
    name: "Kagbhusandi Tal Trek",
    country: "India",
    description:
      "A hidden gem in the Garhwal Himalayas, Kagbhusandi Tal is a sacred high-altitude lake trek ideal for seasoned trekkers seeking solitude, alpine beauty, and cultural connection. This 60 km journey winds through wild valleys, local villages, and pristine Himalayan backdrops.",
    imageUrl: kagbhusandiImage, // Replace with actual image import
    bestTimeToVisit: "June - October",
    attractions: [
      "Kagbhusandi Tal",
      "Hathi and Ghori Peaks",
      "Bhyundar Village",
      "Semer Toli Kharak",
      "Rare Himalayan Wildlife",
    ],
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6], // Update accordingly
    itinerary: [
      {
        day: "Day 1",
        highlight: "Pulna to Bhyundar Village (2,500m)",
        description:
          "Start your journey from Pulna and trek to the peaceful Bhyundar Village, settling in and adjusting to the higher altitude.",
      },
      {
        day: "Day 2",
        highlight: "Bhyundar Village to Semer Toli Kharak (3,300m)",
        description:
          "Begin ascending through scenic alpine landscapes and forest trails to reach Semer Toli Kharak — a perfect campsite surrounded by nature.",
      },
      {
        day: "Day 3",
        highlight: "Semer Toli Kharak to Raj Kharkh (4,000m)",
        description:
          "Trek further into the high Himalayas, moving above the tree line into meadows with sweeping views of the peaks.",
      },
      {
        day: "Day 4",
        highlight: "Raj Kharkh to Kagbhusandi Tal (5,200m)",
        description:
          "The final ascent to Kagbhusandi Tal — a glacial lake nestled among towering cliffs. Spend time exploring its sacred surroundings before resting nearby.",
      },
      {
        day: "Day 5",
        highlight: "Return to Semer Toli Kharak",
        description:
          "Retrace your route back to Semer Toli Kharak for an easier descent and well-earned rest.",
      },
      {
        day: "Day 6",
        highlight: "Semer Toli Kharak to Bhyundar Village",
        description:
          "Descend through the lush valleys and forested trails toward the warmth of village life.",
      },
      {
        day: "Day 7",
        highlight: "Bhyundar Village to Pulna",
        description:
          "End your trek as you hike back to Pulna, concluding your Himalayan journey with unforgettable memories.",
      },
    ],
    highlights: [
      "High-altitude glacial lake (5,200m)",
      "Stunning views of Hathi and Ghori peaks",
      "Wildlife sightings: Himalayan Monal, Snow Leopard, Blue Sheep",
      "Immersive cultural experiences in Himalayan villages",
    ],
    inclusions: [
      "Camping accommodation",
      "All meals during the trek",
      "Experienced local guides",
      "Trekking permits from Uttarakhand authorities",
      "First aid support",
    ],
    exclusions: [
      "Transport to/from Pulna village",
      "Personal camping gear (optional rental)",
      "Backpack offloading charges",
      "Insurance and emergency evacuation",
      "Tips for guides and porters",
    ],
    preparation: [
      "Ensure good physical fitness before the trek",
      "Carry adequate trekking and camping gear",
      "Check weather and trail conditions beforehand",
      "Respect local customs and environmental guidelines",
    ],
    price: "Custom - contact for details",
    distance: "60 km approx.",
    duration: "6-7 days",
    altitude: "5,200 meters",
    difficulty: "Challenging",
    gallery: [gallery1, gallery2, gallery3, gallery5, gallery7], // Optional simplified gallery
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
    gallery: [valleyStart, gallery3, gallery5, gallery4, gallery1, gallery6],
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
    id: "valley-of-flowers",
    name: "Valley Of Flowers",
    image: valleyImage,
    description:
      "A UNESCO World Heritage site, this trek offers a burst of colorful alpine flowers nestled in the Himalayas.",
    price: "8,000",
  },
  {
    id: "kagbhusandi-tal",
    name: "Kagbhusandi Trek",
    image: kagbhusandiImage,
    description:
      "A hidden gem in the Garhwal Himalayas, Kagbhusandi Tal is a sacred high-altitude lake trek ideal for seasoned trekkers seeking solitude.",
    price: "25,000",
  },
  {
    id: "kuari-pass",
    name: "Kuari Pass",
    image: kuariImage,
    description: "A tropical paradise with beautiful beaches and rich culture.",
    price: "12,000",
  },
];
