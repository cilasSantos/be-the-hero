const crypto = require('crypto')
const ong = require('../database/DAO/Ong')

function OngController(){

    const list = async (request, response) => {
        const ongs = await ong.list()
        response.json(ongs)
    }

    const insert = async (request, response) => {
        const {name, email, whatsapp, city, uf} = request.body
    
        const id = crypto.randomBytes(4).toString('HEX')
        await ong.insert({id, name, email, whatsapp, city, uf})
        
        return response.json({ id })
    }

    return{
        list,
        insert
    }
}

module.exports = OngController()