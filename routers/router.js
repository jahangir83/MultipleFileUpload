
const express = require('express')
const router = express.Router()

const EmployerControler = require('../controlers/controler')
const  upload = require('../middlewer/upload')



router.get('/all', EmployerControler.index)
router.post('/show', EmployerControler.show)
router.post('/update', EmployerControler.update)
router.post('/remove', EmployerControler.remove)
/*
//the sigle file upload router
router.post('/store', upload.single('avatar'),EmployerControler.store)
*/

// this mutiple file upload router
router.post('/store', upload.array('avatar[]'),EmployerControler.store)
module.exports = router