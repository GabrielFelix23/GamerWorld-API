const express = require('express')
const router = express.Router()

const controllerUser = require('../Controller/controllerUser')
const controllerPost = require('../Controller/controllerPost')
const middleware_api = require('../Middleware/middleware_user')

//User
router.post('/', middleware_api, controllerUser.create)
router.put('/update/:id', controllerUser.update)
router.get('/filter/:id', controllerUser.listID)
router.delete('/:id', controllerUser.delete)
router.get('/filter/all/:macaddress', controllerUser.list)

//Post
router.post('/post', controllerPost.create)
router.put('/post/:id', controllerPost.upload)
router.get('/post/list/:macaddress', controllerPost.list)

module.exports = router