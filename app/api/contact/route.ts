import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/save-submission";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = String(formData.get("email") || "");
    const firstName = String(formData.get("first_name") || "");
    if (!firstName || !email) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 }
      );
    }
    const { id } = await saveSubmission("contact", formData);
    return NextResponse.json({ ok: true, id });
  } catch {
    return NextResponse.json(
      { error: "Unable to save your message. Please try again." },
      { status: 500 }
    );
  }
}
