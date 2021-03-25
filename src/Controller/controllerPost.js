const modelPost = require('../Model/modelPost')

class controllerPost{
    async create(req, res){
        const postUser = new modelPost(req.body)
        await postUser
        .save()
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }

    async upload(req, res){
        await modelPost.findByIdAndUpdate(
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
        await modelPost.find({
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
        await modelPost.findById(req.params.id)
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }

    async delete(req, res){
        await modelPost.deleteOne({"_id": req.params.id})
        .then((response) => {
            return res.status(200).json(response)
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
    }
}

module.exports = new controllerPost()