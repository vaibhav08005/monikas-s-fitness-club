import { Discipline, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "OUR PHILOSOPHY", href: "#manifesto" },
  { label: "SERVICES", href: "#disciplines" },
  { label: "LOCATION", href: "#locations" },
  { label: "JOIN US", href: "#locations" },
];

export const DISCIPLINES: Discipline[] = [
  {
    id: "01",
    title: "YOGA",
    description: "Specialized yoga sessions for flexibility, mindfulness, and women's wellness.",
    image: "/images/yoga.png"
  },
  {
    id: "02",
    title: "ZUMBA",
    description: "High-energy dance fitness to burn calories while having fun.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "WEIGHT GAIN",
    description: "Personalized programs and diet guidance for healthy weight gain.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "CARDIO",
    description: "Heart-pumping sessions for stamina and fat loss.",
    image: "/images/cardio.png"
  },
  {
    id: "05",
    title: "TRAINING",
    description: "Personal training with certified female trainers for your goals.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
  }
];