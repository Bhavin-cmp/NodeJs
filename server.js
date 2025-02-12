import express from "express";
import reqFilter from "./middleware/middleware.js";

const app = express();
const port = 8080;
const router = express.Router();

// Apply middleware to only `router` routes
router.use(reqFilter);

//* if we are uisng middleware like this it applied on all route.
// app.use(reqFilter);

// Public routes with no middleware
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/about", (req, res) => res.send("About Page!"));

// Protected routes middleware Applied
router.get("/contact", (req, res) => res.send("Contact Page!"));
router.get("/user", (req, res) => res.send("User Page!"));

//Attach route to the App
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
