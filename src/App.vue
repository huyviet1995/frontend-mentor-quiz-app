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
    --red: #FF5C5C;
    --green: #26D782;
    --dark-navy: #313e51;
    --box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
    --background: #F4F6FA;
    --grey-navy: #626C7F;
    --purple: #A729F5;
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

@media screen and (max-width: 768px) {
  #app {
      padding: 0px;
  }
  .page-container {
      gap: 32px;
      padding-top: 32px;
      padding-left: 24px;
      padding-right: 24px;
  }
}

</style>
