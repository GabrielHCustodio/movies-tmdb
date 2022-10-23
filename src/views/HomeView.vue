<template>
  <div>
    <header-app />
    <movies />
  </div>
</template>

<script>
import Movies from "@/components/Movies.vue"
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderApp,
    Movies
  }
};
</script>