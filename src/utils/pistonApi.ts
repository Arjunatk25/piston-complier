export async function runJavaCode(code: string, input: string) {
  try {
    const res = await fetch("http://localhost:8080/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, input }),
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status} ${res.statusText}`);
    }

    return await res.text();
  } catch (error: any) {
    throw new Error(`Request failed: ${error.message}`);
  }
}
