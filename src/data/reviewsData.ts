export interface Review {
  id: number;
  name: string;
  avatar: string;
  avatarBg: string;
  rating: number;
  timeAgo: string;
  text: string;
  language: "en" | "bn" | "";
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Rafiqul Islam",
    avatar: "R",
    avatarBg: "#2253C7",
    rating: 5,
    timeAgo: "2 weeks ago",
    text: "Excellent service! The car was spotless and the driver was extremely punctual. Highly recommend Khaza Enterprise for corporate travel in Dhaka.",
    language: "en",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    avatar: "N",
    avatarBg: "#0E7A4A",
    rating: 5,
    timeAgo: "3 weeks ago",
    text: "আমি খাজা এন্টারপ্রাইজের সেবায় সত্যিই মুগ্ধ। গাড়ি পরিষ্কার, চালক ভদ্র এবং সময়মতো পৌঁছে দিয়েছে। আবারও ব্যবহার করব।",
    language: "bn",
  },
  {
    id: 3,
    name: "Md. Kamal Hossain",
    avatar: "K",
    avatarBg: "#C45E0A",
    rating: 5,
    timeAgo: "1 month ago",
    text: "We hired Khaza Enterprise for our office staff transport for three months. Absolutely reliable — never a single delay. The fleet is well-maintained and the staff is very professional.",
    language: "en",
  },
  {
    id: 4,
    name: "Sharmin Akter",
    avatar: "S",
    avatarBg: "#8B1A3A",
    rating: 5,
    timeAgo: "1 month ago",
    text: "দীর্ঘ পথের যাত্রায় গাড়ির মান এবং চালকের আচরণ অত্যন্ত সন্তোষজনক ছিল। ধন্যবাদ খাজা এন্টারপ্রাইজ।",
    language: "bn",
  },
  {
    id: 5,
    name: "Tanvir Ahmed",
    avatar: "T",
    avatarBg: "#6D28D9",
    rating: 5,
    timeAgo: "2 months ago",
    text: "Used their Toyota Hiace for a team field trip outside Dhaka. Very comfortable ride, great AC, and the driver knew the routes well. Will definitely book again for our next project.",
    language: "en",
  },
  {
    id: 6,
    name: "Fatema Begum",
    avatar: "F",
    avatarBg: "#B8860B",
    rating: 5,
    timeAgo: "2 months ago",
    text: "স্কুলের জন্য নিয়মিত পরিবহন সেবা নিচ্ছি। প্রতিদিন সঠিক সময়ে গাড়ি আসে এবং বাচ্চাদের নিরাপদে পৌঁছে দেয়। অনেক বিশ্বস্ত একটি প্রতিষ্ঠান।",
    language: "bn",
  },
  {
    id: 7,
    name: "Imran Chowdhury",
    avatar: "I",
    avatarBg: "#3D8B1A",
    rating: 5,
    timeAgo: "1 week ago",
    text: "Reliable airport transfer service. Driver was waiting at arrivals well before time. The Land Cruiser was immaculate. This is now my go-to service for all airport trips.",
    language: "en",
  },
  {
    id: 8,
    name: "Sumaiya Khanam",
    avatar: "S",
    avatarBg: "#1A7A8B",
    rating: 4,
    timeAgo: "6 weeks ago",
    text: "Noah গাড়িটি পরিবারের সবার জন্য খুবই আরামদায়ক ছিল। ড্রাইভার অত্যন্ত ভদ্র এবং অভিজ্ঞ। সার্ভিস আরও একটু উন্নত হলে ৫ স্টার দিতাম।",
    language: "bn",
  },
];