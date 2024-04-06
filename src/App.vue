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
  h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 100%;
      color: #626c7f;
      flex: none;
      order: 1;
      flex-grow: 0;
  }

  span {
      font-style: normal;
      font-weight: 300;
      font-size: 64px;
      line-height: 100%;
      color: var(--dark-navy);
      flex: none;
      order: 0;
      flex-grow: 0;
  }

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
