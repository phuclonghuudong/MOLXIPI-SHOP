const { Router } = require("express");
const {
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require("../controller/CategoryController");

const categoryRouter = Router();

categoryRouter.post("/create", createCategoryController);
categoryRouter.post("/update", updateCategoryController);
categoryRouter.post("/delete", deleteCategoryController);

module.exports = categoryRouter;
