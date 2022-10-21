<template>
  <div class="container-movie">
    <div class="container-close">
      <i class="fa-solid fa-xmark" @click="$router.push('/')"></i>
    </div>
    <div class="box-movie">
      <div class="movie-img">
        <img :src="`${image}${movie.poster_path}`" />
      </div>
      <div class="movie-details">
        <h1 id="title">{{movie.title}}</h1>
        <h4 id="sinopse">{{movie.overview}}</h4>
        <p id="runtime"><b>Duração do filme: </b>{{movie.runtime}} minutos</p>
        <p id="company"><b>Companhia: </b>{{movie.production_companies[0].name}}</p>
        <p v-if="movie.revenue > 0" id="revenue"><b>Receita: </b>{{movie.revenue}}</p>
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
    };
  },
  created() {
    fetch(
      `${config.apiTmdbUrl}movie/${this.$route.params.id}${config.apiTmdbKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        this.movie = response;
        console.log(this.movie);
      });
  },
};
</script>

<style scoped>
.container-movie {
  width: 100%;
  height: 100vh;
  background: #212130;
}

.container-close {
  width: 100%;
  text-align: right;
  font-size: 2rem;
  padding:5px 20px;
  color: #fff;
}

.container-close i {
  cursor: pointer;
}

.box-movie {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.box-movie img{
  height: 85vh;
}

.movie-img {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 45%;
  height: 85vh;
  padding: 40px;
  color: #fff;
}

.movie-details #title {
  font-size: 3rem;
  margin-bottom: 20px;
}

.movie-details #sinopse {
  font-weight: normal;
}

.movie-details #sinopse,
.movie-details #runtime,
.movie-details #company,
.movie-details #revenue {
  font-size: 1.1rem;
  margin-bottom: 20px;
}
</style>