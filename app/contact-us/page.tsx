import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us | Maxx Business Media",
};

export default function ContactPage() {
  return (
    <main>
      <InnerHero
        src="/assets/images/img-hero-contact.jpg"
        alt="Contact Maxx Business Media"
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="text-center">
          <h1 className="mb-5 text-3xl font-semibold text-navy md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-muted">
            Whether you are looking to exhibit, sponsor, partner, advertise,
            or explore business opportunities, our team is here to connect
            with you and help you make the most of our industry platforms.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Swastik+Manandi+Arcade+Seshadripuram+Bengaluru"
              target="_blank"
              rel="noreferrer"
              className="bg-sand p-8 hover:text-orange"
            >
              <img
                src="/assets/images/contact-icon-1.png"
                alt="Maxx Business Media Address"
                className="mx-auto mb-4 w-16"
              />

              <span className="block font-medium">
                Maxx Business Media Pvt. Ltd.
              </span>

              <span className="mt-2 block leading-7">
                T9, Swastik Manandi Arcade,
                <br />
                SC Road, Seshadripuram,
                <br />
                Bengaluru - 560020,
                <br />
                Karnataka, India
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919148319993"
              className="bg-sand p-8 hover:text-orange"
            >
              <img
                src="/assets/images/contact-icon-2.png"
                alt="Maxx Business Media Phone"
                className="mx-auto mb-4 w-16"
              />

              <span className="block font-medium">Phone</span>

              <span className="mt-2 block">
                +91 91483 19993
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@maxxmedia.in"
              className="bg-sand p-8 hover:text-orange"
            >
              <img
                src="/assets/images/contact-icon-3.png"
                alt="Maxx Business Media Email"
                className="mx-auto mb-4 w-16"
              />

              <span className="block font-medium">Email</span>

              <span className="mt-2 block">
                info@maxxmedia.in
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section
        className="bg-navy bg-cover bg-center py-16 md:py-24"
        style={{
          backgroundImage: "url(/assets/images/form-bg.jpg)",
        }}
      >
        <Container>
          <h2 className="mb-10 text-center text-2xl font-semibold text-white md:text-4xl">
            Let&apos;s Create Opportunities Together.
            <br />
            Get in Touch With Us
          </h2>

          <ContactForm />
        </Container>
      </section>

      {/* Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4626.8181493884495!2d77.57145387578973!3d12.988336087328557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bdd9cba13d%3A0xcd611df9c7076a3b!2sSwastik%20Manandi%20Arcade!5e1!3m2!1sen!2sin!4v1789803347199!5m2!1sen!2sin"
        title="Maxx Business Media Location"
        className="h-[420px] w-full border-0 md:h-[650px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </main>
  );
}