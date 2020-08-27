require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
const path = require("path");
const { spawn } = require("child_process");

const app = express();

//BodyPraser middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//connet to mongo
//mongo user: email: "asafrdt1993@gmail.com" | password: my-classic-mail password
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//use Routes:
app.use("/api/items", items);

// serve static assests if we are in production
if (process.env.NODE_ENV === "production") {
  //set static folder:
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
