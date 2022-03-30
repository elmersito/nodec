const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidator = require("../validations/adoptionValidator");
router.get('/adoption', adoptionsController.getAdoption);
router.get('/adoptions', adoptionsController.getAdoptions);
router.post('/adoption', adoptionValidator.add ,adoptionsController.postAdoption);
router.put('/adoption' , adoptionValidator.update ,adoptionsController.putAdoption);
router.delete('/adoption', adoptionValidator.id,adoptionsController.deleteAdoption);
router.get('/adoptionUser', adoptionsController.getAdoptionByUser);

module.exports = router;
