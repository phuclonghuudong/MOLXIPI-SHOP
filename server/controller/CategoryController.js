const CategoryModel = require("../model/CategoryModel");
const BrandModel = require("../model/BrandModel");
const ProductModel = require("../model/ProductModel");

const createCategoryController = async (request, response) => {
  try {
    const { name, slug, description, parentId, logo } = request.body;

    if (!name || !slug) {
      return response.status(400).json({
        message: "Enter required fields",
        error: true,
        success: false,
      });
    }

    const checkSlug = await CategoryModel.findOne({ slug });
    if (checkSlug) {
      return response.json({
        message: "Already exist slug!",
        error: true,
        success: false,
      });
    }
    const checkName = await CategoryModel.findOne({ name });
    if (checkName) {
      return response.json({
        message: "Already exist name!",
        error: true,
        success: false,
      });
    }

    const payload = {
      name,
      slug,
      description,
      parentId: parentId ? parentId : 0,
      logo,
    };

    const categoryNew = new CategoryModel(payload);
    const save = await categoryNew.save();

    return response.json({
      message: "Category create successfully",
      error: false,
      success: true,
      data: save,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const updateCategoryController = async (request, response) => {
  try {
    const { _id, name, slug, description, parentId, logo } = request.body;

    const checkCategoryId = await CategoryModel.findOne({ _id });
    if (!checkCategoryId) {
      return response.json({
        message: "Provide categoryId!",
        error: true,
        success: false,
      });
    }

    const checkParentId = await CategoryModel.findOne({ _id: parentId });
    if (Number(checkParentId?.parentId) !== 0) {
      return response.json({
        message: "Cannot select category!",
        error: true,
        success: false,
      });
    }

    const checkSlug = await CategoryModel.findOne({ slug });
    if (checkSlug) {
      return response.json({
        message: "Already exist slug!",
        error: true,
        success: false,
      });
    }
    const checkName = await CategoryModel.findOne({ name });
    if (checkName) {
      return response.json({
        message: "Already exist name!",
        error: true,
        success: false,
      });
    }

    const update = await CategoryModel.updateOne(
      { _id: _id },
      {
        name,
        slug,
        description,
        parentId,
        logo,
      }
    );

    return response.json({
      message: "Category update successfully",
      error: false,
      success: true,
      data: update,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const deleteCategoryController = async (request, response) => {
  try {
    const { _id } = request.body;

    const checkCategoryId = await CategoryModel.findOne({ _id });
    if (!checkCategoryId) {
      return response.json({
        message: "Provide categoryId!",
        error: true,
        success: false,
      });
    }

    const checkParentId = await CategoryModel.find({
      parentId: _id,
    }).countDocuments();

    const checkBrand = await BrandModel.find({
      category: {
        $in: [_id],
      },
    }).countDocuments();
    const checkProduct = await ProductModel.find({
      category: {
        $in: [_id],
      },
    }).countDocuments();

    if (checkBrand > 0 || checkProduct > 0 || checkParentId > 0) {
      return response.json({
        message: "Could not perform this action!",
        error: true,
        success: false,
      });
    }

    await CategoryModel.deleteOne({ _id: _id });

    return response.json({
      message: "Category delete successfully",
      error: false,
      success: true,
      data: "",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
