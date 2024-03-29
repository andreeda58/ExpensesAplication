const express = require("express");
const router = express.Router();

const controller = require("../controller/expenseController");
const asyncHandler = require("../helpers/asyncHandler");


router.get("/getExpensesByUserId/:id", asyncHandler(async (req, res) => {
  const {id} = req.params;
  const data = await controller.getExpensesByUserId(id);
  res.send(data).status(200);

}))


router.get("/getExpenseById/:id", asyncHandler(async (req, res) => {
  const {id} = req.params;
  const data = await controller.getExpenseById(id);
  res.send(data).status(200);

}))

router.put("/updateExpense/:id",asyncHandler(async (req,res)=>{
  const {id}=req.params;
  const data = await  controller.updateExpenseById(id ,req.body);
  res.status(200).send(data);
}))


router.delete("/deleteExpense/:id",asyncHandler(async(req,res)=>{
  const {id} = req.params;
  console.log("router");
  const data = await   controller.deleteExpenseById(id);
  res.status(200).send(data);
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