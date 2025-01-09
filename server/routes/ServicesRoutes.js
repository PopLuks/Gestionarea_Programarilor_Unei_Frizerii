const express = require('express');
const { registerUser } = require('./../controllers/ServicesController');
const{loginUser} = require('./../controllers/ServicesController');
const { registerAppointment } = require('./../controllers/ServicesController');
const { getAppointments } = require('./../controllers/ServicesController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/appointments', registerAppointment);
router.get('/appointments', getAppointments);


module.exports = router;
