const express = require("express");
const { signup, signin, requireSignin } = require("../controller/admin/auth");
const { check } = require("express-validator");
const router = express.Router();

router.post("/signin", signin);
router.post(
  "/signup",
  [
    check("firstName").notEmpty().withMessage("firstName is required"),

    check("lastName").notEmpty().withMessage("lastName is required"),
    check("email").isEmail().withMessage("Valid Email is required"),

    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 character long"),
  ],
  signup
);

// router.post("/profile",requireSignin,(req,res) =>{
//     res.status(200).json({
//         user: 'profile'
//     })
// });

module.exports = router;
