const connection = require('../connection')

function Incident() {

    const list = async (page) => {
        const [count] = await connection('incidents').count()
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id','=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city',
                'ongs.uf'
            ])
        return {
            count,
            incidents
        }
    }

    const insert = async (incident) => {
        const [id] = await connection('incidents').insert(incident)
        return id
    }
    const del = async (id) => {
        await connection('incidents').where('id', id).delete()
    }

    const getById = async (id) => {
        const ong_id = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        return ong_id
    }

    const listByOngId = async (ong_id, page) => {

        const [count] = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*').count()

        const incidents = await connection('incidents')
            .limit(5)
            .offset((page - 1) * 5)
            .where('ong_id', ong_id)
            .select('*')

        return {
            count,
            incidents
        }
    }

    return {
        insert,
        list,
        del,
        getById,
        listByOngId
    }
}

module.exports = Incident()