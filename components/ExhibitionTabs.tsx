"use client";

import { useState } from "react";
import { Container } from "@/components/ui";

const exhibitions = [
  {
    id: "diemex-2026",
    title: "DIEMEX 2026",
    subtitle: "International Die & Mould Exhibition",
    date: "8–10 October 2026",
    venue: "Auto Cluster Exhibition Centre, Pune",
    description:
      "DIEMEX 2026 brings together die and mould manufacturers, toolmakers, technology providers, automotive companies, engineering professionals, and buyers on a dedicated platform for the die and mould industry.",
    image: "/uploads/diemex-2026.jpg",
    status: "Upcoming",
  },
  {
    id: "plastmould-2026",
    title: "PLASTMOULD 2026",
    subtitle: "Plastics & Mould Technology Exhibition",
    date: "2026",
    venue: "India",
    description:
      "PLASTMOULD brings together plastics manufacturers, mould makers, machinery manufacturers, technology providers, material suppliers, and industry professionals to explore the latest developments in plastics and mould technology.",
    image: "/uploads/plastmould-2026.jpg",
    status: "Upcoming",
  },
  {
    id: "castings-tech-2026",
    title: "CASTINGS TECH 2026",
    subtitle: "Casting Technology Exhibition",
    date: "2026",
    venue: "India",
    description:
      "CASTINGS TECH 2026 provides a focused business platform for foundries, casting manufacturers, equipment suppliers, technology providers, material suppliers, and professionals across the casting industry.",
    image: "/uploads/castings-tech-2026.jpg",
    status: "Upcoming",
  },
  {
    id: "indiamet-2027",
    title: "INDIAMET 2027",
    subtitle: "International Metrology Exhibition",
    date: "22–24 April 2027",
    venue: "Auto Cluster Exhibition Centre, Pune",
    description:
      "INDIAMET 2027 is a dedicated platform for metrology, measurement, inspection, calibration, testing, CMM, machine vision, NDT, quality assurance, and quality control technologies.",
    image: "/uploads/indiamet-2027.jpg",
    status: "Upcoming",
  },
];

export default function ExhibitionTabs() {
  const [activeTab, setActiveTab] = useState(exhibitions[0].id);

  const activeExhibition = exhibitions.find(
    (exhibition) => exhibition.id === activeTab,
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Exhibition Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {exhibitions.map((exhibition) => (
            <button
              key={exhibition.id}
              type="button"
              onClick={() => setActiveTab(exhibition.id)}
              className={`px-5 py-3 text-sm font-semibold transition ${
                activeTab === exhibition.id
                  ? "bg-orange text-white"
                  : "bg-sand text-navy hover:bg-orange hover:text-white"
              }`}
            >
              {exhibition.title}
            </button>
          ))}
        </div>

        {/* Active Exhibition */}
        {activeExhibition && (
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img
                src={activeExhibition.image}
                alt={activeExhibition.title}
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <span className="mb-3 inline-block bg-orange px-4 py-2 text-sm font-medium text-white">
                {activeExhibition.status}
              </span>

              <h2 className="text-3xl font-semibold text-navy md:text-4xl">
                {activeExhibition.title}
              </h2>

              <h3 className="mt-2 text-xl font-medium text-orange">
                {activeExhibition.subtitle}
              </h3>

              <div className="mt-6 space-y-2 text-muted">
                <p>
                  <strong className="text-navy">Date:</strong>{" "}
                  {activeExhibition.date}
                </p>

                <p>
                  <strong className="text-navy">Venue:</strong>{" "}
                  {activeExhibition.venue}
                </p>
              </div>

              <p className="mt-6 leading-8 text-muted">
                {activeExhibition.description}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}