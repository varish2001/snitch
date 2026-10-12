import { body,validationResult } from "express-validator"

export const registerValidator = [ 
    body('email')
        .exists().withMessage("Email is required").bail()
        .trim()
        .isEmail().withMessage("Invalid email format"),
    body('name')
        .exists().withMessage("Name is required").bail()
        .isString().withMessage("Name must be a string")
        .trim()
        .isLength({min: 2, max: 50 }) .withMessage("Name length must be between 2 to 50 charavters"),
    body('password')
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be a string")
        .trim()
        .isLength({min: 6 }).withMessage("Password length must be between 6"),
    (req,res),next => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"Invalid Request",
                errors: errors.array()
 })
        }
        next()
    }
        
]