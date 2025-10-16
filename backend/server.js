require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

// ✅ Import all routes
const sendCourseNotification = require("./api/sendCourseNotification");
const sendSkillNotification = require("./api/sendSkillNotification");
const sendCertificationNotification = require("./api/sendCertificationNotification");
const learningRoutes = require("./routes/learningRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const registerEvent = require("./api/registerEvent");
const orgRoutes = require("./routes/org");
const jobsRoutes = require("./routes/jobs");
const referralRoutes = require("./api/referral");
const nominationRoutes = require("./routes/nominationRoutes");
const pastEventsRoutes = require("./routes/pastEvents");
const employeeDirectoryRoutes = require("./routes/employeeDirectoryRoutes");
const policiesRoutes = require("./routes/policies");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");


const app = express();
app.use(express.json());

// ✅ CORS for development (allow all origins)
// ✅ CORS configuration — allow your frontend and Authorization header
app.use(
  cors({
    origin: ["http://192.168.26.103:8081"], // ✅ your real frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ crucial for Bearer tokens
  })
);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));


const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: "pending" },
});


const Query = mongoose.model("Query", querySchema);

// ✅ Gmail transporter
const gmailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ HR Query Email API
app.post("/api/sendEmail", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ success: false, error: "Missing fields" });

    const newQuery = new Query({ name, email, message });
    await newQuery.save();

    const html = `
      <h2>Query from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    const result = await gmailTransporter.sendMail({
      from: `"SecureKloud Support" <${process.env.EMAIL_USER}>`,
      to: process.env.HR_EMAIL || process.env.DEFAULT_RECIPIENT,
      subject: `Query from ${name}`,
      html,
    });

    res.json({ success: true, messageId: result.messageId });
  } catch (err) {
    console.error("❌ Query Email Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ IT Ticket Email API
app.post("/api/sendTicket", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ success: false, error: "Missing fields" });

    const html = `
      <h2>Support Ticket from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    const result = await gmailTransporter.sendMail({
      from: `"SecureKloud Tickets" <${process.env.EMAIL_USER}>`,
      to: process.env.IT_EMAIL || process.env.DEFAULT_RECIPIENT,
      subject: `Support Ticket from ${name}`,
      html,
    });

    res.json({ success: true, messageId: result.messageId });
  } catch (err) {
    console.error("❌ Ticket Email Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Static files
app.use("/policies", express.static(path.resolve(__dirname, "../public/policies")));
app.use("/past-events", express.static(path.resolve(__dirname, "../public/past-events")));
console.log("🗂 Serving static PDFs from:", path.resolve(__dirname, "../public/policies"));

// ✅ API Routes
app.use("/api/sendCourseNotification", sendCourseNotification);
app.use("/api/sendSkillNotification", sendSkillNotification);
app.use("/api/sendCertificationNotification", sendCertificationNotification);
app.use("/api", learningRoutes);
app.use("/api/registrations", registrationRoutes);
app.use("/api/registerEvent", registerEvent);
app.use("/api/org", orgRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/referral", referralRoutes);
app.use("/api/nomination", nominationRoutes);
app.use("/api/past-events", pastEventsRoutes);
app.use("/api/employeedirectory", employeeDirectoryRoutes);
app.use("/api/policies", policiesRoutes);
app.use("/api/admin", adminRoutes);
app.use(express.static("public"));
app.use("/api/auth", authRoutes);



// ✅ Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
