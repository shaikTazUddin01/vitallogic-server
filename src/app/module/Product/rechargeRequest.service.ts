import { StatusCodes } from "http-status-codes";
import { AppError } from "../../error/AppError";
import { Auth } from "../Auth/auth.model";
import { IRechargeRequest } from "./rechargeRequest.interface";
import { RechargeRequest } from "./rechargeRequest.model";


const createRechargeRequest = async (data: IRechargeRequest) => {
  const requestData = {
    agentId: data?.agentId,
    requestStatus: "Pending",
  };
  const res = await RechargeRequest.create(requestData);
  return res;
};

const getRechargeRequest = async () => {
  const res = await RechargeRequest.find().populate("agentId");
  return res;
};


export const RechargeRequestService = {
  createRechargeRequest,
  getRechargeRequest,
 
};
