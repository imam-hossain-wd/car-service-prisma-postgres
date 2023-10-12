"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const admin_validation_1 = require("./admin.validation");
const admin_controller_1 = require("./admin.controller");
const router = (0, express_1.Router)();
router.post('/create', (0, validationRequest_1.default)(admin_validation_1.AdminValidation.createAdminZodSchema), admin_controller_1.adminController.createAdmin);
router.get('/', admin_controller_1.adminController.getAllAdmin);
router.get('/:id', admin_controller_1.adminController.getSingleAdmin);
router.patch('/:id', (0, validationRequest_1.default)(admin_validation_1.AdminValidation.updateAdminZodSchema), admin_controller_1.adminController.updateAdmin);
router.delete('/:id', admin_controller_1.adminController.deleteAdmin);
exports.adminRoutes = router;
