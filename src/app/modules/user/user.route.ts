import { Router } from "express";
import { usercontroller } from "./user.controller";
import validateRequest from "../../middlewares/validationRequest";
import { UserValidation } from "./user.validation";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = Router();

router.post('/create', 
validateRequest(UserValidation.createUserZodSchema),
usercontroller.createUser)

router.get('/',
auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.USER),
usercontroller.getUsers)

router.get('/:id', usercontroller.getUser)

router.patch('/:id',
validateRequest(UserValidation.updateUserZodSchema),
usercontroller.updateUser)

router.delete('/:id', usercontroller.deleteUser)

export const userRoutes = router;