import {Router} from "express"

import createUserController from "../controllers/createUser.controller"
import userLoginController from "../controllers/userLogin.controller"
import listUserController from "../controllers/listUser.controller"
import listUserProfileController from "../controllers/listUserProfile.controller"
import updateUserController from "../controllers/updateUser.controler"
import deleteUserController from "../controllers/deleteUser.controller"

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware"
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware"
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware"



 
const router = Router()

router.post("/users", verifyEmailAvailabilityMiddleware, createUserController)
router.post("/login", userLoginController)

router.get("/users", verifyAuthTokenMiddleware, listUserController)
router.get("/users/profile", verifyAuthTokenMiddleware, listUserProfileController )

router.patch("/users/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, updateUserController)

router.delete("/users/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, deleteUserController)




export default router