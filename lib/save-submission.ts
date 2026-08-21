import { mkdir, writeFile } from "fs/promises";
import path from "path";

export async function saveSubmission(type: string, formData: FormData) {
  const dir = path.join(process.cwd(), "data", "submissions", type);
  const filesDir = path.join(process.cwd(), "data", "uploads", type);
  await mkdir(dir, { recursive: true });
  await mkdir(filesDir, { recursive: true });

  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const fields: Record<string, unknown> = {};

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      if (value.size === 0) continue;
      const safeName = `${id}-${key}-${value.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      const buffer = Buffer.from(await value.arrayBuffer());
      await writeFile(path.join(filesDir, safeName), buffer);
      fields[key] = {
        originalName: value.name,
        storedAs: safeName,
        size: value.size,
        type: value.type,
      };
    } else if (fields[key]) {
      fields[key] = Array.isArray(fields[key])
        ? [...(fields[key] as string[]), value]
        : [fields[key], value];
    } else {
      fields[key] = value;
    }
  }

  await writeFile(
    path.join(dir, `${id}.json`),
    JSON.stringify(
      {
        id,
        type,
        createdAt: new Date().toISOString(),
        fields,
      },
      null,
      2
    )
  );

  return { id };
}
