const{check, validationResult } = require("express-validator");
const { is } = require("express/lib/request");

const generatePetValidator = () =>[

    check("alias").notEmpty().isLength({max:50}).withMessage("Invalid alias"),
    check("type").notEmpty().isIn(["DOG","CAT"]).withMessage("Invalid pet is dog o cat"),
    check("color").notEmpty().isLength({max:50}).withMessage("Invalid color "),
    check("notes").notEmpty().isLength({max:50}).withMessage("Invalid notes"),
]

const generateIdPetValidator = () => [
    check("id").notEmpty().isNumeric().withMessage("ID invalid not found")
]

const updatePetValidator = () => [
    check("id").notEmpty().isNumeric().withMessage("ID invalid not found"),
    check("alias").notEmpty().isLength({max:50}).withMessage("Invalid alias"),
    check("type").notEmpty().isIn(["DOG","CAT"]).withMessage("Invalid pet is dog o cat"),
    check("color").notEmpty().isLength({max:50}).withMessage("Invalid color "),
    check("notes").notEmpty().isLength({max:50}).withMessage("Invalid notes"),
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
            generatePetValidator,
            reporter
        ],
        
        id:[
            generateIdPetValidator,
            reporter
        ],

        update:[
            updatePetValidator,
            reporter
        ]


    }
