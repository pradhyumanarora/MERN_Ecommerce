const express = require("express");
const env = require("dotenv")
const app = express();
const bodyParser = require("body-parser");
const mongose = require("mongoose");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
// mongodb+srv://pradhyuman:pradhyuman2002@face-detection.qi24f.mongodb.net/?retryWrites=true&w=majority
// ${process.env.MONGO_DB_DATABASE}

env.config();
mongose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@face-detection.qi24f.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    }
  )
  .then(() => {
    console.log("Database Connected");
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", authRoutes);
app.use("/api", adminRoutes);



// app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Server",
  });
});

app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
