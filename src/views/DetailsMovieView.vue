<template>
  <div class="container-movie">
    <div class="container-close">
      <i class="fa-solid fa-xmark" @click="$router.push('/')"></i>
    </div>
    <div class="box-movie-trailer" v-if="this.key !== ''">
      <div class="movie-img">
        <img :src="`${image}${movie.backdrop_path}`" />
      </div>
      <div class="movie-details">
        <h1 id="title">{{ movie.title }}</h1>
        <h4 id="sinopse">
          <b>Sinopse: </b><span>{{ movie.overview }}</span>
        </h4>
        <p id="runtime">
          <b>Duração do filme: </b><span>{{ movie.runtime }} minutos</span>
        </p>
      </div>

      <div class="movie-trailer">
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

    <div class="box-movie" v-else>
      <div class="movie-img">
        <img id="backdrop" :src="`${image}${movie.backdrop_path}`" />
      </div>
      <div class="movie-details">
        <h1 id="title">{{ movie.title }}</h1>
        <h4 id="sinopse">
          <b>Sinopse: </b><span>{{ movie.overview }}</span>
        </h4>
        <p id="runtime">
          <b>Duração do filme: </b><span>{{ movie.runtime }} minutos</span>
        </p>
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
        this.key = trailer.key;
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

/* There is trailer */
.box-movie-trailer {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.box-movie-trailer img {
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

.box-movie-trailer .movie-img {
  position: relative;
  width: 100%;
  background: #000000;
}

.box-movie-trailer .movie-details {
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

.box-movie-trailer .movie-details #title {
  font-size: 4rem;
  margin-bottom: 20px;
}

.box-movie-trailer .movie-details #sinopse {
  font-weight: normal;
}

.box-movie-trailer .movie-details #sinopse,
.box-movie-trailer .movie-details #runtime {
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.box-movie-trailer .movie-details #sinopse b,
.box-movie-trailer .movie-details #runtime b {
  margin-bottom: 5px;
}

.movie-trailer {
  position: absolute;
  right: 80px;
}

/* There is no trailer */
.box-movie {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99vh;
}

.box-movie .movie-img {
  position: relative;
  width: 100%;
  background: #000000;
}

.box-movie #backdrop {
  width: 100%;
  height: 100vh;
  opacity: 0.4;
}

.box-movie .movie-details {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  height: 85vh;
  padding: 40px;
  color: #fff;
}

.box-movie .movie-details #title {
  font-size: 4rem;
  margin-bottom: 20px;
}

.box-movie .movie-details #sinopse {
  font-weight: normal;
}

.box-movie .movie-details #sinopse,
.box-movie .movie-details #runtime {
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.box-movie .movie-details #sinopse b,
.box-movie .movie-details #runtime b {
  margin-bottom: 5px;
}

@media screen and (max-width: 600px) {
  .box-movie {
    height: 100%;
  }

  .box-movie .movie-img {
    position: relative;
    width: 100%;
    height: 170%;
    background: #212130;
  }

  .box-movie #backdrop {
    display: none;
  }

  .box-movie .movie-details {
    position: absolute;
    margin-top: 200px;
  }
}

@media screen and (max-width: 415px) {
  .box-movie .movie-img {
    height: 120%;
  }

  .box-movie .movie-details {
    margin-top: 100px;
  }
}
</style>