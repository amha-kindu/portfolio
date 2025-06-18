import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";


const partners = [
  {
    name: "Upwork",
    iconUrl: "/assets/partners/upwork.svg",
    website: "https://www.upwork.com/freelancers/~01378cbb35751ddd6b",
  },
  {
    name: "PartCAD",
    iconUrl: "/assets/partners/partcad.png",
    website: "https://partcad.org/",
  },
  {
    name: "Nexus Technology",
    iconUrl: "/assets/partners/nexustech.png",
    website: "https://nexustechnologyet.com/",
  },
  {
    name: "Eskalate",
    iconUrl: "/assets/partners/eskalate.svg",
    website: "https://eskalate.io/"
  },
  {
    name: "Attalos",
    iconUrl: "/assets/partners/attalos.png",
    website: "https://attalos.io/",
  },
];


export default function Partners() {
  return (
    <Card className="w-full p-4 py-12 bg-inherit border-none">
      <CardContent className="flex items-center justify-evenly">
        {partners.map((company) => (
          <a
            key={company.name}
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center space-y-6 text-center hover:opacity-80 transition"
          >
            <div className="relative w-full h-24">
              <Image
                src={company.iconUrl}
                fill
                alt={`${company.name} logo`}
                className="object-contain"
              />
            </div>
            <span className={`text-white text-base font-medium`}>{company.name}</span>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
