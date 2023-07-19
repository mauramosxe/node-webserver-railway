require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico / Serve static content.
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Mauricio Ramos",
    titulo: "Curse of nodeJs",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Mauricio Ramos",
    titulo: "Curse of nodeJs",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Mauricio Ramos",
    titulo: "Curse of nodeJs",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
