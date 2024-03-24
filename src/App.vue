<template>
  <div>
    <header-component />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
export default {
    name: "App",
    components: { HeaderComponent },
};
</script>

<style>
* {
  background-color: var(--background);
}
:root {
    --dark-navy: #313e51;
    --box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
    --background: #F4F6FA;
}
#app {
    font-family: 'Rubik', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 48px;
    margin: auto;
}

.page-container {
  min-width: 75%;
  display: flex;
  justify-content: center;
  padding: 75px;
}

</style>
