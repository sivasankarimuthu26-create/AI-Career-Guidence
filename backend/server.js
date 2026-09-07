const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

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
    const response = await fetch("http://localhost:5001/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    const prediction = await response.json();

    console.log("ML Service response:");
    console.log(prediction);

    res.json({
      success: true,
      message: "Assessment processed successfully!",
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

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});