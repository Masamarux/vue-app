<template>
    <view>
        <text>Email</text>
        <text-input
            :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
            v-model="loginEmail"
        />

        <text>Senha</text>
        <text-input
            :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
            v-model="loginSenha"
        />

        <text id="a">Esqueci minha senha</text>
        <button
            :on-press="loginUsuario"
            title="Logar"
            color="#0000FF"
            accessibility-label=""
        />
    </view>
</template>

<script>
export default {
    props: {
        navigation: { type: Object }
    },
    methods: {
        changeRoute() {
        this.navigation.navigate('');
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