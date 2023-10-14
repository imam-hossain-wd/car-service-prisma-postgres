import { Router } from "express";
import validateRequest from "../../middlewares/validationRequest";
import { ServiceValidation } from "./service.validation";
import { serviceController } from "./service.controller";


const router = Router();

router.post('/create', 
// validateRequest(ServiceValidation.createServiceZodSchema),
serviceController.createService)
router.get('/', serviceController.getAllServices)
router.get('/:id', serviceController.getService)
router.patch('/:id',
validateRequest(ServiceValidation.updateServiceZodSchema),
serviceController.updateService)
router.delete('/:id', serviceController.deleteService)

export const serviceRoutes = router;