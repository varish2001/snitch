import { Router } from "express"
import { registerValidator, loginValidator } from "../validators/auth.validator.js"
import { login, register, refresh} from "../controller/auth.controller.js"

const router = Router()

router.post("/register", registerValidator, register)

router.post("/login",loginValidator, login )

router.post("/refresh", refresh)

export default router       
