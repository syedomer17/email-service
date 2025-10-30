import { Router } from "express";
import { sendEmail } from "../utils/sendEmail.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const {
      to,
      from,
      fromName,
      gmailOwner,
      gmailAppPassword,
      subject,
      html,
    } = req.body;

    if (!to || !from || !fromName || !gmailOwner || !gmailAppPassword || !subject || !html) {
      return res.status(400).json({ success: false, error: "Missing fields" });
    }

    const result = await sendEmail({
      to,
      from,
      fromName,
      gmailOwner,
      gmailAppPassword,
      subject,
      html,
    });

    res.status(200).json({ success: true, result });
  } catch (error: any) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

