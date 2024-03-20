@import "tailwindcss/base"; @import "tailwindcss/components"; @import
"tailwindcss/utilities";

<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent
  }
};
</script>

<style></style>
