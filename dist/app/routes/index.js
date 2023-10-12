"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const service_route_1 = require("../modules/service/service.route");
const booking_route_1 = require("../modules/booking/booking.route");
const review_route_1 = require("../modules/review/review.route");
const admin_route_1 = require("../modules/admin/admin.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.userRoutes
    },
    {
        path: "/service",
        route: service_route_1.serviceRoutes
    },
    {
        path: "/booking",
        route: booking_route_1.bookingRoutes
    },
    {
        path: "/review",
        route: review_route_1.reviewRoutes
    },
    {
        path: "/admin",
        route: admin_route_1.adminRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
