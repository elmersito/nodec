const { check, validationResult } = require('express-validator');

const generateAdoptionsValidators = () => [
    check('user_id').notEmpty().isNumeric().withMessage('Invalid user_id'),
    check('pet_id').notEmpty().isNumeric().withMessage('Invalid pet_id'),
    check('date').notEmpty().isDate().withMessage('Invalid date'),
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage('Invalid ID'),
]

const updateAdoptionsValidators = () => [
    check('id').notEmpty().isNumeric().withMessage('Invalid ID'),
    check('user_id').notEmpty().isNumeric().withMessage('Invalid user_id'),
    check('pet_id').notEmpty().isNumeric().withMessage('Invalid pet_id'),
    check('date').notEmpty().isDate().withMessage('Invalid date'),
]
const reporter = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({
            "success": false,
            "code": 404,
            "message": errors,
            "data": []
        });
    }
    next();
}
module.exports = {
    add: [
        generateAdoptionsValidators(),
        reporter
    ],
    update: [
        updateAdoptionsValidators(),
        reporter
    ],
    id: [
        generateIdValidators(),
        reporter
    ]
}
