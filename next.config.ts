import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about-us.html", destination: "/about-us", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/servicesd41d.html", destination: "/services", permanent: true },
      { source: "/events.html", destination: "/events", permanent: true },
      { source: "/career.html", destination: "/career", permanent: true },
      { source: "/news.html", destination: "/news", permanent: true },
      { source: "/faqs.html", destination: "/faqs", permanent: true },
      { source: "/contact-us.html", destination: "/contact-us", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/terms-of-use.html", destination: "/terms-of-use", permanent: true },
      { source: "/vendor/registration.html", destination: "/vendor/registration", permanent: true },
      {
        source: "/job/applyb99c.html",
        destination: "/job/technical-support-engineer",
        permanent: true,
      },
      {
        source: "/job/applyf447.html",
        destination: "/job/civil-engineer",
        permanent: true,
      },
      {
        source: "/job/apply5051.html",
        destination: "/job/senior-planning-engineer",
        permanent: true,
      },
      {
        source:
          "/news/saudi-arabia-opens-theme-park-as-kingdom-pushes-ahead-with-mega-events.html",
        destination:
          "/news/saudi-arabia-opens-theme-park-as-kingdom-pushes-ahead-with-mega-events",
        permanent: true,
      },
      {
        source:
          "/news/saudi-arabia-opens--theme-park-as-kingdom-pushes-ahead-with-mega-events.html",
        destination:
          "/news/saudi-arabia-opens-theme-park-as-kingdom-pushes-ahead-with-mega-events-2",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
