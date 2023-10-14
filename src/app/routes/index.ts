import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { serviceRoutes } from '../modules/service/service.route';
import { bookingRoutes } from '../modules/booking/booking.route';
import { reviewRoutes } from '../modules/review/review.route';
import { adminRoutes } from '../modules/admin/admin.route';
import { authRoutes } from '../modules/auth/auth.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes
  },
  {
    path: "/service",
    route: serviceRoutes
  },
  {
    path: "/booking",
    route: bookingRoutes
  },
  {
    path: "/review",
    route: reviewRoutes
  },
  {
    path: "/admin",
    route: adminRoutes
  },
  {
    path: "/auth",
    route: authRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
