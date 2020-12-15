<template>
    <view class="container">
        <text>Seja bem vindo usuário!</text>

        <button class="btn-dados" title="Mostrar Dados" color="blue" @press="changeRoute"></button>
    </view>
</template>

<script>
export default {
    props: {
        navigation: { type: Object }
    },
    methods: {
        changeRoute() {
        this.navigation.navigate('Dados');
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