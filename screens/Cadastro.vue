<template>
    <view class="container">
        <text class="title">Cadastro</text>
        <text class="subtitle">Informe seus dados</text>

        <text>Nome</text>
        <text-input class="input" v-model="usuario.nome"/>

        <text>Email</text>
        <text-input class="input" v-model="usuario.email"/>

        <text>Senha</text>
        <text-input class="input" v-model="usuario.senha"/>

        <text>Celular</text>
        <text-input class="input" v-model="usuario.celular"/>

        <button
        :on-press="cadastrarUsuario"
        title="Cadastrar"
        color="#008000"
        accessibility-label=""
        />
        <button class="btn-login" title="Fazer Login" color="blue" @press="gotoLogin"></button>
    </view>
</template>

<script>
import CadastroService from "../services/Cadastro.service";

export default {
    data() {
        return {
        usuario: {
            nome: null,
            email: null,
            senha: null,
            celular: null,
        },
        resp: null,
        }
    },
    props: {
        navigation: { type: Object }
    },
    methods: {
        gotoLogin() {
            this.navigation.navigate('Login');
        },
        async cadastrarUsuario() {
            this.resp = await CadastroService.postCadastro(this.usuario);
            console.log(resp);
            //this.exibirAlerta(resp.status);
        },
        exibirAlerta(resp) {
            if(resp == 200) {
                alert("O cadastro foi bem sucedido!");
            }else{
                alert("Ocorreu algum problema no cadastro.");
            }
        }
    }, 
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
.input {
  width: 98%;
  margin: 10px 10px;
  border-radius: 1px;
  padding: 10px;
  border-width: 1;
}
</style>