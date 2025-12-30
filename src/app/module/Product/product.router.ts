import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

// create product
router.post("/addProduct", ProductController.addProduct);

// get all products
router.get("/getProducts", ProductController.getAllProduct);

// get single product
router.get("/getProduct/:id", ProductController.getSingleProduct);

// update product
router.patch("/updateProduct/:id", ProductController.updateProduct);

// delete product
router.delete("/deleteProduct/:id", ProductController.deleteProduct);

export const ProductRouter = router;
