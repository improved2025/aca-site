export type Convention = {
  year: number;
  city: string;
  subtitle?: string;
  flyer: string; // /convention/xxxx.jpeg
  note?: string;
  isPromo?: boolean;
};

export const conventions: Convention[] = [
  {
    year: 2026,
    city: "Maryland",
    subtitle: "New Carrollton • Metro Points Hotel",
    flyer: "/convention/2026.jpeg",
    isPromo: true,
  },

  {
    year: 2025,
    city: "Ohio",
    subtitle: "Annual Convention",
    flyer: "/convention/2025.jpeg",
  },
  {
    year: 2024,
    city: "Atlanta",
    subtitle: "Annual Convention",
    flyer: "/convention/2024.jpeg",
  },
  {
    year: 2023,
    city: "Houston",
    subtitle: "Annual Convention",
    flyer: "/convention/2023.jpeg",
  },
  {
    year: 2022,
    city: "Maryland/Washington DC",
    subtitle: "Annual Convention",
    flyer: "/convention/2022.jpeg",
  },
  {
    year: 2020,
    city: "Maryland/Washington DC",
    subtitle: "Annual Convention",
    flyer: "/convention/2020.jpeg",
  },
  {
    year: 2019,
    city: "Kansas City",
    subtitle: "Annual Convention",
    flyer: "/convention/2019.jpeg",
  },
  {
    year: 2018,
    city: "Boston",
    subtitle: "Annual Convention",
    flyer: "/convention/2018.jpeg",
  },
];