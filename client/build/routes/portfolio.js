const express = require('express')
const { sendEmailControllers } = require('../controllers/portfolioControllers')


//router object

const router = express.Router()
router.post('/sendEmail', sendEmailControllers)


module.exports = router