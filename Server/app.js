const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter=require("./routes/UserRoutes");
const expensesRouter=require("./routes/ExpensesRoute")
require("dotenv").config();
const {startConnection}=require("./mongoConfig/conecction")
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/User", userRouter);
app.use("/api/Expenses", expensesRouter);
startConnection();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT: ${process.env.PORT}`);
 });

