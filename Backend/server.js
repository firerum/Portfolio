const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoute = require("./routes/contact");

// The port
const PORT = process.env.PORT || 3002;

// initial the express app;
const app = express();


// set up the middleware to process the form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); // to enable cross origin from one http port to another http port


// routes
app.use("/contact-form", contactRoute);

// listen for request at the appropriate port
app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`);
});