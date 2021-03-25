const modelUser = require('../Model/modelUser')

class ControllerUser{
    async create(req, res){
        const user = new modelUser(req.body)
        await user
            .save()
            .then((response) =>{
                return res.status(200).json(response)
            }).catch((error) => {
                return res.status(500).json(error)
            })
    }

    async update(req, res){
        await modelUser.findByIdAndUpdate(
            {"_id": req.params.id}, req.body, {new: true}
        )
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }

    async list(req, res){
        await modelUser.find({
            "macaddress": {"$in": req.params.macaddress}
        })
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }

    async listID(req, res){
        await modelUser.findById(req.params.id)
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }

    async delete(req, res){
        await modelUser.deleteOne({"_id": req.params.id})
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }
}

module.exports = new ControllerUser()