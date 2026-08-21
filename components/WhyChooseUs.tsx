import Accordion from "@/components/Accordion";

export default function WhyChooseUs() {
  return (
    <section className="pillars-excellence-wrapper common-wrapper">
      <div className="container">
        <div className="pillars-excellence-left">
          <div className="img-holder">
            <figure>
              <img
                src="/uploads/9da78afe28956f8d.jpg"
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
                src="/assets/images/icon-why-us.png"
                width={170}
                height={194}
                alt="Core Value"
              />
            </figure>
          </div>
        </div>
        <div className="pillars-excellence-right bottom-in">
          <h2>
            Why <br /> Choose Us?
          </h2>
          <p></p>
          <Accordion
            items={[
              {
                title: " Industry Focused Expertise",
                content: (
                  <p>
                    We strive to provide excellent quality products and services
                    to our customers. Our stringent quality check practices help
                    us provide the best standards of goods and services.
                  </p>
                ),
              },
              {
                title: " Industrial and Infrastructure Solutions",
                content: <p>Industrial and Infrastructure Solutions</p>,
              },
              {
                title: " Custom Tailored Solutions",
                content: (
                  <p>
                    We strive to provide excellent quality products and services
                    to our customers. Our stringent quality check practices help
                    us provide the best standards of goods and services.
                  </p>
                ),
              },
              {
                title: " Commitment to Quality & Safety",
                content: (
                  <p>
                    We nurture the talent of our people as well as our
                    stakeholders to achieve greater heights in the industry at
                    the same time focusing sustainable development, our efforts
                    help us uplift the local economy, talent and culture.
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
