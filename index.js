const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const colors = require("colors");
const dbConn = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
//connect to db
dbConn();
app.use(bodyParser.json());
app.use("/api/user", authRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is Running at PORT ${PORT}`.magenta);
});
