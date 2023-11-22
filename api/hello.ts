import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.status(200).json({
    message: `Hello from travis ci!ww`,
  });
}
