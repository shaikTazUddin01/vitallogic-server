import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductService } from "./product.service";

/**
 * Create Product
 */
const addProduct = catchAsync(async (req, res) => {
  
  const result = await ProductService.addProduct(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Product added successfully",
    data: result,
  });
});

/**
 * Get All Products
 */
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProduct();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Products retrieved successfully",
    data: result,
  });
});

/**
 * Get Single Product
 */
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.getSingleProduct(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Product retrieved successfully",
    data: result,
  });
});

/**
 * Update Product
 */
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.updateProduct(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Product updated successfully",
    data: result,
  });
});

/**
 * Delete Product
 */
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ProductService.deleteProduct(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Product deleted successfully",
    data: null,
  });
});

export const ProductController = {
  addProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
