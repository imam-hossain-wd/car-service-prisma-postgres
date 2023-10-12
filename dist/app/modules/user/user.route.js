"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.post('/create', (0, validationRequest_1.default)(user_validation_1.UserValidation.createUserZodSchema), user_controller_1.usercontroller.createUser);
router.get('/', user_controller_1.usercontroller.getUsers);
router.get('/:id', user_controller_1.usercontroller.getUser);
router.patch('/:id', (0, validationRequest_1.default)(user_validation_1.UserValidation.updateUserZodSchema), user_controller_1.usercontroller.updateUser);
router.delete('/:id', user_controller_1.usercontroller.deleteUser);
exports.userRoutes = router;
