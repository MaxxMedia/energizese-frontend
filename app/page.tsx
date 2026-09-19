import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import HomeContact from "@/components/HomeContact";
import PillarsOfExcellence from "@/components/PillarsOfExcellence";
import WhyChooseUs from "@/components/WhyChooseUs";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home | Energizese",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <main>
        <section className="welcome-energizese">
          <div className="container bottom-in">
            <span>Welcome to Maxx Business Media Pvt. Ltd.</span>
           <p className="text-justify leading-relaxed">
  Maxx Business Media Pvt. Ltd. is a leading B2B media and business events company focused on exhibitions,
  conferences, trade publications, and digital platforms. We connect industries, businesses,
  and professionals through high-value platforms that promote innovation, networking, knowledge sharing,
  and business growth...
</p>
            <Link className="btn-common" href="/about-us">
              Who we are
            </Link>
          </div>
        </section>

        <PillarsOfExcellence />

        <section className="product-section common-wrapper">
          <div className="container bottom-in">
            <h2>Our Services</h2>
            <div className="product-listing">
              <div className="item">
                {services.map((service) => (
                  <div className="cell" key={service.id}>
                    <Link href={`/services#${service.id}`}>
                      <figure>
                        <img className="img-fluid" src={service.image} alt="" />
                      </figure>
                      <div className="back-details">
                        <h4>{service.title}</h4>
                      </div>
                      <div className="front-details">
                        <figcaption>
                          <h4>{service.title}</h4>
                        </figcaption>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="partner-wrapper common-wrapper">
          <div className="container">
            <div className="partner-left bottom-in">
              <h2>Expertise That Drives Business Growth</h2>
<p>
  With deep industry knowledge and an experienced team, we create impactful
  exhibitions, conferences, media platforms, and digital solutions that
  connect businesses and drive meaningful growth.
</p>
              <Link className="btn-common" href="/contact-us">
                More Details
              </Link>
            </div>
            <div className="partner-right">
              <div className="img-holder">
                <figure>
                  <img
                    src="/uploads/fb3cd122ff3a7aa3.png"
                    width={525}
                    height={585}
                    alt="Partner With Us"
                  />
                </figure>
                <div className="frame-animo scene1">
                  <figure className="img1" data-depth="0.2">
                    <img
                      src="/assets/images/img-hexagon.png"
                      width={170}
                      height={188}
                      alt="Partner With Us"
                    />
                  </figure>
                </div>
                <figure className="img2">
                  <img
                    src="/assets/images/icon-partner.png"
                    width={170}
                    height={194}
                    alt="Partner With Us"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        <section className="clients-wraper common-wrapper">
          <div className="container">
            <span>Our Clients</span>
            <div className="client-slider owl-carousel" />
          </div>
        </section>

        <HomeContact />
      </main>
    </>
  );
}
