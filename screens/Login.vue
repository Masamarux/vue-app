<template>
    <view class="container">
        <text>Email</text>
        <text-input class="input" v-model="usuario.email"/>

        <text>Senha</text>
        <text-input class="input" v-model="usuario.senha"/>
        <button class="btn-login" title="Esqueci minha senha" color="blue" @press="gotoRecuperacao"></button>
        <button
            :on-press="fazerLogin"
            title="Logar"
            color="#0000FF"
            accessibility-label=""
        />
    </view>
</template>

<script>
import LoginService from "../services/Login.service";

export default {
    data() {
        return {
            usuario: {
                email: null,
                senha: null,
            }
        }
    },
    props: {
        navigation: { type: Object }
    },
    methods: {
        gotoRecuperacao() {
            this.navigation.navigate('RecuperacaoSenha');
        },
        gotoPainel() {
            this.navigation.navigate('Painel');
        },
        async fazerLogin() {
            let resp = await LoginService.postLogin(this.usuario);
            this.verificarLogin(resp);
        },
        verificarLogin(resp) {
            if(resp == true) {
                this.gotoPainel();

            }else{
                alert("Ocorreu algum problema no login, corrija o email ou/e senha.");
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