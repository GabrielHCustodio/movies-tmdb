<template>
  <div>
    <header-app />
  </div>
</template>

<script>
import config from "@/config/config";
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderApp,
  },
  created() {
    fetch(`${config.apiTmdbUrl}${config.apiTmdbKey}&language=pt-BR`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<style scoped>
</style>