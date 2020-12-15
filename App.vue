<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import CadastroScreen from "./screens/Cadastro.vue";
import DadosScreen from "./screens/Dados.vue";
import LoginScreen from "./screens/Login.vue";
import PainelScreen from "./screens/Painel.vue";
import RecuperacaoSenhaScreen from "./screens/RecuperacaoSenha.vue";

const StackNavigator = createStackNavigator(
  {
    Cadastro: CadastroScreen,
    Dados: DadosScreen,
    Login: LoginScreen,
    Painel: PainelScreen,
    RecuperacaoSenha: RecuperacaoSenhaScreen,
  },
  {
    initialRouteName: 'Cadastro',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>