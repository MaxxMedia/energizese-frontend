import Accordion from "@/components/Accordion";

export default function PillarsOfExcellence() {
  return (
    <section className="pillars-excellence-wrapper common-wrapper">
      <div className="container">
        <div className="pillars-excellence-left">
          <div className="img-holder">
            <figure>
              <img
                src="/uploads/3f7e4530b800e3d2.png"
                width={525}
                height={585}
                alt="Core Value"
              />
            </figure>
            <div className="frame-animo scene">
              <figure className="img1" data-depth="0.2">
                <img
                  width={170}
                  height={188}
                  src="/assets/images/img-hexagon.png"
                  alt="Core Value"
                />
              </figure>
            </div>
            <figure className="img2">
              <img
                src="/assets/images/icon-core-value-sub2.png"
                width={170}
                height={194}
                alt="Core Value"
              />
            </figure>
          </div>
        </div>
       <div className="pillars-excellence-right bottom-in">
  <h2>
    Our Pillars of <br /> Excellence
  </h2>

  <span>
    Our values guide everything we do and help us create meaningful platforms
    that connect industries, inspire innovation, and drive business growth.
  </span>

  <Accordion
    items={[
      {
        title: "Industry Connect",
        content: (
          <p>
            We bring together businesses, industry leaders, professionals, and
            decision-makers through focused platforms that create valuable
            connections and opportunities.
          </p>
        ),
      },
      {
        title: "Innovation",
        content: (
          <p>
            We continuously embrace new ideas, technologies, and trends to
            deliver relevant exhibitions, conferences, publications, and
            digital platforms for evolving industries.
          </p>
        ),
      },
      {
        title: "Quality",
        content: (
          <p>
            We are committed to delivering professional, well-organized, and
            high-value experiences for exhibitors, visitors, sponsors, and
            industry partners.
          </p>
        ),
      },
      {
        title: "Integrity",
        content: (
          <p>
            We build lasting relationships through transparency, accountability,
            professionalism, and a strong commitment to our partners and the
            industries we serve.
          </p>
                ),
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
