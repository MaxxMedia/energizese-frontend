"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { postForm } from "@/lib/post-form";
import { Button, Container, StatusBanner } from "@/components/ui";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-navy outline-none focus:border-orange";
const labelClass = "mb-2 block text-sm font-medium text-navy/80";

export default function VendorRegistrationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [registrationType, setRegistrationType] = useState("KSA");
  const [localContent, setLocalContent] = useState("No");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      await postForm("/api/vendor", event.currentTarget);
      setStatus("success");
      setMessage("Thank you. Your vendor registration has been received.");
      event.currentTarget.reset();
      setRegistrationType("KSA");
      setLocalContent("No");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit registration.");
    }
  }

  return (
    <main className="bg-sand pt-32 pb-12 md:pt-36 md:pb-16">
      <Container>
        <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="rounded-md bg-sky px-4 py-2 text-sm text-white">
            ← Back to Home
          </Link>
          <h1 className="w-full text-center text-2xl font-semibold text-navy md:text-3xl">
            Vendor Portal Registration
          </h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <StatusBanner status={status} message={message} />

          <section className="rounded-xl bg-[#f4f3ef] p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-lg font-bold text-navy">Company Registration Info</h2>
            <div className="grid gap-5 md:grid-cols-3">
              <fieldset>
                <label className={labelClass}>Registration Type *</label>
                <select
                  name="registrationType"
                  className={inputClass}
                  value={registrationType}
                  onChange={(event) => setRegistrationType(event.target.value)}
                >
                  <option value="KSA">KSA</option>
                  <option value="Foreign">Foreign</option>
                  <option value="GCC">GCC</option>
                </select>
              </fieldset>
              {registrationType !== "KSA" ? (
                <>
                  <fieldset>
                    <label className={labelClass}>Registration Number</label>
                    <input name="intlRegNumber" className={inputClass} placeholder="Registration Number" />
                  </fieldset>
                  <fieldset>
                    <label className={labelClass}>Registration Document</label>
                    <input name="intlFile" type="file" accept=".pdf,.docx" className="text-sm" />
                  </fieldset>
                </>
              ) : (
                <>
                  <fieldset>
                    <label className={labelClass}>VAT Number</label>
                    <input name="vatNumber" className={inputClass} placeholder="VAT Number" />
                  </fieldset>
                  <fieldset>
                    <label className={labelClass}>CR Number</label>
                    <input name="crNumber" className={inputClass} placeholder="CR Number" />
                  </fieldset>
                  <fieldset>
                    <label className={labelClass}>VAT File</label>
                    <input name="vatFile" type="file" accept=".pdf,.docx" className="text-sm" />
                  </fieldset>
                  <fieldset>
                    <label className={labelClass}>CR File</label>
                    <input name="crFile" type="file" accept=".pdf,.docx" className="text-sm" />
                  </fieldset>
                </>
              )}
              <fieldset>
                <label className={labelClass}>Company Name *</label>
                <input name="company_name" required className={inputClass} placeholder="Company Name" />
              </fieldset>
              <fieldset>
                <label className={labelClass}>اسم الشركة</label>
                <input
                  name="company_arabic_name"
                  className={`${inputClass} text-right`}
                  placeholder="اسم الشركة"
                  dir="rtl"
                />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Company Email *</label>
                <input
                  type="email"
                  name="company_email"
                  required
                  className={inputClass}
                  placeholder="Company Email"
                />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Telephone / Mobile</label>
                <input
                  name="company_telephone_mobile_no"
                  className={inputClass}
                  placeholder="Company Telephone/Mobile"
                />
              </fieldset>
            </div>
            <div className="mt-5">
              <p className={labelClass}>Role</p>
              <div className="flex flex-wrap gap-5 text-sm text-navy">
                {["Supplier", "Trader", "Subcontractor"].map((role) => (
                  <label key={role} className="flex items-center gap-2">
                    <input type="radio" name="radio_role" value={role} />
                    {role}
                  </label>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-[#f4f3ef] p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-lg font-bold text-navy">Company Profile</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <fieldset>
                <label className={labelClass}>Turnover last 3 years</label>
                <select name="turn_over_last_3_years" className={inputClass} defaultValue="">
                  <option value="">Select</option>
                  <option>Less than 1 Million</option>
                  <option>1 - 5 Million</option>
                  <option>5 - 20 Million</option>
                  <option>More than 20 Million</option>
                </select>
              </fieldset>
              <fieldset>
                <label className={labelClass}>Size of company</label>
                <select name="size_of_company" className={inputClass} defaultValue="">
                  <option value="">Select</option>
                  <option>Micro</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </fieldset>
              <fieldset>
                <label className={labelClass}>CEO Name</label>
                <input name="ceo_name" className={inputClass} placeholder="CEO Name" />
              </fieldset>
              <fieldset>
                <label className={labelClass}>CEO Email</label>
                <input type="email" name="ceo_email" className={inputClass} placeholder="CEO Email" />
              </fieldset>
              <fieldset>
                <label className={labelClass}>CFO Name</label>
                <input name="cfo_name" className={inputClass} placeholder="CFO Name" />
              </fieldset>
              <fieldset>
                <label className={labelClass}>CFO Email</label>
                <input type="email" name="cfo_email" className={inputClass} placeholder="CFO Email" />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Website</label>
                <input name="company_website" className={inputClass} placeholder="Company Website" />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Fax</label>
                <input name="fax" className={inputClass} placeholder="Fax Number" />
              </fieldset>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <fieldset>
                <p className={labelClass}>Company affiliated?</p>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="radios-inline-company-affliated" value="Yes" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="radios-inline-company-affliated" value="No" /> No
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <p className={labelClass}>Local content?</p>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="radios-inline-local-content"
                      value="Yes"
                      onChange={() => setLocalContent("Yes")}
                    />{" "}
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="radios-inline-local-content"
                      value="No"
                      defaultChecked
                      onChange={() => setLocalContent("No")}
                    />{" "}
                    No
                  </label>
                </div>
              </fieldset>
              {localContent === "Yes" ? (
                <>
                  <fieldset>
                    <label className={labelClass}>Contribution percentage</label>
                    <input
                      type="number"
                      step="0.01"
                      name="contribution_percentage"
                      className={inputClass}
                      placeholder="Eg : 54.87"
                    />
                  </fieldset>
                  <fieldset>
                    <label className={labelClass}>Contribution certificate</label>
                    <input name="contribution_certificate" type="file" accept=".pdf,.docx" className="text-sm" />
                  </fieldset>
                </>
              ) : null}
            </div>
          </section>

          <section className="rounded-xl bg-[#f4f3ef] p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-lg font-bold text-navy">Authorized Signatory</h2>
            <div className="grid gap-5 md:grid-cols-3">
              <fieldset>
                <label className={labelClass}>Name</label>
                <input name="signatory_person_name" className={inputClass} placeholder="Name" />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Job Title</label>
                <input name="signatory_person_job_title" className={inputClass} placeholder="Job Title" />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Email</label>
                <input type="email" name="signatory_person_email" className={inputClass} placeholder="Email" />
              </fieldset>
            </div>
          </section>

          <section className="rounded-xl bg-[#f4f3ef] p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-lg font-bold text-navy">Address</h2>
            <div className="grid gap-5 md:grid-cols-3">
              <fieldset>
                <label className={labelClass}>Short Address</label>
                <input name="short_address" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Building Number</label>
                <input name="buildingno" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Street</label>
                <input name="street" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>District</label>
                <input name="district" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>City</label>
                <input name="city" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Postal Code</label>
                <input name="postalcode" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Country</label>
                <input name="country" className={inputClass} defaultValue="Saudi Arabia" />
              </fieldset>
            </div>
          </section>

          <section className="rounded-xl bg-[#f4f3ef] p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-lg font-bold text-navy">Primary Contact</h2>
            <div className="grid gap-5 md:grid-cols-3">
              <fieldset>
                <label className={labelClass}>Contact Name</label>
                <input name="contact_name" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Mobile Number</label>
                <input name="mobile_number" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Job Title</label>
                <input name="job_title" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Email Address</label>
                <input type="email" name="email_contact_address" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Office City</label>
                <input name="office_city" className={inputClass} />
              </fieldset>
            </div>
          </section>

          <section className="rounded-xl bg-[#f4f3ef] p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-lg font-bold text-navy">Bank Details</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <fieldset>
                <label className={labelClass}>Bank Name</label>
                <input name="bank_name" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Bank Address</label>
                <input name="bank_address" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Account Name</label>
                <input name="bank_account_name" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Account Number</label>
                <input name="bank_account_number" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>IBAN</label>
                <input name="IBAN" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Swift Code</label>
                <input name="swift_code" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Currency</label>
                <select name="currency" className={inputClass} defaultValue="SAR">
                  <option>SAR</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>AED</option>
                </select>
              </fieldset>
              <fieldset>
                <p className={labelClass}>Account Type</p>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="flexRadioDefault" value="LC" /> LC
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="flexRadioDefault" value="Current" /> Current
                  </label>
                </div>
              </fieldset>
            </div>
          </section>

          <section className="rounded-xl bg-[#f4f3ef] p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-lg font-bold text-navy">Document</h2>
            <div className="grid gap-5 md:grid-cols-3">
              <fieldset>
                <label className={labelClass}>Document Type</label>
                <select name="document_type" className={inputClass} defaultValue="">
                  <option value="">Select</option>
                  <option>Commercial Registration</option>
                  <option>VAT Certificate</option>
                  <option>ISO Certificate</option>
                  <option>Other</option>
                </select>
              </fieldset>
              <fieldset>
                <label className={labelClass}>Expiry Date</label>
                <input type="date" name="expiry_date" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Document Identification</label>
                <input name="document_dentification" className={inputClass} />
              </fieldset>
              <fieldset>
                <label className={labelClass}>Upload PDF</label>
                <input name="Upload_a_PDF" type="file" accept="application/pdf" className="text-sm" />
              </fieldset>
            </div>
          </section>

          <div className="text-end">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Complete Registration"}
            </Button>
          </div>
        </form>
      </Container>
    </main>
  );
}
