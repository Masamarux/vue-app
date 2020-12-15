<template>
    <view class="container">
        <text>Nome</text>
        <text-input
            :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
            v-model="usuario.nome"
        />

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

        <text>Celular</text>
        <text-input
            :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
            v-model="usuario.celular"
        />
        <text>Idade</text>
        <text-input
            :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
            v-model="usuario.idade"
        />
        <text>Sexo</text>
        <text-input
            :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
            v-model="usuario.sexo"
        />

        <button class="btn-login" title="Voltar" color="blue" @press="changeRoute"></button>
    </view>
</template>

<script>
import DadosService from "../services/Dados.service";

export default {
    async mounted() {
        const {usuario} = await DadosService.getDados();
        this.usuario = usuario;
    },
    data() {
        return {
        usuario: {
            nome: null,
            email: null,
            senha: null,
            celular: null,
            sexo: null,
            idade: null,
        },
        }
    },
    props: {
        navigation: { type: Object }
    },
    methods: {
        changeRoute() {
        this.navigation.goBack()
        },
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