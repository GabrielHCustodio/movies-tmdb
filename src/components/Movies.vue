<template>
  <div class="container-list-movies">
    <p class="group-movies">Top 20 hoje</p>
    <div class="container-boxes">
      <div id="box" class="box" v-for="m in movies" :key="m.id">
        <img :src="`${image}${m.backdrop_path}`" alt="" :title="m.title" />
      </div>
      <i class="fa-solid fa-chevron-right" @click="next"></i>
    </div>
  </div>
</template>

<script>
import config from "@/config/config";
export default {
  name: "Movies",
  data() {
    return {
      movies: "",
      image: config.imageTmdb,
      box: 0
    };
  },
  created() {
    fetch(
      `${config.apiTmdbUrl}movie/top_rated?${config.apiTmdbKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        this.movies = response.results;
      });
  },
  methods: {
    next() {
      console.log('Clique reconhecido')
    }
  }
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
  padding: 90px 0 20px 10px;
}

.container-boxes {
  width: 100%;
  overflow: hidden;
  display: flex;
  padding-left: 50px;
  position: relative;
}

.box {
  display: flex;
  transition: transform 0.5 ease-in-out;
  transform: translateX(0);
  cursor: pointer;
}

.box img {
  object-fit: cover;
  border: none;
  border-radius: 20px;
  width: 260px;
  margin-left: 8px;
}

.container-boxes i {
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.7vw;
  z-index: 10;
  width: 40px;
  margin-left: calc(100% - 110px);
  opacity: 0;
}

.container-boxes i:hover {
  cursor: pointer;
  width: 40px;
  opacity: 1;
  background: rgba(33, 33, 48, 0.4);
}
</style> 