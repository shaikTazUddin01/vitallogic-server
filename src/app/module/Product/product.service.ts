import { StatusCodes } from "http-status-codes";
import { AppError } from "../../error/AppError";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";


/**
 * Add Product
 */
const addProduct = async (data: IProduct) => {
  const res = await Product.create(data);
  return res;
};

/**
 * Get All Products
 */
const getAllProduct = async () => {
  const res = await Product.find().sort({ createdAt: -1 });
  return res;
};

/**
 * Get Single Product
 */
const getSingleProduct = async (id: string) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, "Product not found");
  }

  return product;
};

/**
 * Update Product
 */
const updateProduct = async (id: string, payload: Partial<IProduct>) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, "Product not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    payload,
    { new: true, runValidators: true }
  );

  return updatedProduct;
};

/**
 * Delete Product
 */
const deleteProduct = async (id: string) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, "Product not found");
  }

  await Product.findByIdAndDelete(id);
  return null;
};

export const ProductService = {
  addProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
