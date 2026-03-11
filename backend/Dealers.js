// // require("dotenv").config();
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Middleware for Debugging Requests
// // app.use((req, res, next) => {
// //   console.log(`Incoming Request: ${req.method} ${req.url}, req.body`);
// //   next();
// // });

// // // MongoDB Connection
// // mongoose
// //   .connect("mongodb://127.0.0.1:27017/Dealer", { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log("✅ MongoDB Connected"))
// //   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // // Dealer Schema & Model
// // const DealerSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   address: { type: String, required: true },
// //   city: { type: String, required: true },
// //   state: { type: String, required: true },
// //   zip: { type: String, required: true },
// //   latitude: Number,
// //   longitude: Number,
// //   contact: { type: String, required: true },
// //   availableProducts: { type: [String], default: [] },
// //   vehicleType: { type: String, required: true }, // e.g., "New", "Used", "Brand"
// // });

// // const Dealer = mongoose.model("Dealer", DealerSchema);

// // // API to Add a Dealer
// // app.post("/api/dealers", async (req, res) => {
// //   try {
// //     console.log("🔹 Received Data:", req.body);

// //     // Validate required fields
// //     const { name, address, city, state, zip, contact, vehicleType } = req.body;
// //     if (!name || !address || !city || !state || !zip || !contact || !vehicleType) {
// //       return res.status(400).json({ error: "All fields are required!" });
// //     }

// //     const newDealer = new Dealer(req.body);
// //     const savedDealer = await newDealer.save();

// //     console.log("✅ Dealer Saved:", savedDealer);
// //     res.status(201).json(savedDealer);
// //   } catch (error) {
// //     console.error("❌ Error saving dealer:", error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // });


// // // API to Get Dealers with Filters
// // app.get("/api/dealers", async (req, res) => {
// //   try {
// //     const { city, state, zip, vehicleType } = req.query;
// //     let filter = {};

// //     if (city) filter.city = city;
// //     if (state) filter.state = state;
// //     if (zip) filter.zip = zip;
// //     if (vehicleType) filter.vehicleType = vehicleType;

// //     const dealers = await Dealer.find(filter);

// //     console.log("✅ Dealers Fetched:", dealers.length);
// //     res.json(dealers);
// //   } catch (error) {
// //     console.error("❌ Error fetching dealers:", error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // });

// // // Start Server
// // const PORT = 5004;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/Dealer", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("Database Connection Error:", err));

// // Dealer Schema & Model
// const DealerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zip: { type: String, required: true },
//   latitude: Number,
//   longitude: Number,
//   contact: { type: String, required: true },
//   availableProducts: { type: [String], required: true }, // List of vehicle names
//   vehicleType: { type: String, required: true } // "New", "Used", "Brand"
// });

// const Dealer = mongoose.model("Dealer", DealerSchema);

// // Routes

// // ✅ Add a New Dealer
// app.post("/api/dealers", async (req, res) => {
//   try {
//     const dealer = new Dealer(req.body);
//     await dealer.save();
//     res.status(201).json({ message: "Dealer added successfully", dealer });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add dealer", details: err.message });
//   }
// });

// // ✅ Get Dealers by Filters
// app.get("/api/dealers", async (req, res) => {
//   try {
//     const { city, vehicleType, vehicleName } = req.query;
//     let filter = {};

//     if (city) filter.city = city;
//     if (vehicleType) filter.vehicleType = vehicleType;
//     if (vehicleName) filter.availableProducts = vehicleName; // Ensures dealer has the requested vehicle

//     const dealers = await Dealer.find(filter);

//     if (dealers.length === 0) {
//       return res.status(404).json({ message: "No dealers found matching criteria" });
//     }

//     res.json(dealers);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch dealers", details: err.message });
//   }
// });

// // ✅ Update Dealer Info
// app.put("/api/dealers/:id", async (req, res) => {
//   try {
//     const updatedDealer = await Dealer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
//     if (!updatedDealer) return res.status(404).json({ error: "Dealer not found" });
//     res.json({ message: "Dealer updated successfully", updatedDealer });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update dealer", details: err.message });
//   }
// });

// // ✅ Delete Dealer
// app.delete("/api/dealers/:id", async (req, res) => {
//   try {
//     const deletedDealer = await Dealer.findByIdAndDelete(req.params.id);
//     if (!deletedDealer) return res.status(404).json({ message: "Dealer not found" });
//     res.json({ message: "Dealer deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error", details: error.message });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5004;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Dealer", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Database Connection Error:", err));

// Dealer Schema & Model
const DealerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  latitude: Number,
  longitude: Number,
  contact: { type: String, required: true },
  availableProducts: { type: [String], required: true }, // List of vehicle names
  vehicleType: { type: String, required: true } // "New", "Used", "Brand"
});

const Dealer = mongoose.model("Dealer", DealerSchema);

// Routes

// ✅ Add a New Dealer
app.post("/api/dealers", async (req, res) => {
  try {
    const dealer = new Dealer(req.body);
    await dealer.save();
    res.status(201).json({ message: "Dealer added successfully", dealer });
  } catch (err) {
    res.status(500).json({ error: "Failed to add dealer", details: err.message });
  }
});

// ✅ Get Dealers by Filters
app.get("/api/dealers", async (req, res) => {
  try {
    const { city, vehicleType, vehicleName } = req.query;
    let filter = {};

    if (city) filter.city = city;
    if (vehicleType) filter.vehicleType = vehicleType;
    if (vehicleName) filter.availableProducts = vehicleName; // Ensures dealer has the requested vehicle

    const dealers = await Dealer.find(filter);

    if (dealers.length === 0) {
      return res.status(404).json({ message: "No dealers found matching criteria" });
    }

    res.json(dealers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dealers", details: err.message });
  }
});

// ✅ Update Dealer Info
app.put("/api/dealers/:id", async (req, res) => {
  try {
    const updatedDealer = await Dealer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (!updatedDealer) return res.status(404).json({ error: "Dealer not found" });
    res.json({ message: "Dealer updated successfully", updatedDealer });
  } catch (err) {
    res.status(500).json({ error: "Failed to update dealer", details: err.message });
  }
});

// ✅ Delete Dealer
app.delete("/api/dealers/:id", async (req, res) => {
  try {
    const deletedDealer = await Dealer.findByIdAndDelete(req.params.id);
    if (!deletedDealer) return res.status(404).json({ message: "Dealer not found" });
    res.json({ message: "Dealer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", details: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));