import { Router } from "express";
import { usercontroller } from "./user.controller";
import validateRequest from "../../middlewares/validationRequest";
import { UserValidation } from "./user.validation";

const router = Router();

router.post('/create', 
validateRequest(UserValidation.createUserZodSchema),
usercontroller.createUser)
router.get('/', usercontroller.getUsers)
router.get('/:id', usercontroller.getUser)
router.patch('/:id',
validateRequest(UserValidation.updateUserZodSchema),
usercontroller.updateUser)
router.delete('/:id', usercontroller.deleteUser)

export const userRoutes = router;