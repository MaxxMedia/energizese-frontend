import type { Metadata } from "next";
import HomeContact from "@/components/HomeContact";
import InnerHero from "@/components/InnerHero";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | Maxx Business Media",
};

export default function AboutPage() {
  return (
    <>
      <InnerHero
        src="/assets/images/about-banner.jpg"
        alt="About Maxx Business Media"
      />

      <main>
        <section className="about-us-wrapper common-wrapper">
          <div className="container bottom-in">
            <h2>About Us</h2>

            <p>
              Maxx Business Media Pvt. Ltd. is a B2B media and business events
              company focused on exhibitions, conferences, trade publications,
              and digital business platforms. We connect industries,
              businesses, and professionals through high-value platforms that
              promote innovation, networking, knowledge sharing, and business
              growth.
              <br />
              <br />
              With a strong understanding of industrial and manufacturing
              sectors, our experienced team creates industry-focused platforms
              that bring together exhibitors, buyers, technology providers,
              professionals, and industry leaders.
            </p>
          </div>
        </section>

        <section className="skill-wrapper">
          <div className="container bottom-in">
            <ul>
              <li>
                <figure>
                  <img
                    src="/uploads/efdccbbf45f8128a.png"
                    width={132}
                    height={149}
                    alt="Industry Focus"
                  />
                </figure>
                <h3>Industry Focus</h3>
              </li>

              <li>
                <figure>
                  <img
                    src="/uploads/67771f22ac538b96.png"
                    width={132}
                    height={149}
                    alt="Professional Excellence"
                  />
                </figure>
                <h3>Excellence</h3>
              </li>

              <li>
                <figure>
                  <img
                    src="/uploads/3780ffd93829a06c.png"
                    width={132}
                    height={149}
                    alt="Business Connectivity"
                  />
                </figure>
                <h3>Connectivity</h3>
              </li>
            </ul>
          </div>
        </section>

        <section className="our-vision-wrapper common-wrapper">
          <div className="container">
            <div className="vision-left">
              <figure
                style={{
                  backgroundImage:
                    "url(/uploads/685fb6b1f2f30242.jpg)",
                }}
              >
                <img
                  src="/uploads/685fb6b1f2f30242.jpg"
                  width={740}
                  height={888}
                  alt="Our Mission"
                />
              </figure>
            </div>

            <div className="vision-right">
              <div className="content-area bottom-in">
                <h2>Our Mission</h2>

                <p>
                  To create impactful business platforms that connect
                  industries, showcase innovation, facilitate meaningful
                  networking, and generate opportunities for businesses to
                  grow and expand.
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
                    To become a trusted global platform for industry
                    exhibitions, business events, media, and digital
                    connectivity, creating lasting value for businesses and
                    professionals across diverse sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-core-right">
              <figure
                style={{
                  backgroundImage:
                    "url(/uploads/e2fe2a04f2a44182.jpg)",
                }}
              >
                <img
                  src="/uploads/e2fe2a04f2a44182.jpg"
                  width={740}
                  height={888}
                  alt="Our Vision"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="awards-wrapper common-wrapper">
          <div className="container bottom-in">
            <h2>Our Focus</h2>

            <div className="certificate-wrap">
              <div className="card-row">
                {[
                  [
                    "c97e5a1e64b91fac.jpg",
                    "B2B Exhibitions & Trade Shows",
                  ],
                  [
                    "322606800044e4ff.jpg",
                    "Conferences & Industry Summits",
                  ],
                  [
                    "29742848ca831c4e.jpg",
                    "Trade Publications & Media",
                  ],
                  [
                    "27bf759901727b18.jpg",
                    "Digital Business Platforms",
                  ],
                ].map(([file, alt]) => (
                  <div className="card" key={file}>
                    <div className="card-image">
                      <figure>
                        <img
                          src={`/uploads/${file}`}
                          alt={alt}
                        />
                      </figure>
                    </div>
                    <h3>{alt}</h3>
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