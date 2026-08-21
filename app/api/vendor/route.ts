import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/save-submission";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const company = String(formData.get("company_name") || "");
    const email = String(formData.get("company_email") || "");
    if (!company || !email) {
      return NextResponse.json(
        { error: "Company name and email are required." },
        { status: 400 }
      );
    }
    const { id } = await saveSubmission("vendor", formData);
    return NextResponse.json({ ok: true, id });
  } catch {
    return NextResponse.json(
      { error: "Unable to save your registration. Please try again." },
      { status: 500 }
    );
  }
}
