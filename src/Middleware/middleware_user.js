const modelUser = require('../Model/modelUser')

const validationUser = async(req, res, next) => {
    const{macaddress, name, surname, nickname, age} = req.body

    if(!macaddress)
        return res.status(400).json({error: "Macaddress é obrigatório!"})
    
    if(!name)
        return res.status(400).json({error: "Nome é obrigatório!"})

    if(!surname)
        return res.status(400).json({error: "Idade é obrigatório!"})

    if(!nickname)
        return res.status(400).json({error: "Nickname é obrigatorio!"})

    if(!age)
        return res.status(400).json({error: "Idade é obrigatório!"})
    
    if(age < 16)
        return res.status(400).json({error: "Idade não pode ser menor que 16 anos!"})
    
    else{
        let exists

        exists = await modelUser.findOne({
            'nickname': {"$eq": nickname}
        })

        if(exists){
            return res.status(400).json({error: "Já existe nickname!"})
        }
        next()
    }
}

module.exports = validationUser