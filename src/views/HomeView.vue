<template>
  <div>
    <header-app />
    <div class="container-list-movies">
      <p class="group-movies">Top 20 melhores avaliados</p>
      <movies :link="`discover/movie`" />
      <p class="group-movies">Melhores ranqueados</p>
      <movies :link="`movie/top_rated`" />
    </div>
  </div>
</template>

<script>
import Movies from "@/components/Movies.vue";
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderApp,
    Movies,
  },
};
</script>

<style scoped>
.container-list-movies {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: #212130;
  padding-bottom: 20px;
}

.group-movies {
  width: 100%;
  color: #fff;
  margin-left: 50px;
  font-size: 1.4vw;
  line-height: 1.25vw;
  font-weight: bolder;
  padding: 20px 0 10px 0;
}

.group-movies:first-child {
  padding: 90px 0 10px 0;
}
</style>