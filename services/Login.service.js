const axios = require('axios');

export default class CadastroService {
    static async postLogin(usuario){
        const {status} = await axios.post('https://us-central1-uncisal.cloudfunctions.net/users-login', {
            usuario: {
                email: usuario.email,
                senha: usuario.senha,
            }
        })

        if(status === 200) {
            console.log("entrou no if status true " + status);
            return true;
        } else {
            console.log("entro no if status false " + status);
            return false;
        }

    }
}