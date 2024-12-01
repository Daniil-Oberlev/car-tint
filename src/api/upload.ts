import type { NextApiRequest, NextApiResponse } from "next";
import routes from "@/src/env/routes";

const normalizeHeaders = (headers: {
  [key: string]: string | string[] | undefined;
}): HeadersInit => {
  const normalized: { [key: string]: string } = {};
  for (const key in headers) {
    const value = headers[key];
    if (typeof value === "string") {
      normalized[key] = value;
    } else if (Array.isArray(value)) {
      normalized[key] = value.join(", ");
    }
  }
  return normalized;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const processImageUrl = routes.PROCESS_IMAGE;

    if (!processImageUrl) {
      return res
        .status(500)
        .json({ error: "PROCESS_IMAGE не настроен в .env" });
    }

    try {
      const normalizedHeaders = normalizeHeaders(req.headers);

      const response = await fetch(processImageUrl, {
        method: "POST",
        body: req.body,
        headers: normalizedHeaders,
      });

      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        const errorText = await response.text();
        res.status(response.status).json({
          error: `Ошибка от AI-сервиса: ${errorText || "Неизвестная ошибка"}`,
        });
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  } else {
    res.status(405).json({ error: "Метод не поддерживается" });
  }
}
