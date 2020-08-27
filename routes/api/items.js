const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

// Item Model:
const Item = require("../../models/Item");

// @route GET api/itmes
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route Post api/itmes
// @desc Create an item
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

// @route DELETE api/itmes/:id
// @desc Delete an item
// @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.deleteOne().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

router.get("/python2", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", ["python2.py", "node.js", "python"]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});

router.post("/python2", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", [
    "python2.py",
    req.body.Param1,
    req.body.Param2,
  ]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});

router.post("/python3", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  // const python = spawn("python", ["python3.py", req.body.Param1]);
  const python = spawn("python", ["python3.py", req.body.Param1]);
  console.log(
    "*********************************PYTHON3****************************"
  );
  console.log("req.body.Param1:");
  console.log(req.body.Param1);

  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    console.log("dataToSend");

    console.log(dataToSend);
    res.send(dataToSend);
  });
});

router.post("/python4", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  // const python = spawn("python", ["python3.py", req.body.Param1]);
  const python = spawn("python", ["python4.py", req.body.Param1]);
  console.log("req.body.Param1:");
  console.log(req.body.Param1);

  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    console.log("dataToSend");

    console.log(dataToSend);
    res.send(dataToSend);
  });
});
module.exports = router;
