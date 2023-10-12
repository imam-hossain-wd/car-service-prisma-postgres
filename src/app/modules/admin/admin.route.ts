import { Router } from "express";

import validateRequest from "../../middlewares/validationRequest";
import { AdminValidation } from "./admin.validation";
import { adminController } from "./admin.controller";


const router = Router();

router.post('/create', 
validateRequest(AdminValidation.createAdminZodSchema),
adminController.createAdmin)
router.get('/', adminController.getAllAdmin)
router.get('/:id', adminController.getSingleAdmin)
router.patch('/:id',
validateRequest(AdminValidation.updateAdminZodSchema),
adminController.updateAdmin)
router.delete('/:id', adminController.deleteAdmin)

export const adminRoutes = router;