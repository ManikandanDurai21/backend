const express = require('express')
const { signup } = require('../Controller/User.controller')


const router = express.Router()///express use pannum pothu methods crrt ha poodanum..get,put,post delete

router.post('/User/signup',signup)
module.exports=signup