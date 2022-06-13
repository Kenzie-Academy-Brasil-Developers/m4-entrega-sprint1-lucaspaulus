import { Router } from "express";
import userLoginController from "../controllers/userLogin.controller"
import loginSchema from "../database/schema/login.schema";
import schemaValidationMiddleware from "../middlewares/verifySchema.middleware";

const loginRoutes = Router()
loginRoutes.post("",schemaValidationMiddleware(loginSchema), userLoginController)

export default loginRoutes