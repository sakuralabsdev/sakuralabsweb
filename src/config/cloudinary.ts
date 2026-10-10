import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/**
 * Upload a resume buffer to Cloudinary.
 * Using resource_type: "raw" ensures PDFs & DOCs can be opened and downloaded
 * directly without triggering Cloudinary's "401 deny or ACL failure".
 */
export async function uploadResumeToCloudinary(
  fileBuffer: Buffer,
  fileName: string
): Promise<string> {
  const ext = fileName.split(".").pop() || "pdf";
  const cleanBaseName = fileName.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9_-]/g, "_");
  const publicId = `${Date.now()}_${cleanBaseName}.${ext}`;

  // 1. If API Secret & Key are available, use server SDK upload_stream with resource_type: "raw"
  if (process.env.CLOUDINARY_API_SECRET && process.env.CLOUDINARY_API_KEY) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "sakuralabs/resumes",
          resource_type: "raw",
          public_id: publicId,
          use_filename: true,
          unique_filename: false,
          access_mode: "public",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result?.secure_url || result?.url || "");
          }
        }
      );
      uploadStream.end(fileBuffer);
    });
  }

  // 2. Fallback to unsigned upload if preset is provided
  if (process.env.CLOUDINARY_UPLOAD_PRESET && process.env.CLOUDINARY_CLOUD_NAME) {
    const formData = new FormData();
    const blob = new Blob([new Uint8Array(fileBuffer)]);
    formData.append("file", blob, fileName);
    formData.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "sakuralabs/resumes");
    formData.append("public_id", publicId);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/raw/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || "Failed to upload to Cloudinary via preset");
    }

    const data = await res.json();
    return data.secure_url || data.url || "";
  }

  throw new Error("Cloudinary configuration missing. Please check your .env variables.");
}
