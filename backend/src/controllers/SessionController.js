const ong = require('../database/DAO/Ong')

function Session() {

    const create = async (request, response) => {
        const { id } = request.body

        const result = await ong.getById(id)
        if (!result)
            return response.status(400).json({ error:'No ONG found with this ID.' })
            
        return response.json(result.name)

    }

    return {
        create
    }

}

module.exports = Session()