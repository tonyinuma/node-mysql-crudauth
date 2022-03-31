const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));

// Routes
app.use(require("./routes"));

app.listen(app.get("port"), () => {
    console.log(`Server started on port ${app.get("port")}`);
});
