import Link from "next/link";

export default function HomeContact() {
  return (
    <section className="home-contact common-wrapper">
      <div className="container">
        <div className="home-contact-wrap">
          <div className="home-contact-title">
            <h2>
              Let us Innovate <br /> Together !
            </h2>
          </div>
          <div className="home-contact-para">
            <p>
              We are here to assist you with cutting-edge mechanical solutions
              for your projects. We&apos;re just a call or message away.
              Let&apos;s create efficient, future-ready spaces together.
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
