import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

// Test Route
app.get("/api/contact/test", (req, res) => {
  res.json({ message: "Contact API working" });
});

// Contact Form Route (INSERT INTO MySQL)
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.json({
      success: false,
      message: "Missing required fields",
    });
  }

  const sql = `
    INSERT INTO contacts (name, email, phone, subject, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, email, phone, subject, message], (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.json({
        success: false,
        message: "Database error",
      });
    }

    return res.json({
      success: true,
      message: "Form submitted successfully",
    });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
