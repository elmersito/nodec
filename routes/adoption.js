const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidator = require("../validations/adoptionValidator");
router.get('/adoption', adoptionValidator.id, adoptionsController.getAdoption);
router.get('/adoptions', adoptionsController.getAdoptions);
router.post('/adoption', adoptionValidator.add, adoptionsController.postAdoption);
router.post('/login', adoptionValidator.id, adoptionsController.getLogin);
router.put('/adoption', adoptionValidator.update, adoptionsController.putAdoption);
router.delete('/adoption', adoptionValidator.id, adoptionsController.deleteAdoption);
router.get('/adoptionUser', adoptionValidator.id, adoptionsController.getAdoptionByUser);

module.exports = router;
