const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5005;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/feedback", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// ✅ Updated Schema with carName
const reviewSchema = new mongoose.Schema({
  rating: Number,
  customerName: String,
  city: String,
  feedback: String,
  carId: String,
  carName: String, // ✅ added
  date: {
    type: Date,
    default: Date.now,
  }
});

const Review = mongoose.model("Review", reviewSchema);

// GET reviews for a specific car
app.get("/reviews/:carId", async (req, res) => {
  const { carId } = req.params;
  try {
    const reviews = await Review.find({ carId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
});

// POST a new review
app.post("/reviews", async (req, res) => {
  const { rating, customerName, city, feedback, carId, carName } = req.body;

  if (!rating || !customerName || !city || !feedback) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newReview = new Review({
    rating,
    customerName,
    city,
    feedback,
    carId,
    carName,
    date: new Date().toISOString(),
  });

  try {
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ message: "Error saving review" });
  }
});

// PUT (edit review)
app.put("/reviews/:id", async (req, res) => {
  const { id } = req.params;
  const { rating, customerName, city, feedback } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(id, {
      rating,
      customerName,
      city,
      feedback
    }, { new: true });

    res.json(updatedReview);
  } catch (err) {
    res.status(500).json({ message: "Error updating review" });
  }
});

// DELETE a review
app.delete("/reviews/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Review.findByIdAndDelete(id);
    res.status(200).json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting review" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});