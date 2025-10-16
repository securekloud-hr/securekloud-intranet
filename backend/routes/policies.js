const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Base directory where PDFs are stored
const POLICIES_DIR = path.join(__dirname, "../../public/policies");

// GET /api/policies
router.get("/", (req, res) => {
  try {
    const categories = {};

    console.log("Reading policies directory:", POLICIES_DIR);

    // Loop through folders (HR Policies, Admin Policies, etc.)
    fs.readdirSync(POLICIES_DIR).forEach((category) => {
      const categoryPath = path.join(POLICIES_DIR, category);
      if (fs.lstatSync(categoryPath).isDirectory()) {
        const policies = [];

        // Each subfolder represents a policy
        fs.readdirSync(categoryPath).forEach((policyFolder) => {
          const policyPath = path.join(categoryPath, policyFolder);
          if (fs.lstatSync(policyPath).isDirectory()) {
            // Find all PDFs in the folder
            const pdfFiles = fs
              .readdirSync(policyPath)
              .filter((f) => f.toLowerCase().endsWith(".pdf"));

            pdfFiles.forEach((pdf) => {
              const filePath = `/policies/${category}/${policyFolder}/${pdf}`;
              const stats = fs.statSync(path.join(policyPath, pdf));

              policies.push({
                name: policyFolder
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase()),
                fileUrl: filePath,
                updated: stats.mtime.toISOString().split("T")[0],
              });
            });
          }
        });

        // Only assign the category if there are policies
        if (policies.length > 0) {
          categories[category] = policies;
        }
      }
    });

    console.log("Categories response:", categories);
    res.json(categories);
  } catch (error) {
    console.error("❌ Error reading policies folder:", error);
    res.status(500).json({ error: "Failed to load policy files" });
  }
});

module.exports = router;