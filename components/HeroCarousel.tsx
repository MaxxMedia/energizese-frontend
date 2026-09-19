"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/public/uploads/e5e5ae6bfd244ab7.jpg",
    title: "Your Trusted Partner in Every Step",
  },
  {
    image: "/public/uploads/c628c83027401715.jpg",
    title: "Specialized Mechanical Services Firm",
  },
    {
    image: "/public/uploads/uploads/e5e5ae6bfd244ab7.jpg",
    title: "Your Trusted Partner in Every Step",
  },
  {
    image: "/public/uploads/c628c83027401715.jpg",
    title: "Specialized Mechanical Services Firm",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="home-hero-wrapper">
      <div className="home-hero owl-carousel owl-loaded">
        {slides.map((slide, index) => (
          <div key={slide.title} className={`item${index === active ? " is-active" : ""}`}>
            <figure>
              <img src={slide.image} width={1903} height={939} alt="" />
            </figure>
            <div className="container">
              <div className="hexagon">
                <figure>
                  <img src="/assets/images/bg-hexagon.png" width={527} height={587} alt="" />
                </figure>
                <div className="banner-content">
                  <h1>{slide.title}</h1>
                  <Link className="btn-common" href="/services">
                    KNOW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="owl-nav">
          <button
            type="button"
            className="owl-prev"
            onClick={() =>
              setActive((current) => (current === 0 ? slides.length - 1 : current - 1))
            }
          >
            prev
          </button>
          <button
            type="button"
            className="owl-next"
            onClick={() => setActive((current) => (current + 1) % slides.length)}
          >
            next
          </button>
        </div>
        <div className="owl-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={index === active ? "active" : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
