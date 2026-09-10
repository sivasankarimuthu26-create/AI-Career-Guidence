const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const mongoose = require("mongoose");
const Assessment = require("./models/Assessment");
console.log("Mongo_URI:", process.env.MONGO_URI);
console.log("ML_SERVICE_URL:", process.env.ML_SERVICE_URL);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
  const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:5001";

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "AI Career Guidance Backend is running!",
  });
});

// Assessment API
app.post("/api/assessment", async (req, res) => {
  const studentData = req.body;

  console.log("Received student assessment:");
  console.log(studentData);

  try {
    const response = await fetch(`${ML_SERVICE_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    const prediction = await response.json();
    console.log("ML Service response:");
    console.log(prediction);

// Save assessment result to MongoDB
    const assessment = new Assessment({
    name: studentData.name,
    cgpa: Number(studentData.cgpa),
    technicalArea: studentData.technicalArea,
    programmingLevel: studentData.programmingLevel,
    interest: studentData.interest,
    careerGoal: studentData.careerGoal,

    career: prediction.career,
    matchScore: prediction.matchScore,
    skills: prediction.skills,
    roadmap: prediction.roadmap,
    });

await assessment.save();

console.log("✅ Assessment saved to MongoDB");

res.json({
  success: true,
  message: "Assessment processed and saved successfully!",
  data: studentData,
  prediction: prediction,
});
  } catch (error) {
    console.error("ML Service error:", error);

    res.status(500).json({
      success: false,
      message: "ML service connection failed",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});