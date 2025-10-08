import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Setup your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail", // can also use "smtp.gmail.com"
  auth: {
    user: "creozen.ai@gmail.com", // 🔹 replace with your Gmail
    pass: "ozbd mzqx jkxz tsrg",    // 🔹 use Google App Password (not your real password)
  },
});

// ✅ POST endpoint for your React form
app.post("/api/forms", async (req, res) => {
  try {
    const data = req.body;
    console.log("📩 Received form data:", data);

    // Prepare mail for ADMIN
    const adminMailOptions = {
      from: `"Creozen Registration" <${data.email}>`, // sender name + email
      to: "creozen.ai@gmail.com", // 🔹 your admin email
      subject: `New ${data.formType} Submission from ${data.name}`,
      html: `
        <h2>New ${data.formType} Registration</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Designation:</strong> ${data.finalDesignation}</p>
        ${data.willing ? `<p><strong>Willing:</strong> ${data.willing}</p>` : ""}
      `,
    };

    // Prepare mail for USER
    const userMailOptions = {
      from: `"Creozen Team" <your_email@gmail.com>`,
      to: data.email,
      subject: "✅ Your Registration Has Been Received!",
      html: `
        <h2>Hi ${data.name},</h2>
        <p>Thank you for registering for the <strong>${data.formType}</strong>!</p>
        <p>We’ve successfully received your details:</p>
        <ul>
          <li><b>Name:</b> ${data.name}</li>
          <li><b>Designation:</b> ${data.finalDesignation}</li>
          <li><b>Email:</b> ${data.email}</li>
          <li><b>Phone:</b> ${data.phone || "N/A"}</li>
        </ul>
        <p>We’ll contact you soon with more information.</p>
        <p style="margin-top: 20px;">Best Regards,<br/><b>Creozen Team</b></p>
      `,
    };

    // Send emails (admin first, then user)
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log("✅ Emails sent successfully!");
    res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
