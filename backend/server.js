// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = 5003;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json({ limit: "10mb" }));
// app.use(bodyParser.urlencoded({ extended: true }));

// // MongoDB Connection for Vehicles
// const vehicleDB = mongoose.createConnection("mongodb://127.0.0.1:27017/VehicleManagement", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// vehicleDB.on("connected", () => console.log("✅ Vehicle DB Connected"));
// vehicleDB.on("error", (err) => console.error("❌ Vehicle DB Connection Error:", err));

// // MongoDB Connection for Banners
// const bannerDB = mongoose.createConnection("mongodb://127.0.0.1:27017/Banner", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// bannerDB.on("connected", () => console.log("✅ Banner DB Connected"));
// bannerDB.on("error", (err) => console.error("❌ Banner DB Connection Error:", err));

// // MongoDB Connection for Deals
// const dealsDB = mongoose.createConnection("mongodb://127.0.0.1:27017/Deals", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// dealsDB.on("connected", () => console.log("✅ Deals DB Connected"));
// dealsDB.on("error", (err) => console.error("❌ Deals DB Connection Error:", err));

// // Vehicle Schema & Model
// const vehicleSchema = new mongoose.Schema({
//   name: String,
//   type: String,
//   price: Number,
//   availability: Boolean,
//   image: String,
// });

// const Vehicle = vehicleDB.model("Vehicle", vehicleSchema);

// // Banner Schema & Model
// const bannerSchema = new mongoose.Schema({
//   image: String,
// });

// const Banner = bannerDB.model("Banner", bannerSchema);

// // Deals Schema & Model
// const dealSchema = new mongoose.Schema({
//   name: String,
//   image: String,
//   details: String,
//   discount: Number,
// });

// const Deal = dealsDB.model("Deal", dealSchema);

// // 👉 Get all vehicles
// app.get("/vehicles", async (req, res) => {
//   try {
//     const vehicles = await Vehicle.find();
//     res.json({ vehicles });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // 👉 Get a specific vehicle by ID
// app.get("/vehicles/:id", async (req, res) => {
//   try {
//     const vehicle = await Vehicle.findById(req.params.id);
//     if (!vehicle) {
//       return res.status(404).json({ error: "Vehicle not found" });
//     }
//     res.json({ vehicle });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // 👉 Add a new vehicle
// app.post("/vehicles", async (req, res) => {
//   try {
//     const { name, type, price, availability, image } = req.body;
//     const newVehicle = new Vehicle({ name, type, price, availability, image });
//     await newVehicle.save();
//     res.status(201).json({ message: "Vehicle Added", vehicle: newVehicle });
//   } catch (error) {
//     res.status(500).json({ error: "Error adding vehicle" });
//   }
// });

// // 👉 Update a vehicle
// app.put("/vehicles/:id", async (req, res) => {
//   try {
//     const { name, type, price, availability, image } = req.body;
//     const updatedVehicle = await Vehicle.findByIdAndUpdate(
//       req.params.id,
//       { name, type, price, availability, image },
//       { new: true }
//     );
//     if (!updatedVehicle) {
//       return res.status(404).json({ error: "Vehicle not found" });
//     }
//     res.status(200).json({ message: "Vehicle Updated", vehicle: updatedVehicle });
//   } catch (error) {
//     res.status(500).json({ error: "Error updating vehicle" });
//   }
// });

// // 👉 Delete a vehicle
// app.delete("/vehicles/:id", async (req, res) => {
//   try {
//     const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
//     if (!deletedVehicle) {
//       return res.status(404).json({ error: "Vehicle not found" });
//     }
//     res.status(200).json({ message: "Vehicle Deleted", vehicle: deletedVehicle });
//   } catch (error) {
//     res.status(500).json({ error: "Error deleting vehicle" });
//   }
// });

// // 👉 Get all banner images
// app.get("/banners", async (req, res) => {
//   try {
//     const banners = await Banner.find();
//     res.json({ banners });
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching banners" });
//   }
// });

// // 👉 Add a new banner image
// app.post("/banners", async (req, res) => {
//   try {
//     const { image } = req.body;
//     const newBanner = new Banner({ image });
//     await newBanner.save();
//     res.status(201).json({ message: "Banner Added", banner: newBanner });
//   } catch (error) {
//     res.status(500).json({ error: "Error adding banner" });
//   }
// });

// // 👉 Get all deals
// app.get("/deals", async (req, res) => {
//   try {
//     const deals = await Deal.find();
//     res.json({ deals });
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching deals" });
//   }
// });

// // 👉 Add a new deal
// app.post("/deals", async (req, res) => {
//   try {
//     const { name, image, details, discount } = req.body;
//     const newDeal = new Deal({ name, image, details, discount });
//     await newDeal.save();
//     res.status(201).json({ message: "Deal Added", deal: newDeal });
//   } catch (error) {
//     res.status(500).json({ error: "Error adding deal" });
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

