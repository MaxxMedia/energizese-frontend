"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { COUNTRIES } from "@/lib/countries";
import { jobs } from "@/lib/jobs";
import { postForm } from "@/lib/post-form";
import { Button, Container, fieldClass, labelClass, StatusBanner } from "@/components/ui";

export default function JobApplyForm({ selectedJob }: { selectedJob: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file && file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB.");
      event.target.value = "";
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      await postForm("/api/career", event.currentTarget);
      setStatus("success");
      setMessage("Thank you. Your application has been received.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit your application.");
    }
  }

  return (
    <section
      className="bg-navy bg-cover bg-center pt-32 pb-24"
      style={{ backgroundImage: "url(/assets/images/form-bg.jpg)" }}
    >
      <Container>
        <div className="relative mb-12 text-center">
          <Link
            href="/career"
            className="mb-4 inline-block rounded-md bg-orange px-4 py-2 text-sm text-white md:absolute md:top-1 md:left-0 md:mb-0"
          >
            ← Back to career
          </Link>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">Apply Now</h1>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <StatusBanner status={status} message={message} />
          <div className="grid gap-5 md:grid-cols-2">
            <fieldset>
              <label className={labelClass} htmlFor="position">
                Position
              </label>
              <select
                id="position"
                name="job_name"
                required
                defaultValue={selectedJob}
                className={fieldClass}
              >
                <option value="">Select Position</option>
                {jobs.map((job) => (
                  <option key={job.slug} value={job.title} className="text-navy">
                    {job.title}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <label className={labelClass} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Please enter your name here"
                className={fieldClass}
              />
            </fieldset>
            <fieldset>
              <label className={labelClass} htmlFor="phone">
                Mobile number
              </label>
              <input
                id="phone"
                name="phone"
                required
                placeholder="Please Enter your mobile number"
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
            <fieldset>
              <label className={labelClass} htmlFor="country">
                Country
              </label>
              <select id="country" name="country" required defaultValue="" className={fieldClass}>
                <option value="">Select Country</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country} className="text-navy">
                    {country}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <label className={labelClass} htmlFor="city">
                City
              </label>
              <input
                id="city"
                name="city"
                required
                placeholder="Please enter city here"
                className={fieldClass}
              />
            </fieldset>
            <fieldset>
              <label className={labelClass} htmlFor="areaofwork">
                Area of work
              </label>
              <input
                id="areaofwork"
                name="areaofwork"
                required
                placeholder="Area of work"
                className={fieldClass}
              />
            </fieldset>
            <fieldset>
              <label className={labelClass} htmlFor="message">
                Your Message here
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Enter Message"
                className={fieldClass}
              />
            </fieldset>
            <fieldset>
              <label className={labelClass} htmlFor="uploadcv">
                Upload CV/Portfolio
              </label>
              <input
                id="uploadcv"
                name="file"
                accept="application/pdf"
                type="file"
                required
                onChange={onFileChange}
                className="text-sm text-white"
              />
            </fieldset>
          </div>
          <Button type="submit" light disabled={status === "loading"}>
            {status === "loading" ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Container>
    </section>
  );
}
