const axios = require('axios');
const _ = require('lodash');//lodash não estava conseguindo reconhecer a variavel como nula ou não

export default class LoginService {
    static async postLogin(usuario){
        //console.log(_.isEmpty(usuario));
            const {status} = await axios.post('https://us-central1-uncisal.cloudfunctions.net/users-login', {
                usuario: {
                    email: usuario.email,
                    senha: usuario.senha,
                }
            })

            if(status === 200) {
                //console.log("entrou no if status true " + status);
                return true;
            } else {
                //console.log("entro no if status false " + status);
                return false;
            }
        // }else{
        //     return false;
        // }

    }
}