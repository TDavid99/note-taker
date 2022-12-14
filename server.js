const express = require("express");
const path = require("path");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// PORT
const PORT = process.env.PORT || 3002;

// express server
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () =>
console.log (`App listening at http://localhost:${PORT}`)
);
