const express = require("express");
const app = express();
const mailerRouter = require("./mailer");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", mailerRouter);

app.listen(8000, (req, res) => {
  console.log("server lisetning to port 8000");
  //   console.log(req.body);
});
