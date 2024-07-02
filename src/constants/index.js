import se03lite_1 from "../assets/blue_SE03Lite.png";
import se03_1 from "../assets/red_SE03.png";
import se03_2 from "../assets/golden_SE03.png";
import se03_3 from "../assets/red_SE03_sideview.png";
import se03max_1 from "../assets/SE03Max/black_SE03Max.png";
import se03max_2 from "../assets/SE03Max/black_front_view.png";
import se03max_3 from "../assets/SE03Max/black_side_view.png";
import group from "../assets/Group.png";
import special_edition from "../assets/special_edition.png";

import {
  FaCarBattery,
  FaMagnifyingGlassChart,
  FaPersonRays,
} from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";

export const navLinks = [
  { id: "1", name: "Home", link: "/" },
  { id: "2", name: "Products", link: "/products" },
  { id: "3", name: "About", link: "/about" },
  { id: "4", name: "Contact", link: "/contact" },
];

export const ABOUT_US = [
  {
    id: 1,
    para: [
      "Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.",
    ],
  },
  {
    id: 2,
    para: [
      "With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.",
    ],
  },
  {
    id: 3,
    para: [
      "Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.",
    ],
  },
  {
    id: 4,
    para: [
      "Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.",
    ],
  },
];

export const PRODUCTLIST = [
  {
    id: 1,
    name: "SE03 Lite",
    img: se03lite_1,
    link: "/se03lite",
    features: [
      "Max Range: 100 km",
      "Max Speed: 55 km/h",
      "Charging: 3 hours (12A)",
    ],
  },
  {
    id: 2,
    name: "SE03",
    img: se03_1,
    link: "/se03",
    features: [
      "Max Range: 150 km",
      "Max Speed: 55 km/h",
      "Charging: 4 hours (12A)",
    ],
  },
  {
    id: 3,
    name: "SE03 Max",
    img: se03max_1,
    link: "/se03max",
    features: [
      "Max Range: 120 km",
      "Max Speed: 65 km/h",
      "Charging: 4 hours (12A)",
    ],
  },
];

export const SE03Lite = [
  { id: "1", specification: "Battery", value: "1.8Kwh" },
  {
    id: "2",
    specification: "Battery features",
    value: ["LFP with 1500 cycles", "Active Balancing", "Waterproof (IP67)"],
  },
  { id: "3", specification: "Battery warranty", value: "3 Years" },
  { id: "4", specification: "Charging time", value: "3 hours (12A)" },
  { id: "5", specification: "Motor", value: "1500W" },
  { id: "6", specification: "Max speed", value: "55 km/h" },
  { id: "7", specification: "Warranty on electronics", value: "1 year" },
  { id: "8", specification: "Max range (@30km/h)", value: "100 km" },
  { id: "9", specification: "Max range (@45km/h)", value: "90 km" },
  { id: "10", specification: "Max range (@full speed)", value: "60 km" },
  {
    id: "11",
    specification: "Other key benefits",
    value: [
      "Fire-safe battery",
      "Range prediction",
      "Comfortable ride",
      "Stable and safe",
    ],
  },
];

export const SE03 = [
  { id: "1", specification: "Battery", value: "2.7Kwh" },
  {
    id: "2",
    specification: "Battery features",
    value: ["LFP with 1500 cycles", "Active Balancing", "Waterproof (IP67)"],
  },
  { id: "3", specification: "Battery warranty", value: "3 Years" },
  { id: "4", specification: "Charging time", value: "4 hours (12A)" },
  { id: "5", specification: "Motor", value: "1500W" },
  { id: "6", specification: "Max speed", value: "55 km/h" },
  { id: "7", specification: "Warranty on electronics", value: "1 year" },
  { id: "8", specification: "Max range (@30km/h)", value: "150 km" },
  { id: "9", specification: "Max range (@45km/h)", value: "110 km" },
  { id: "10", specification: "Max range (@full speed)", value: "90 km" },
  {
    id: "11",
    specification: "Other key benefits",
    value: [
      "Fire-safe battery",
      "Range prediction",
      "Comfortable ride",
      "Stable and safe",
    ],
  },
];

export const SE03Max = [
  { id: "1", specification: "Battery", value: "2.7Kwh" },
  {
    id: "2",
    specification: "Battery features",
    value: ["LFP with 1500 cycles", "Active Balancing", "Waterproof (IP67)"],
  },
  { id: "3", specification: "Battery warranty", value: "3 Years" },
  { id: "4", specification: "Charging time", value: "4 hours (12A)" },
  { id: "5", specification: "Motor", value: "2000W" },
  { id: "6", specification: "Max speed", value: "65 km/h" },
  { id: "7", specification: "Warranty on electronics", value: "1 year" },
  { id: "8", specification: "Max range (@30km/h)", value: "120 km" },
  { id: "9", specification: "Max range (@45km/h)", value: "100 km" },
  { id: "10", specification: "Max range (@full speed)", value: "80 km" },
  {
    id: "11",
    specification: "Other key benefits",
    value: [
      "Fire-safe battery",
      "Range prediction",
      "Comfortable ride",
      "Stable and safe",
    ],
  },
];

export const ImagesSE03Lite = [
  { id: 1, image: se03lite_1 },
  { id: 2, image: group },
];

export const ImagesSE03 = [
  { id: 1, image: se03_1 },
  { id: 2, image: se03_2 },
  { id: 3, image: se03_3 },
  { id: 4, image: group },
];

export const ImagesSE03Max = [
  { id: 1, image: se03max_1 },
  { id: 2, image: se03max_2 },
  { id: 3, image: se03max_3 },
  { id: 4, image: special_edition },
  { id: 5, image: group },
];

// export const CONTACT = [
//   {
//     id: 1,
//     title: "Location",
//     text: "Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India",
//   },
//   {
//     id: 2,
//     title: "Mobile No.",
//     text: " +91-9023987528",
//   },
//   {
//     id: 3,
//     title: "Mail",
//     text: "info@rhyno.in",
//   },
// ];

export const USP = [
  {
    id: 1,
    icon: FaCarBattery,
    title: "LFP Battery",
    content:
      "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!",
    link: "/lfp-battery",
  },
  {
    id: 2,
    icon: GiCarWheel,
    title: "Wider Tyres",
    content:
      "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.",
    link: "/wider-tyres",
  },
  {
    id: 3,
    icon: FaMagnifyingGlassChart,
    title: "Range Prediction",
    content:
      "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.",
    link: "/range-prediction",
  },
  {
    id: 4,
    icon: FaPersonRays,
    title: "Extraordinery Experience",
    content:
      "Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!",
    link: "/experience",
  },
  {
    id: 5,
    icon: FaPencilRuler,
    title: "Rugged and Simple Design",
    content:
      "We've had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not to take a test ride? Click here to locate your nearest dealership or book a test ride at your home!",
    link: "/design",
  },
];

export const FOOTER_ITEMS = [
  [
    { id: 1, text: "Privacy policy", link: "/#" },
    { id: 2, text: "Refund policy", link: "/#" },
    { id: 3, text: "Website policy", link: "/#" },
  ],
  [
    { id: 1, text: "Contact us", link: "/#contact" },
    { id: 2, text: "Products", link: "/#products" },
  ],
  [{ id: 1, text: "Carrer", link: "/#" }],
];
