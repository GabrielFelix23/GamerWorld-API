const express = require('express')
const router = express.Router()

const controller = require('../Controller/controllerUser')
const middleware_api = require('../Middleware/middleware_user')

router.post('/', middleware_api, controller.create)
router.put('/update/:id', controller.update)
router.get('/filter/:id', controller.listID)
router.delete('/:id', controller.delete)

router.get('/filter/all/:macaddress', controller.list)

module.exports = router