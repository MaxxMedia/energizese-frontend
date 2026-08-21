"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";
import { cn } from "@/components/ui";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

function getLanguage() {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("selectedLanguage") || "en";
}

function applyDirection(lang: string) {
  const isArabic = lang === "ar";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("arabic-translated-body", isArabic);
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const solid = pathname.startsWith("/vendor") || pathname.startsWith("/job");

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "visible";
  }, [pathname]);

  useEffect(() => {
    const saved = getLanguage();
    setLanguage(saved);
    applyDirection(saved);

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  function translatePage(lang: string) {
    const selectField = document.querySelector(
      "select.goog-te-combo"
    ) as HTMLSelectElement | null;

    if (!selectField) {
      setTimeout(() => translatePage(lang), 500);
      return;
    }

    localStorage.setItem("selectedLanguage", lang);
    setLanguage(lang);

    if (lang === "en") {
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
      });
      applyDirection("en");
      location.reload();
      return;
    }

    selectField.value = lang;
    selectField.dispatchEvent(new Event("change"));
    applyDirection(lang);
  }

  function toggleMenu() {
    setMenuOpen((open) => {
      const next = !open;
      document.body.style.overflow = next ? "hidden" : "visible";
      return next;
    });
  }

  return (
    <header className={cn("main-header", solid && "solid")}>
      <div className="container">
        <figure>
          <Link href="/">
            <img
              src="/uploads/21364457ada985f8.png"
              width={235}
              height={102}
              alt="Energizese"
            />
          </Link>
        </figure>
        <div className="header-right">
          <nav className="main-nav">
            <ul className={cn(menuOpen && "menu-open")}>
              {navItems.map((item) => (
                <li
                  key={item.id}
                  id={item.id}
                  className={isActive(pathname, item.href) ? "active" : undefined}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <ul id="langMenu" className="notranslate">
                <li id="btnArabic" style={{ display: language === "ar" ? "none" : "inline-block" }}>
                  <a
                    href="#"
                    className="language notranslate"
                    onClick={(event) => {
                      event.preventDefault();
                      translatePage("ar");
                    }}
                  >
                    عربي
                  </a>
                </li>
                <li id="btnEnglish" style={{ display: language === "en" ? "none" : "inline-block" }}>
                  <a
                    href="#"
                    className="language notranslate"
                    onClick={(event) => {
                      event.preventDefault();
                      translatePage("en");
                    }}
                  >
                    English
                  </a>
                </li>
              </ul>
              <div id="google_translate_element" />
            </ul>
          </nav>
        </div>
      </div>
      <div className={cn("mob-nav", menuOpen && "open")} onClick={toggleMenu}>
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={cn("overlay", menuOpen && "open")} onClick={toggleMenu} />
    </header>
  );
}
