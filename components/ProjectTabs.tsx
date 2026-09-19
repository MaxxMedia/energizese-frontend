"use client";

import { useState } from "react";
import { cn, Container } from "@/components/ui";

type Project = {
  image: string;
  title: string;
  alt: string;
  report?: string;
};

const ongoing: Project[] = [
  {
    image: "/uploads/75595fa0241f8ea2.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing  tempor.",
    alt: "Project 1",
  },
  {
    image: "/uploads/cd9b64b888233dd9.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    alt: "Project 2",
  },
  {
    image: "/uploads/941307dcbc9f1e53.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    alt: "Project 3",
  },
];

const completed: Project[] = [
  {
    image: "/uploads/1028b36d78e301d7.png",
    title: "",
    alt: "DHL",
  },
  {
    image: "/uploads/02b5d79228deac71.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    alt: "Project 4",
    report: "https://testlink.com/",
  },
  {
    image: "/uploads/1eabae4031e51fc5.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    alt: "Project 5",
    report: "/uploads/3f32e845b8ab5822.jpg",
  },
  {
    image: "/uploads/37c3018a5923bb69.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    alt: "Project 6",
    report: "/uploads/c045faf4fdba096a.png",
  },
  {
    image: "/uploads/30cb4bcf07cddd2d.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.",
    alt: "Project 7",
    report: "https://testlnk.com/",
  },
];

export default function ProjectTabs() {
  const [tab, setTab] = useState<"ongoing" | "completed">("ongoing");
  const items = tab === "ongoing" ? ongoing : completed;

  return (
    <section className="bg-white pb-20">
      <Container>
        <div className="mb-8 flex gap-3">
          <button
            type="button"
            className={cn(
              "rounded-md px-5 py-3 text-sm font-medium",
              tab === "ongoing" ? "bg-orange text-white" : "bg-sand text-navy hover:bg-orange/10"
            )}
            onClick={() => setTab("ongoing")}
          >
            Ongoing events
          </button>
          <button
            type="button"
            className={cn(
              "rounded-md px-5 py-3 text-sm font-medium",
              tab === "completed" ? "bg-orange text-white" : "bg-sand text-navy hover:bg-orange/10"
            )}
            onClick={() => setTab("completed")}
          >
            Completed events
          </button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={`${item.alt}-${item.image}`} className="overflow-hidden bg-sand">
              <img src={item.image} alt={item.alt} className="h-56 w-full object-cover" />
              {item.title ? (
                <h2 className="p-4 text-lg font-medium text-navy">{item.title}</h2>
              ) : null}
              {item.report ? (
                <a
                  target="_blank"
                  href={item.report}
                  rel="noreferrer"
                  className="block px-4 pb-4 text-sm text-orange hover:underline"
                >
                  Project report
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
