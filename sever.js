const express = require('express');
const path = require("path");
const fs = require("fs");
const Apiroutes = require("./Routes/Apiroutes");
const Routeshtml = require("./Routes/Routeshtml");

const app = express();

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/APi", Apiroutes);
app.use("/", Routeshtml);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () =>
console.log (`App listening at http://localhost:${PORT}`)
);
