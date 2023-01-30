const express = require("express");
const router = express.Router();

const controller = require("../controller/expenseController");
const asyncHandler = require("../helpers/asyncHandler");


router.get("/getExpensesByUserId/:id", asyncHandler(async (req, res) => {
  const Id = req.params.id;
  const data = await controller.getExpensesByUserId(Id);

  res.send(data);

}))

router.post("/addExpenses", asyncHandler(async (req, res) => {

  const data = await controller.addExpenses(req.body);
  res.status(200).send(data);
}))


router.post("/getSumExpensesByDates", asyncHandler(async (req, res) => {
  
  const data = await controller.getSumExpensesByDates(req.body);
  res.status(200).send(data);

}))


router.post("/getExpensesByDates", asyncHandler(async (req, res) => {
  
  const data = await controller.getExpensesByDates(req.body);
  res.status(200).send(data);

}))



module.exports = router;