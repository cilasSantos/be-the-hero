const inicident = require('../database/DAO/Incident')

function Incident() {
    
    const list = async (request, response) =>{
        const { page = 1 } = request.query

        const object = await inicident.list(page)

        response.header('x-Total-Count', object.count['count(*)'])
        response.json(object.incidents)
    }

    const insert = async (request, response) =>{
        const {title, description, value}  = request.body
        const ong_id = request.headers.authorization

        const id = await inicident.insert({title, ong_id, description, value})
        return response.json({ id })
    }

    const detele = async (request, response) =>{
        const { id } =  request.params
        const ong_id = request.headers.authorization
      
        const ong = await inicident.getById(id)
       
        if(ong.ong_id != ong_id)
            return response.status(401).json({error: 'operation not permitted'})

        await inicident.del(id)
        return response.status(204).send()
    }

    return {
        insert,
        list,
        detele
    }
}

module.exports = Incident()