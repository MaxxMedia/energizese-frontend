import type { Metadata } from "next";
import HomeContact from "@/components/HomeContact";
import InnerHero from "@/components/InnerHero";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | Energizese",
};

export default function AboutPage() {
  return (
    <>
      <InnerHero src="/assets/images/about-banner.jpg" alt="About Us" />
      <main>
        <section className="about-us-wrapper common-wrapper">
          <div className="container bottom-in">
            <h2>About Us</h2>
            <p>
              Energizese is a specialized mechanical services firm catering to
              the industrial, commercial, and residential industry. With a focus
              on efficiency, precision, and innovation, we provide high- quality
              mechanical solutions that enhance the functionality and longevity
              of interior spaces.
              <br />
              <br />
              Despite being a newly established firm, our team consists of
              experienced professionals dedicated to delivering top-notch
              solutions. We aim to bridge the gap between mechanical excellence
              and interior aesthetics, ensuring every project is executed with
              precision.
            </p>
          </div>
        </section>
        <section className="skill-wrapper">
          <div className="container bottom-in">
            <ul>
              <li>
                <figure>
                  <img src="/uploads/efdccbbf45f8128a.png" width={132} height={149} alt="Respect" />
                </figure>
                <h3>Respect</h3>
              </li>
              <li>
                <figure>
                  <img src="/uploads/67771f22ac538b96.png" width={132} height={149} alt="Accountability" />
                </figure>
                <h3>Accountability</h3>
              </li>
              <li>
                <figure>
                  <img src="/uploads/3780ffd93829a06c.png" width={132} height={149} alt="Diversity" />
                </figure>
                <h3>Diversity</h3>
              </li>
            </ul>
          </div>
        </section>
        <section className="our-vision-wrapper common-wrapper">
          <div className="container">
            <div className="vision-left">
              <figure style={{ backgroundImage: "url(/uploads/685fb6b1f2f30242.jpg)" }}>
                <img src="/uploads/685fb6b1f2f30242.jpg" width={740} height={888} alt="Our Mission" />
              </figure>
            </div>
            <div className="vision-right">
              <div className="content-area bottom-in">
                <h2>Our Mission</h2>
                <p>
                  To provide cutting-edge mechanical services that enhance
                  industrial, commercial, and residential industry ensuring
                  durability, efficiency, and seamless integrations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-core-value-wrapper common-wrapper">
          <div className="container">
            <div className="about-core-left">
              <div className="outer-area bottom-in">
                <h2>Our Vision</h2>
                <div className="content-area">
                  <p>
                    To become a trusted name in mechanical solutions for the
                    industrial, commercial, and residential industry, known for
                    reliability, quality, and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-core-right">
              <figure style={{ backgroundImage: "url(/uploads/e2fe2a04f2a44182.jpg)" }}>
                <img src="/uploads/e2fe2a04f2a44182.jpg" width={740} height={888} alt="Our Vision" />
              </figure>
            </div>
          </div>
        </section>
        <section className="awards-wrapper common-wrapper">
          <div className="container bottom-in">
            <h2>Awards and Certificates</h2>
            <div className="certificate-wrap">
              <div className="card-row">
                {[
                  ["c97e5a1e64b91fac.jpg", "ISO 14001:2015 CERTIFICATE"],
                  ["322606800044e4ff.jpg", "ISO 45001:2018 CERTIFICATE"],
                  ["29742848ca831c4e.jpg", "ISO 9001:2015 CERTIFICATE"],
                  ["27bf759901727b18.jpg", "ISO 21500:2021 CERTIFICATE"],
                ].map(([file, alt]) => (
                  <div className="card" key={file}>
                    <div className="card-image">
                      <figure>
                        <img src={`/uploads/${file}`} alt={alt} />
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <WhyChooseUs />
        <HomeContact />
      </main>
    </>
  );
}
