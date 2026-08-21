"use client";

import { Fragment, useState, type ReactNode } from "react";

type Item = {
  title: string;
  content: ReactNode;
};

export default function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="tab-wrapper">
      {items.map((item, index) => (
        <Fragment key={`${item.title}-${index}`}>
          <div
            className={`btn-tab${openIndex === index ? " active" : ""}`}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            {item.title}
          </div>
          <div
            className={`tab-content${openIndex === index ? " open" : ""}`}
            style={{ display: openIndex === index ? "block" : "none" }}
          >
            {item.content}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
