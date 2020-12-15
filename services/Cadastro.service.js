const axios = require('axios');

export default class CadastroService {
    static async postCadastro(usuario){
        let resp = null;
        axios.post('https://us-central1-uncisal.cloudfunctions.net/users-create', {
            usuario: {
                nome: usuario.nome,
                celular: usuario.celular,
                email: usuario.email,
                senha: usuario.senha,
            }
        })
        .then(function (response) {

            resp = response.status;
        })
        .catch(function (error) {

            resp = response.status;
        });

        return resp;
    }
}