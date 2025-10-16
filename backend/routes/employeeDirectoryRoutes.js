const express = require("express");
const router = express.Router();
const multer = require("multer");
const XLSX = require("xlsx");
const Employee = require("../models/EmployeeDirectory");

// Configure Multer to handle file uploads in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ Normalize Excel headers (handles spaces, dots, hidden characters, casing)
const normalizeKey = (key) =>
  key
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\u00A0/g, " ") // remove invisible non-breaking spaces
    .replace(/\./g, "")
    .replace(/\s+/g, " ");

// =============================
// 📤 Upload & process Excel file
// =============================
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded" });
    }

    // Read the Excel file
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });

    // Find the "Emp Directory" sheet (case-insensitive)
    let sheetName = workbook.SheetNames.find((name) =>
      name.toLowerCase().includes("emp directory")
    );
    if (!sheetName) {
      return res.status(400).json({
        success: false,
        error: "Employee Directory sheet not found in Excel file",
      });
    }

    // Get the correct sheet and convert to JSON
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet);

    // ✅ Debugging: print Excel headers (to confirm what keys are being read)
    if (rows.length > 0) {
      console.log("Excel headers found:", Object.keys(rows[0]));
    }

    // Map rows to Employee schema
    const data = rows.map((row) => {
      const keys = Object.keys(row).reduce((acc, k) => {
        acc[normalizeKey(k)] = row[k];
        return acc;
      }, {});

      return {
        EmpID: keys["emp id"] || "",
        EmployeeName: keys["associate name"] || "",
        Department: keys["department"] || keys["dept"] || "",
        PhoneNumber: keys["contact no"] || "",
        CurrentAddress: keys["current address"] || "",
        PermanentAddress: keys["permanent address"] || "",
        PAN: keys["pan"] || "",
        Aadhar: keys["aadhar"] || "",
        BloodGroup: keys["blood group"] || "",
        EmergencyContact: keys["emergency contact no"] || "",
        Email: keys["personal email id"] || "",
        Tech1: keys["tech 1"] || keys["tech1"] || keys["tech. 1"] || "",
        Tech2: keys["tech 2"] || keys["tech2"] || keys["tech. 2"] || "",
        SpecialSkill: keys["special skill"] || "",
      };
    });

    // Clear previous data (optional — remove if you want to append instead)
    await Employee.deleteMany({});

    // Insert new data
    await Employee.insertMany(data);

    // ✅ Success
    res.json({
      success: true,
      message: "✅ Employee data uploaded successfully!",
      count: data.length,
    });
  } catch (err) {
    console.error("❌ Upload error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// =============================
// 📥 Fetch all employees
// =============================
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().sort({ EmployeeName: 1 });
    res.json(employees);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
