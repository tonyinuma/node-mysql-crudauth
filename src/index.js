const express = require("express");
const morgan = require("morgan");
const {engine} = require("express-handlebars");
const {join} = require("path");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", join(__dirname, "views"));
app.engine(".hbs", engine({
    defaultLayout: "main",
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars")
}));
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded());
app.use(express.json());

// Routes
app.use(require("./routes"));

app.listen(app.get("port"), () => {
    console.log(`Server started on port ${app.get("port")}`);
});