const express = require("express");
  const mongoose = require("mongoose");
  const cors = require("cors");
  const bodyParser = require("body-parser");

  const app = express();
  const PORT = 5003;

  // Middleware
  app.use(cors());
  app.use(bodyParser.json({ limit: "10mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));

  // MongoDB Connection for Vehicles
  const vehicleDB = mongoose.createConnection("mongodb://127.0.0.1:27017/VehicleManagement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  vehicleDB.on("connected", () => console.log("✅ Vehicle DB Connected"));
  vehicleDB.on("error", (err) => console.error("❌ Vehicle DB Connection Error:", err));

  // MongoDB Connection for Banners
  const bannerDB = mongoose.createConnection("mongodb://127.0.0.1:27017/Banner", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  bannerDB.on("connected", () => console.log("✅ Banner DB Connected"));
  bannerDB.on("error", (err) => console.error("❌ Banner DB Connection Error:", err));

  // MongoDB Connection for Deals
  const dealsDB = mongoose.createConnection("mongodb://127.0.0.1:27017/Deals", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  dealsDB.on("connected", () => console.log("✅ Deals DB Connected"));
  dealsDB.on("error", (err) => console.error("❌ Deals DB Connection Error:", err));

  // Vehicle Schema & Model
  const vehicleSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    availability: Boolean,
    image: String,
  });

  const Vehicle = vehicleDB.model("Vehicle", vehicleSchema);

  // Banner Schema & Model
  const bannerSchema = new mongoose.Schema({
    image: String,
  });

  const Banner = bannerDB.model("Banner", bannerSchema);

  // Deals Schema & Model
  const dealSchema = new mongoose.Schema({
    name: String,
    image: String,
    details: String,
    discount: Number,
  });

  const Deal = dealsDB.model("Deal", dealSchema);

  // 👉 Get all vehicles
  app.get("/vehicles", async (req, res) => {
    try {
      const vehicles = await Vehicle.find();
      res.json({ vehicles });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // 👉 Get a specific vehicle by ID
  app.get("/vehicles/:id", async (req, res) => {
    try {
      const vehicle = await Vehicle.findById(req.params.id);
      if (!vehicle) {
        return res.status(404).json({ error: "Vehicle not found" });
      }
      res.json({ vehicle });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // 👉 Add a new vehicle
  app.post("/vehicles", async (req, res) => {
    try {
      const { name, type, price, availability, image } = req.body;
      const newVehicle = new Vehicle({ name, type, price, availability, image });
      await newVehicle.save();
      res.status(201).json({ message: "Vehicle Added", vehicle: newVehicle });
    } catch (error) {
      res.status(500).json({ error: "Error adding vehicle" });
    }
  });

  // 👉 Update a vehicle
  app.put("/vehicles/:id", async (req, res) => {
    try {
      const { name, type, price, availability, image } = req.body;
      const updatedVehicle = await Vehicle.findByIdAndUpdate(
        req.params.id,
        { name, type, price, availability, image },
        { new: true }
      );
      if (!updatedVehicle) {
        return res.status(404).json({ error: "Vehicle not found" });
      }
      res.status(200).json({ message: "Vehicle Updated", vehicle: updatedVehicle });
    } catch (error) {
      res.status(500).json({ error: "Error updating vehicle" });
    }
  });

  // 👉 Delete a vehicle
  app.delete("/vehicles/:id", async (req, res) => {
    try {
      const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
      if (!deletedVehicle) {
        return res.status(404).json({ error: "Vehicle not found" });
      }
      res.status(200).json({ message: "Vehicle Deleted", vehicle: deletedVehicle });
    } catch (error) {
      res.status(500).json({ error: "Error deleting vehicle" });
    }
  });

  // 👉 Get all banner images
  app.get("/banners", async (req, res) => {
    try {
      const banners = await Banner.find();
      res.json({ banners });
    } catch (error) {
      res.status(500).json({ error: "Error fetching banners" });
    }
  });

  // 👉 Add a new banner image
  app.post("/banners", async (req, res) => {
    try {
      const { image } = req.body;
      const newBanner = new Banner({ image });
      await newBanner.save();
      res.status(201).json({ message: "Banner Added", banner: newBanner });
    } catch (error) {
      res.status(500).json({ error: "Error adding banner" });
    }
  });

  // 👉 Get all deals
  app.get("/deals", async (req, res) => {
    try {
      const deals = await Deal.find();
      res.json({ deals });
    } catch (error) {
      res.status(500).json({ error: "Error fetching deals" });
    }
  });

  // 👉 Add a new deal
  app.post("/deals", async (req, res) => {
    try {
      const { name, image, details, discount } = req.body;
      const newDeal = new Deal({ name, image, details, discount });
      await newDeal.save();
      res.status(201).json({ message: "Deal Added", deal: newDeal });
    } catch (error) {
      res.status(500).json({ error: "Error adding deal" });
    }
  });

  // Start Server
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });