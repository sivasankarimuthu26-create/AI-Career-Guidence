const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    cgpa: {
      type: Number,
      required: true,
    },

    technicalArea: {
      type: String,
      required: true,
    },

    programmingLevel: {
      type: String,
      required: true,
    },

    interest: {
      type: String,
      required: true,
    },

    careerGoal: {
      type: String,
      required: true,
    },

    career: {
      type: String,
      required: true,
    },

    matchScore: {
      type: Number,
      required: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    roadmap: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Assessment", assessmentSchema);