import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Energizese",
};

export default function ServicesPage() {
  return (
    <>
      <InnerHero src="/assets/images/img-hero-services.jpg" alt="Services" />
      <main>
        <section className="services-inner">
          <div className="container bottom-in">
            <span>Our Services</span>
            <p>
              We provide innovative and reliable mechanical solutions for
              industrial, commercial, and residential projects, ensuring
              efficiency, safety, and seamless integration.
            </p>
          </div>
        </section>
        <section className="services-list-wrap">
          <div className="container">
            {services.map((service, index) => {
              const image = (
                <div className="service-left">
                  <figure>
                    <img src={service.image} alt={service.title} />
                  </figure>
                </div>
              );
              const copy = (
                <div className="service-right">
                  <h2>{service.title}</h2>
                  <p>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              );

              return (
                <div className="services-list bottom-in" id={service.id} key={service.id}>
                  {index % 2 === 1 ? (
                    <>
                      {copy}
                      {image}
                    </>
                  ) : (
                    <>
                      {image}
                      {copy}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
