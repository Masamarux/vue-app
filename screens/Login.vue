<template>
    <view class="container">
        <text>Email</text>
        <text-input
            :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
            v-model="usuario.email"
        />

        <text>Senha</text>
        <text-input
            :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
            v-model="usuario.senha"
        />
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
        fazerLogin() {
            LoginService.postLogin(this.usuario);
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
</style>