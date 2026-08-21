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
            Our values are the bedrock of our company and the reason our clients
            trust us. They shape our approach to every project and inspire us to
            exceed expectations with professionalism and accountability.
          </span>
          <Accordion
            items={[
              {
                title: "Precision",
                content: (
                  <p>
                    We execute every project with meticulous attention to detail
                    and strict adherence to standards. Our disciplined approach
                    ensures accuracy, consistency, and superior results.
                  </p>
                ),
              },
              {
                title: "Innovation",
                content: (
                  <p>
                    We embrace forward-thinking solutions and advanced
                    technologies. By continuously evolving, we deliver smarter,
                    more efficient outcomes for our clients.
                  </p>
                ),
              },
              {
                title: "Quality",
                content: (
                  <p>
                    Excellence is embedded in everything we do. From planning to
                    delivery, we ensure durability, reliability, and outstanding
                    performance.
                  </p>
                ),
              },
              {
                title: "Integrity",
                content: (
                  <p>
                    Trust is the foundation of our partnerships. We operate with
                    transparency, accountability, and unwavering ethical
                    principles.
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
