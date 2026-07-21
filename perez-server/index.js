require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const connectDB = require("./components/config/db");
const userRoutes = require("./components/routes/userRoutes");
const articleRoutes = require("./components/routes/articleRoutes");


const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// vercel options
const allowedOrigins = [
  'http://localhost:5173', // Your local frontend
  'https://perez-client.onrender.com', // Your deployed frontend
  // Add any other client URLs here
];

const corsOptions = {
  origin: function (origin, callback) {
    !origin || allowedOrigins.includes(origin) ? callback(null, true) : callback(new Error('Not allowed by CORS'));
  },
  credentials: true, // Allow credentials
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204, // For legacy browser support
};
app.use(cors(corsOptions));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);

// Root Route for Vercel
app.get("/", (req, res) => {
  res.send("API Sean is working");
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});


// Export the app for Vercel serverless function wrapper
module.exports = app;