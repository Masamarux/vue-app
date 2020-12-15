<template>
    <view class="container">
      <text>Página de Recuperação de Senha</text>

      <text>Email</text>
      <text-input
          :style="{height: 40, width: 500, borderColor: 'gray', borderWidth: 1}"
          v-model="email"
      />
      <button class="btn-recuperar" title="Recuperar" color="black"></button>
      <button class="btn-voltar" title="Voltar" color="blue" @press="changeRoute"></button>
    </view>
</template>

<script>
export default {
    data(){
      return {
        email: null,
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