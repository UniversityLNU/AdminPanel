import { CreateFundraisingModel } from "./FundraisingModel";

export interface Response {
    fundraisingList: FundraisingGetModel[],
    statusCode: number,
    message: string
}