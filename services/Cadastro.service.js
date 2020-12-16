const axios = require('axios');
const _ = require('lodash');

export default class CadastroService {
    static async postCadastro(usuario){
        if(_.isEmpty(usuario)){
            const {status} = await axios.post('https://us-central1-uncisal.cloudfunctions.net/users-create', {
                usuario: {
                    nome: usuario.nome,
                    celular: usuario.celular,
                    email: usuario.email,
                    senha: usuario.senha,
                }
            })
    
            if(status === 200) {
                //console.log("entro no if status true" + status);
                return true;
            } else {
                //console.log("entro no if status false" + status);
                return false;
            }
        }else{
            return false;
        }
    }
}