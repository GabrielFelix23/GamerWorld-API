const modelPost = require('../Model/modelPost')

const middlewarePost = async(req, res, next) => {
    const {macaddress, image, subtitle} = req.body

    if(!macaddress)
        return res.status(400).json({error: "Macaddress é obrigatório!"})
    if(!image)
        return res.status(400).json({error: "Imagem é obrigatório!"})
    if(!subtitle)
        return res.status(400).json({error: "Legenda é obrigatória!"})
    else{
        next()
    }
}

module.exports = middlewarePost