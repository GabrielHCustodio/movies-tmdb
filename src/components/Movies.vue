<template>
  <div class="container-list-movies">
    <p class="group-movies">Top 20 melhores avaliados</p>
    <div class="container-boxes">
      <div class="box" >
        <img
          v-for="m in movies"
          :key="m.id"
          :src="`${image}${m.backdrop_path}`"
          alt=""
          :title="m.title"
          @click="$router.push({name: 'details', params: {id: m.id} })"
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
      scrollPerClick: 275,
      scrollAmount: 0,
    };
  },
  created() {
    fetch(
      //`${config.apiTmdbUrl}movie/top_rated${config.apiTmdbKey}&language=pt-BR`
      `${config.apiTmdbUrl}discover/movie${config.apiTmdbKey}&sort_by=popularity.desc&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        this.movies = response.results;

        this.movies.sort((a,b) => {
          if(b.title < a.title) {
            return 1
          }else if(b.title > a.title) {
            return -1
          }
          return 0
        })
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
        document.getElementById('switchLeft').style.display = 'flex'
      }
    }
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
  padding: 90px 0 20px 10px;
}

.container-boxes {
  height: 180px;
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
  min-width: 260px;
  max-width: 260px;
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
  background: blue;
  top: 0;
  opacity: 0;
  z-index: 3;
}

.container-boxes #switchLeft {
  position: absolute;
  left: -50px;
  display: none;
}

.container-boxes #switchRight {
  position: absolute;
  right: -50px;
}

.container-boxes #switchLeft:hover,
.container-boxes #switchRight:hover {
  cursor: pointer;
  opacity: 1;
  background: rgba(33, 33, 48, 0.4);
}
</style> 