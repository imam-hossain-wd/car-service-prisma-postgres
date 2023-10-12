"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const service_validation_1 = require("./service.validation");
const service_controller_1 = require("./service.controller");
const router = (0, express_1.Router)();
router.post('/create', (0, validationRequest_1.default)(service_validation_1.ServiceValidation.createServiceZodSchema), service_controller_1.serviceController.createService);
router.get('/', service_controller_1.serviceController.getAllServices);
router.get('/:id', service_controller_1.serviceController.getService);
router.patch('/:id', (0, validationRequest_1.default)(service_validation_1.ServiceValidation.updateServiceZodSchema), service_controller_1.serviceController.updateService);
router.delete('/:id', service_controller_1.serviceController.deleteService);
exports.serviceRoutes = router;
