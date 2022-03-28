const { check, validationResult } = require('express-validator');

const generatePetsValidators = () => [
    check('alias').notEmpty().isLength({ max: 150 }).withMessage('Invalid alias'),
    check('type').notEmpty().isIn('DOG', 'CAT').withMessage('Invalid type'),
    check('color').notEmpty().isLength({ max: 20 }).isNumeric().withMessage('Invalid phone'),
    check('notes').notEmpty().isLength().withMessage('Invalid note')
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage('Invalid ID'),
]

const updatePetsValidators = () => [
    check('id').notEmpty().isNumeric().withMessage('Invalid ID'),
    check('alias').notEmpty().isLength({ max: 150 }).withMessage('Invalid alias'),
    check('type').notEmpty().isIn('DOG', 'CAT').withMessage('Invalid type'),
    check('color').notEmpty().isLength({ max: 20 }).isNumeric().withMessage('Invalid phone'),
    check('notes').notEmpty().isLength().withMessage('Invalid note')
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
        generatePetsValidators(),
        reporter
    ],
    update: [
        updatePetsValidators(),
        reporter
    ],
    id: [
        generateIdValidators(),
        reporter
    ]
}
