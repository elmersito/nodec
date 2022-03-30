const{check, validationResult } = require("express-validator");
const { is } = require("express/lib/request");

const generateUserValidators = () => [
check("name").notEmpty().isLength({max:50}).withMessage("Invalid name"),
check("lastname").notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
check("phone").notEmpty().isLength({min:10,max:50}).isNumeric().withMessage("Invalid phone (ten numbers)"),
check("address").notEmpty().isLength({max:50}).withMessage("Invalid address")
]

const generateIdUservalidator = () => [
check("id").notEmpty().isNumeric().withMessage("Invalid id"),
]


const updateUserValidator = () => [

    check("id").notEmpty().isNumeric().withMessage("Invalid id"),
    check("name").isLength({max:50}).withMessage("Invalid name"),
    check("lastname").isLength({max:50}).withMessage("Invalid lastname"),
    check("phone").optional().isLength({min:10 , mas:50}).withMessage("Invalid phone"),
    check("address").isLength({max:50}).withMessage("Invalid address"),

]
const reporter = ( req , res , next )=>{
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(404).json({
        "sucess":false,
        "code":404,
        "message":errors,
        "data": []
    })
}
    next();
}

module.exports = {
    add:[
        generateUserValidators(),
        reporter
    ],

   id:[
     generateIdUservalidator(),
     reporter
],
    update:[
    updateUserValidator(),
    reporter
    ]

};
