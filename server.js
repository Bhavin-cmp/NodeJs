import express from "express";
const app = express();
const port = 8080;

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide Age");
  } else if (req.query.age < 18) {
    res.send(
      "You can not access your age it below 18 to access you shoud be 18 or above"
    );
  } else {
    next();
  }
};
app.use(reqFilter);
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/about", (req, res) => res.send("About Page!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
