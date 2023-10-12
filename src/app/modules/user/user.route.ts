import { Router } from "express";
import { usercontroller } from "./user.controller";
import validateRequest from "../../middlewares/validationRequest";
import { UserValidation } from "./user.validation";

const router = Router();
router.post('/create', 
validateRequest(UserValidation.createUserZodSchema),
usercontroller.createUser)

export const userRoutes = router;