const express = require('express')
const router = express.Router()
const ctrl = require('../controller/snacks')

router.get('/snacks', ctrl.getAll)
router.get('/snacks/:id', ctrl.getOne)
router.post('/snacks', ctrl.addSnack)
router.put('/snacks/:id', ctrl.updateSnack)
router.delete('/snacks/:id', ctrl.deleteSnack)

module.exports = router
