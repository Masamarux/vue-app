const axios = require('axios');

export default class CadastroService {
    static async postLogin(usuario){
        //let resp = null;
        axios.post('https://us-central1-uncisal.cloudfunctions.net/users-login', {
            usuario: {
                email: usuario.email,
                senha: usuario.senha,
            }
        })
        .then(function (response) {
            console.log(response);
            //resp = response.status;
        })
        .catch(function (error) {
            console.log(error);
            //resp = error.status;
        });

        //return resp;
    }
}