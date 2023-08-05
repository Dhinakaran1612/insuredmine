const express = require("express");
const app = express();
const cors = require("cors");
const httpStatus = require("http-status");
const config = require("./src/config/config");
const mongoose = require("mongoose");
const { ThrowException } = require("./src/utils/throwException");

//Routes
const routes = require("./src/routes");

const corsOption = {
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database connection
mongoose
  .connect(`${config.MONGO_DB}/insuredmine`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", routes);

// send back a 404 error for any unknown api request
app.use((req, res) => {
  return ThrowException(
    httpStatus.NOT_FOUND,
    `${req.method} - ${req.protocol}://${req.hostname}${
      req.hostname == "localhost" ? `:${PORT}` : ""
    }${req.originalUrl} - Route not found!`,
    res
  );
});

const PORT = config?.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`);
});
