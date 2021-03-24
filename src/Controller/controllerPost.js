const modelPost = require('../Model/modelPost')

class controllerPost{
    async create(req, res){
        const post = new modelPost(req.body)
        await post.save()
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
}

module.exports = new controllerPost()