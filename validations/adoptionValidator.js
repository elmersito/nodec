const{check, validationResult } = require("express-validator");
const { is } = require("express/lib/request");


const generateAdoptionValidation = () => [

 
    check("user_id").notEmpty().isNumeric().withMessage("Invalid id err with user"),
    check("pet_id").notEmpty().isNumeric().withMessage("Invalid id err with pets"),
    check("date").notEmpty().isDate().withMessage("Invalid date"),

]

const generateIDAdoptionValidation = () => [

    check("id").notEmpty().isNumeric().withMessage("ID invalid not found")

]

const updateAdoptionValidator = () => [
    
    check("id").notEmpty().isNumeric().withMessage("ID invalid not found"),
    check("user_id").notEmpty().isNumeric().withMessage("Invalid id err with user"),
    check("pet_id").notEmpty().isNumeric().withMessage("Invalid id err with pets"),
    check("date").notEmpty().isDate().withMessage("Invalid date"),

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
            generateAdoptionValidation,
            reporter
        ],
        
        id:[
            generateIDAdoptionValidation,
            reporter
        ],

        update:[
            updateAdoptionValidator,
            reporter
        ]


    }
