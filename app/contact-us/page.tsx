import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us | Energizese",
};

export default function ContactPage() {
  return (
    <main>
      <InnerHero src="/assets/images/img-hero-contact.jpg" alt="Contact Us" />
      <section className="bg-white py-16 md:py-24">
        <Container className="text-center">
          <h1 className="mb-5 text-3xl font-semibold text-navy md:text-5xl">Contact Us</h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-muted">
            We are here to assist you with cutting-edge mechanical solutions for
            your projects. We&apos;re just a call or message away. Let&apos;s
            create efficient, future-ready spaces together.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="https://maps.app.goo.gl/1CpdsBpkier77xrG6"
              target="_blank"
              rel="noreferrer"
              className="bg-sand p-8 hover:text-orange"
            >
              <img src="/assets/images/contact-icon-1.png" alt="" className="mx-auto mb-4 w-16" />
              Yanbu, Saudi Arabia
            </a>
            <a href="tel:+966550960093" className="bg-sand p-8 hover:text-orange">
              <img src="/assets/images/contact-icon-2.png" alt="" className="mx-auto mb-4 w-16" />
              +966 55 096 0093
            </a>
            <a href="mailto:info@energizese.com" className="bg-sand p-8 hover:text-orange">
              <img src="/assets/images/contact-icon-3.png" alt="" className="mx-auto mb-4 w-16" />
              info@energizese.com
            </a>
          </div>
        </Container>
      </section>
      <section
        className="bg-navy bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: "url(/assets/images/form-bg.jpg)" }}
      >
        <Container>
          <h2 className="mb-10 text-center text-2xl font-semibold text-white md:text-4xl">
            Let’s make something awesome together.
            <br /> Please contact us
          </h2>
          <ContactForm />
        </Container>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14570.030703532599!2d38.04807455362766!3d24.083635926766448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765351011983!5m2!1sen!2sin"
        title="Energizese location"
        className="h-[420px] w-full border-0 md:h-[650px]"
        allowFullScreen
      />
    </main>
  );
}
