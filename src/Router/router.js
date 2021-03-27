const express = require('express')
const router = express.Router()

const controllerUser = require('../Controller/controllerUser')
const middleware_user = require('../Middleware/middleware_user')

router.post('/create/', middleware_user, controllerUser.create)
router.put('/update/:id', controllerUser.update)
router.get('/filter/:id', controllerUser.listID)
router.delete('/:id', controllerUser.delete)
router.get('/filter/all/:macaddress', controllerUser.list)

module.exports = router