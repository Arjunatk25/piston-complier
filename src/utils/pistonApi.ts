import axios from "axios";

export async function runJavaCode(code: string, input: string) {
  const response = await axios.post(
    "https://emkc.org/api/v2/piston/execute",
    {
      language: "java",
      version: "15",
      files: [
        {
          name: "Main.java",
          content: code,
        },
      ],
      stdin: input,
    }
  );

  return response.data;
}
