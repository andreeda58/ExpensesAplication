const express = require("express");
const router = express.Router();
const controller = require("../controller/userController");
const asyncHandler = require("../helpers/asyncHandler");


router.get("/getUserById/:id", asyncHandler(async (req, res) => {
  const Id = req.params.id;
  const data = await controller.getUserById(Id);
  res.send(data);
}))

router.post("/addUser", asyncHandler(async (req, res) => {
  console.log(req.body);
  const data = await controller.addUser(req.body);
  res.status(200).send(data);
}))


router.post("/UpdateUser", asyncHandler(async (req, res) => {
  const data = await controller.UpdateUser(req.body);
  res.status(200).send(data);
}))


module.exports = router;