import {Router} from "express"

import createUserController from "../controllers/createUser.controller"
import listUserController from "../controllers/listUser.controller"
import listUserProfileController from "../controllers/listUserProfile.controller"
import updateUserController from "../controllers/updateUser.controler"
import deleteUserController from "../controllers/deleteUser.controller"
import userSchema from "../database/schema/user.schema"

import schemaValidationMiddleware from "../middlewares/verifySchema.middleware"
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware"
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware"
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware"
import verifyUser from "../middlewares/verifyUser.middleware"

const router = Router()

router.post("", schemaValidationMiddleware(userSchema), verifyEmailAvailabilityMiddleware, createUserController)
router.get("", verifyAuthTokenMiddleware, verifyAdmMiddleware, listUserController)
router.get("/profile", verifyAuthTokenMiddleware, listUserProfileController )
router.patch("/:id", verifyAuthTokenMiddleware,  verifyUser, updateUserController)
router.delete("/:id", verifyAuthTokenMiddleware, verifyUser, deleteUserController)

export default router