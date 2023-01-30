const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter=require("./routes/UserRoutes");
const expensesRouter=require("./routes/ExpensesRoute")
const port=3002;
const {startConnection}=require("./mongoConfig/conecction")
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/User", userRouter);
app.use("/api/Expenses", expensesRouter);
startConnection();

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
 });

