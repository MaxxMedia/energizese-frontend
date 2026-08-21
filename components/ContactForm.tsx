"use client";

import { FormEvent, useState } from "react";
import { postForm } from "@/lib/post-form";
import { Button, fieldClass, labelClass, StatusBanner } from "@/components/ui";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      await postForm("/api/contact", event.currentTarget);
      setStatus("success");
      setMessage("Thank you. Your message has been received.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <StatusBanner status={status} message={message} />
      <div className="grid gap-5 md:grid-cols-3">
        <fieldset>
          <label className={labelClass} htmlFor="first_name">
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            required
            placeholder="Please enter your name here"
            className={fieldClass}
          />
        </fieldset>
        <fieldset>
          <label className={labelClass} htmlFor="last_name">
            Last name
          </label>
          <input
            id="last_name"
            name="last_name"
            required
            placeholder="Please enter your name here"
            className={fieldClass}
          />
        </fieldset>
        <fieldset>
          <label className={labelClass} htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Please Enter a valid email address"
            className={fieldClass}
          />
        </fieldset>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <fieldset>
          <label className={labelClass} htmlFor="number">
            Mobile No
          </label>
          <input
            id="number"
            name="number"
            required
            placeholder="Please Enter your Mobile No"
            className={fieldClass}
          />
        </fieldset>
        <fieldset>
          <label className={labelClass} htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            placeholder="Enter subject here"
            className={fieldClass}
          />
        </fieldset>
      </div>
      <fieldset>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Enter Message"
          className={fieldClass}
        />
      </fieldset>
      <fieldset>
        <label className={labelClass} htmlFor="attachments">
          If Any Attachments
        </label>
        <input
          id="attachments"
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpeg,.jpg"
          name="attachments"
          className="text-sm text-white"
        />
      </fieldset>
      <Button type="submit" light disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}
