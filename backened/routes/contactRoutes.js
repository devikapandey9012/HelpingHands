import express from "express";
import db from "../config/db.js";  // path may change based on your folder structure

const router = express.Router();

// Test Route
router.get("/test", (req, res) => {
  res.json({ message: "Contact API working" });
});

// POST: Save contact form
router.post("/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.json({ success: false, message: "Missing fields" });
  }

  const sql = `
    INSERT INTO contact (name, email, phone, subject, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, email, phone, subject, message], (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.json({ success: false, message: "Database error" });
    }

    return res.json({
      success: true,
      message: "Message saved successfully",
      insertId: result.insertId
    });
  });
});

export default router;
