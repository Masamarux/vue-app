<template>
    <view>
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