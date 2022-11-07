<template>
  <div class="container-boxes">
    <div class="box">
      <img
        v-for="s in series"
        :key="s.id"
        :src="`${image}${s.poster_path}`"
        alt="poster-movie"
        :title="s.name"
        @click="$router.push({ name: 'details-serie', params: { id: s.id } })"
      />
    </div>
    <i
      id="switchLeft"
      class="fa-solid fa-chevron-left"
      @click="showMovieLeft"
    ></i>
    <i
      id="switchRight"
      class="fa-solid fa-chevron-right"
      @click="showMovieRight"
    ></i>
  </div>
</template>

<script>
import config from "@/config/config";

export default {
  name: "Series",
  props: {
    link: String,
    genre: String,
  },
  data() {
    return {
      series: "",
      image: config.imageTmdb,
      scrollPerClick: 275,
      scrollAmount: 0,
    };
  },
  created() {
    if (this.genre === "") {
      this.url = `${config.apiTmdbUrl}${this.link}${config.apiTmdbKey}&sort_by=popularity.desc&language=pt-BR`;
    } else {
      this.url = `${config.apiTmdbUrl}${this.link}${config.apiTmdbKey}&sort_by=popularity.desc&language=pt-BR${this.genre}`;
    }
    fetch(this.url)
      .then((response) => response.json())
      .then((response) => {
        this.series = response.results;
        console.log(this.series);
      });
  },
  methods: {
    showMovieLeft() {
      const movies = document.querySelector(".box");

      movies.scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });

      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },
    showMovieRight() {
      const movies = document.querySelector(".box");

      movies.scrollTo({
        top: 0,
        left: (this.scrollAmount += this.scrollPerClick),
        behavior: "smooth",
      });

      if (this.scrollAmount > 0) {
        document.getElementById("switchLeft").style.display = "flex";
      }
    },
  },
};
</script>

<style scoped>
.container-boxes {
  height: 280px;
  width: 93%;
  position: relative;
  display: flex;
}

.container-boxes .box {
  width: auto;
  overflow: scroll;
  text-align: center;
  padding-bottom: 10px !important;
  display: flex;
  align-items: center;
}

.container-boxes .box::-webkit-scrollbar {
  display: none;
}

.container-boxes .box img {
  min-width: 180px;
  max-width: 180px;
  height: auto;
  background-size: cover;
  margin-left: 15px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  z-index: 2;
  object-fit: cover;
  border: none;
  border-radius: 20px;
}

.container-boxes .box img:first-child {
  margin-left: 0;
}

.container-boxes .box img:hover {
  transform: scale(1.1);
  z-index: 5;
}

.container-boxes #switchLeft,
.container-boxes #switchRight {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3%;
  color: #fff;
  font-size: 1.7vw;
  top: 0;
  opacity: 0;
  z-index: 3;
}

.container-boxes #switchLeft {
  position: absolute;
  left: -40px;
  display: none;
}

.container-boxes #switchRight {
  position: absolute;
  right: -40px;
}

.container-boxes #switchLeft:hover,
.container-boxes #switchRight:hover {
  cursor: pointer;
  opacity: 1;
  background: rgba(33, 33, 48, 0.4);
}

@media screen and (max-width: 768px) {
  .container-boxes #switchLeft,
  .container-boxes #switchRight {
    display: none;
  }
}

</style>