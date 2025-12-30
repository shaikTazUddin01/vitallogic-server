import { Types } from "mongoose";

export interface IProduct {
  id?: Types.ObjectId;
  name: string;
  image: string;
  price: number;
  description: string;
  
  // optional / system fields
  status?: "active" | "inactive";
  createdBy?: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
