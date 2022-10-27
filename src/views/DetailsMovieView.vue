<template>
  <div class="container-movie">
    <div class="container-close">
      <i class="fa-solid fa-xmark" @click="$router.push('/')"></i>
    </div>
    <div class="box-movie">
      <div class="movie-img">
        <img :src="`${image}${movie.backdrop_path}`" />
      </div>
      <div class="movie-details">
        <h1 id="title">{{ movie.title }}</h1>
        <h4 id="sinopse"><b>Sinopse: </b><span>{{ movie.overview }}</span></h4>
        <p id="runtime"><b>Duração do filme: </b><span>{{ movie.runtime }} minutos</span></p>
      </div>

      <div v-if="this.key !== '' " class="movie-trailer">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${key}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/config";

export default {
  name: "DetailsMovie",
  data() {
    return {
      movie: "",
      image: config.imageTmdb,
      key: "",
    };
  },
  created() {
    fetch(
      `${config.apiTmdbUrl}movie/${this.$route.params.id}${config.apiTmdbKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        this.movie = response;
      });

    fetch(
      `${config.apiTmdbUrl}movie/${this.$route.params.id}/videos${config.apiTmdbKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        let trailer = response.results[0];
        this.key = trailer.key
      });
  },
};
</script>

<style scoped>
.container-movie {
  width: 100%;
  height: 100vh;
}

.container-close {
  width: 100%;
  text-align: right;
  font-size: 2rem;
  padding: 5px 20px;
  color: #fff;
  position: absolute;
  z-index: 10;
}

.container-close i {
  cursor: pointer;
}

.box-movie {
  width: 100%;
  height: 99vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.box-movie img {
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
}

.movie-img {
  position: relative;
  width: 100%;
  background: #000000;
}

.movie-details {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  height: 85vh;
  left: 0px;
  padding: 40px;
  color: #fff;
}

.movie-details #title {
  font-size: 4rem;
  margin-bottom: 20px;
}

.movie-details #sinopse {
  font-weight: normal;
}

.movie-details #sinopse,
.movie-details #runtime {
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.movie-details #sinopse b,
.movie-details #runtime b{
  margin-bottom: 5px;
}

.movie-trailer {
  position: absolute;
  right: 80px;
}
</style>