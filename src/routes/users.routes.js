import {Router} from "express"

import listUserController from "../controllers/listUser.controller"

const router = Router()

router.get("/users", listUserController)

export default router