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

<p>
  We create industry-focused platforms that connect businesses, showcase
  innovation, and generate meaningful opportunities for growth.
</p>

<Accordion
  items={[
    {
      title: "Industry-Focused Expertise",
      content: (
        <p>
          Our deep understanding of industrial and manufacturing sectors helps
          us create relevant exhibitions, conferences, and media platforms that
          address real industry needs.
        </p>
      ),
    },
    {
      title: "Powerful Industry Network",
      content: (
        <p>
          We connect exhibitors, manufacturers, technology providers, buyers,
          professionals, and industry leaders to create valuable business
          relationships and networking opportunities.
        </p>
      ),
    },
    {
      title: "Integrated Media & Promotion",
      content: (
        <p>
          Our exhibitions and events are supported by trade publications,
          digital platforms, social media, and targeted marketing to maximize
          industry visibility and reach.
        </p>
      ),
    },
    {
      title: "Commitment to Excellence",
      content: (
        <p>
          We are committed to delivering professionally managed events and
          high-quality business platforms that create value for exhibitors,
          visitors, sponsors, and industry partners.
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
