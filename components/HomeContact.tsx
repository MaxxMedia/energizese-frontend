import Link from "next/link";

export default function HomeContact() {
  return (
    <section className="home-contact common-wrapper">
      <div className="container">
        <div className="home-contact-wrap">
          <div className="home-contact-title">
      <h2>
  Let&apos;s Connect <br /> & Grow Together!
</h2>
</div>

<div className="home-contact-para">
  <p>
    Connect with Maxx Business Media to explore new markets, build valuable
    business relationships, and create opportunities for sustainable growth.
  </p>
          </div>
          <div className="home-contact-link">
            <Link href="/contact-us">
              <figure>
                <img src="/assets/images/bg-contact.png" alt="Why work with us" />
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
