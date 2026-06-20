const {check, validationResult}=require("express-validator");

exports.registerRules = () => [
        check("name", "Name is Required").notEmpty(),
        check("lastName", "LastName is Required").notEmpty(),
        check("email", "Email is Required").notEmpty(),
        check("email", "Check Email Again").isEmail(),
        // check("email", "Invalid Email").notEmpty().isEmail(),
        check("password", "Password is Required").isLength({
            min: 6,
            max: 20
        }),

    ]


exports.loginRules = () => [
        check("email", "Email is Required").notEmpty(),
        check("email", "Check Email Again").isEmail(),
        check("password", "Password Must be Between 6 Character and 20 Character").isLength({
            min: 6,
            max: 20
        }),
        
        // check("email", "Invalid Email").notEmpty().isEmail(),
        // check("password", "Password is required").notEmpty(),

    ]


exports.validation = (req, res, next)=>{
    const errors = validationResult(req)
    // console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array().map((el) => ({msg: el.msg}) )})
    } 
    next()
}