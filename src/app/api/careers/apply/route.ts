import { NextRequest, NextResponse } from "next/server";
import { uploadResumeToCloudinary } from "@/config/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = (formData.get("name") as string) || "Not provided";
    const email = (formData.get("email") as string) || "Not provided";
    const phone = (formData.get("phone") as string) || "Not provided";
    const role = (formData.get("role") as string) || "Digital Marketing Intern";
    const about = (formData.get("about") as string) || "";
    const resumeFile = formData.get("resume") as File | null;

    let resumeUrl = "";

    // 1. Upload Resume to Cloudinary if file provided
    if (resumeFile && resumeFile.size > 0) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      try {
        resumeUrl = await uploadResumeToCloudinary(buffer, resumeFile.name);
      } catch (uploadError: unknown) {
        console.error("Cloudinary upload error:", uploadError);
        return NextResponse.json(
          {
            error:
              uploadError instanceof Error
                ? uploadError.message
                : "Failed to upload resume to Cloudinary. Please verify your Cloudinary .env settings.",
          },
          { status: 500 }
        );
      }
    }

    // 2. Forward to Google Sheets Webhook if configured
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    let sheetSynced = false;

    if (googleSheetWebhookUrl) {
      try {
        // Prefix phone with apostrophe to ensure Google Sheets treats it as plain text and not a formula (#ERROR!)
        const sheetPhone = phone.startsWith("+") ? `'${phone}` : phone;

        const sheetResponse = await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
            name,
            email,
            phone: sheetPhone,
            role,
            resumeUrl,
            about,
          }),
        });

        if (sheetResponse.ok) {
          sheetSynced = true;
        } else {
          console.warn("Google Sheet webhook returned status:", sheetResponse.status);
        }
      } catch (sheetError) {
        console.error("Failed to sync to Google Sheet webhook:", sheetError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      data: {
        name,
        email,
        phone,
        role,
        resumeUrl,
        sheetSynced,
      },
    });
  } catch (error: unknown) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
