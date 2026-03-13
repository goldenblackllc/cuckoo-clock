export interface Product {
  id: string;
  name: string;
  price: number;
  category: "chalet" | "carved";
  movement: "1-day" | "8-day";
  description: string;
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "bfc-001",
    name: "Schwarzwald Elegance",
    price: 2850,
    category: "carved",
    movement: "8-day",
    description:
      "A masterfully hand-carved timepiece featuring intricate oak leaves and a majestic stag, powered by a precision 8-day Regula movement.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    featured: true,
  },
  {
    id: "bfc-002",
    name: "Alpine Chalet Grande",
    price: 3200,
    category: "chalet",
    movement: "8-day",
    description:
      "An exquisite chalet-style clock depicting traditional Black Forest life, with hand-painted figurines and a musical Swiss movement.",
    image:
      "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=800&q=80",
    featured: true,
  },
  {
    id: "bfc-003",
    name: "Mechanik No. 7",
    price: 1950,
    category: "carved",
    movement: "1-day",
    description:
      "A refined traditional carved clock with vine and bird motifs, featuring a hand-finished 1-day brass movement with night shutoff.",
    image:
      "https://images.unsplash.com/photo-1533709752211-118fcaf03312?w=800&q=80",
    featured: true,
  },
  {
    id: "bfc-004",
    name: "Berghaus Klassik",
    price: 2400,
    category: "chalet",
    movement: "1-day",
    description:
      "A beautifully detailed chalet clock with water wheel, woodcutters, and dancing figurines. Hand-assembled in Schonach.",
    image:
      "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80",
    featured: false,
  },
  {
    id: "bfc-005",
    name: "Eichenblatt Master",
    price: 4100,
    category: "carved",
    movement: "8-day",
    description:
      "Our finest carved clock — a museum-quality piece with over 200 hours of hand-carving. Features a triple-weight 8-day movement.",
    image:
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80",
    featured: true,
  },
  {
    id: "bfc-006",
    name: "Waldhaus Petite",
    price: 1650,
    category: "chalet",
    movement: "1-day",
    description:
      "A charming smaller chalet design perfect for intimate spaces, with hand-painted balconies and a reliable 1-day cuckoo mechanism.",
    image:
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80",
    featured: false,
  },
  {
    id: "bfc-007",
    name: "Jagdstück Heritage",
    price: 3650,
    category: "carved",
    movement: "8-day",
    description:
      "A hunting-themed masterwork with a carved fox, pheasants, and oak branches. Equipped with a Regula 8-day musical movement.",
    image:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
    featured: false,
  },
  {
    id: "bfc-008",
    name: "Blumenhaus Romantic",
    price: 2100,
    category: "chalet",
    movement: "8-day",
    description:
      "A romantic chalet clock adorned with flower boxes and spinning dancers. The 8-day movement ensures effortless weekly winding.",
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
    featured: false,
  },
  {
    id: "bfc-009",
    name: "Uhrmacher Edition",
    price: 5200,
    category: "carved",
    movement: "8-day",
    description:
      "The clockmaker's choice — a limited-edition deeply carved masterpiece with exposed brass gears and a signed certificate of authenticity.",
    image:
      "https://images.unsplash.com/photo-1550534791-2677533605ab?w=800&q=80",
    featured: true,
  },
  {
    id: "bfc-010",
    name: "Sonnenuhr Moderne",
    price: 1850,
    category: "carved",
    movement: "1-day",
    description:
      "A contemporary interpretation of the traditional carved clock, blending clean lines with classic motifs. A perfect entry into mechanical horology.",
    image:
      "https://images.unsplash.com/photo-1415604934674-561df9abf539?w=800&q=80",
    featured: false,
  },
];
