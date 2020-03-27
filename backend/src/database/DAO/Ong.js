const connection = require('../connection')
function Ong() {

    const list = async () => {
        const listongs = await connection('ongs').select('*')
        return listongs
    }

    const insert = async (ong) => {
        await connection('ongs').insert(ong)
    }

    const getById = async (id) => {
        const ong = await connection('ongs')
            .where('id', id)
            .select('*')
            .first()
        
        return ong
    }
    return {
        insert,
        list,
        getById
    }
}

module.exports = Ong()