import { Router } from "express";
import { authController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validationRequest";
import { AuthValidation } from "./auth.validation";

const router = Router();

router.post('/login',
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.SUPER_ADMIN),
// validateRequest(AuthValidation.loginUserZodSchema),
authController.login)

router.post('/refresh-token',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.SUPER_ADMIN),
validateRequest(AuthValidation.loginUserZodSchema),
authController.login)

export const authRoutes = router;