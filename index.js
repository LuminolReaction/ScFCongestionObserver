// index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// public フォルダの中身を静的に公開
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
