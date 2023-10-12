import { Router } from "express";
import { usercontroller } from "./user.controller";

const router = Router();
router.post('/create', usercontroller.createUser)

export const userRoutes = router;