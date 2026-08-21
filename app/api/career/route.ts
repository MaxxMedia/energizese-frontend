import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/save-submission";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const job = String(formData.get("job_name") || "");
    if (!name || !email || !job) {
      return NextResponse.json(
        { error: "Name, email, and position are required." },
        { status: 400 }
      );
    }
    const { id } = await saveSubmission("career", formData);
    return NextResponse.json({ ok: true, id });
  } catch {
    return NextResponse.json(
      { error: "Unable to save your application. Please try again." },
      { status: 500 }
    );
  }
}
