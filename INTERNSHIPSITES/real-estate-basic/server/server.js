
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/inquiry", (req, res) => {
  const newInquiry = req.body;
  const filePath = __dirname + "/data/inquiries.json";
  const data = JSON.parse(fs.readFileSync(filePath));
  data.push(newInquiry);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "Inquiry saved" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
