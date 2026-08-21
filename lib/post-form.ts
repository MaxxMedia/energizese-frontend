export async function postForm(url: string, form: HTMLFormElement) {
  const response = await fetch(url, {
    method: "POST",
    body: new FormData(form),
  });
  const data = (await response.json()) as { ok?: boolean; error?: string; id?: string };
  if (!response.ok) {
    throw new Error(data.error || "Something went wrong.");
  }
  return data;
}
