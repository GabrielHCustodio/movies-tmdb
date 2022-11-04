<template>
  <div class="container-boxes">
    <div class="box">
      <img
        v-for="m in movies"
        :key="m.id"
        :src="`${image}${m.poster_path}`"
        alt="poster-movie"
        :title="m.title"
        @click="$router.push({ name: 'details-movie', params: { id: m.id } })"
      />
    </div>
  </div>
</template>

<script>
import config from "@/config/config";

export default {
  name: "SearchResponse",
  data() {
    return {
      movies: '',
      type: true,
      image: config.imageTmdb,
      params: this.$route.params.type,
      query: this.$route.query.name,
    };
  },
  created() {
    fetch(
      `${config.searchTmdb}${config.apiTmdbKey}&sort_by=popularity.desc&language=pt-BR&query=${this.query}`
    )
      .then((response) => response.json())
      .then((response) => {
        this.movies = response.results
        console.log(this.movies)
      });
  }
};
</script>

<style scoped>
.container-boxes {
  height: 100%;
  width: 95%;
  position: relative;
  display: flex;
}

.container-boxes .box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.container-boxes .box img {
  min-width: 180px;
  max-width: 180px;
  height: 280px;
  background-size: cover;
  margin: 15px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  z-index: 2;
  object-fit: cover;
  border: none;
  border-radius: 20px;
}

.container-boxes .box img:hover {
  transform: scale(1.1);
  z-index: 5;
}
</style>