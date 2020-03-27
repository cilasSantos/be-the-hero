const incidentController = require('../database/DAO/Incident')

function Profile(params) {

    const list = async (request, response) => {
        const { page = 1 } = request.query
        const ong_id = request.headers.authorization

        const object = await incidentController.listByOngId(ong_id, page)

        response.json(object.incidents)

    }

    return {
        list
    }

}

module.exports = Profile()