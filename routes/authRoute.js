import expres from "express";
import { registerController, loginController, testController, forgotPasswordController, updateProfileController, getAllOrdersController, getOrdersController, orderStatusController } from '../controller/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";

//router object 
const router = expres.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password
router.post('/forgot-password', forgotPasswordController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected User auth route
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

//Update Profile
router.put('/profile', requireSignIn, updateProfileController)

//orders
router.get('/orders', requireSignIn, getOrdersController)


//all orders
router.get('/all-orders', requireSignIn, getAllOrdersController)

//order update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)


export default router;