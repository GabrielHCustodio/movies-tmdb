<template>
  <div>
    <header-app />
    <div class="container-list-movies">
      <p class="group-movies">Descobertas do momento</p>
      <movies :link="`discover/movie`" :id="0"/>
      <p class="group-movies">Top melhores filmes avaliados</p>
      <movies :link="`movie/top_rated`" :id="1"/>
      <p class="group-movies">Romance</p>
      <movies :link="`discover/movie`" :genre="`&with_genres=10749`" :id="2"/>
      <p class="group-movies">Aventura</p>
      <movies :link="`discover/movie`" :genre="`&with_genres=12`" :id="3"/>
      <p class="group-movies">Animação</p>
      <movies :link="`discover/movie`" :genre="`&with_genres=16`" :id="4"/>
      <p class="group-movies">Comédia</p>
      <movies :link="`discover/movie`" :genre="`&with_genres=35`" :id="5"/>
      <p class="group-movies">Família</p>
      <movies :link="`discover/movie`" :genre="`&with_genres=10751`" :id="6"/>
      <p class="group-movies">Ficção científica</p>
      <movies :link="`discover/movie`" :genre="`&with_genres=878`" :id="7"/>
      <p class="group-movies">Mistério</p>
      <movies :link="`discover/movie`" :genre="`&with_genres=9648`" :id="8"/>
      <p class="group-movies">Terror</p>
      <movies :link="`discover/movie`" :genre="`&with_genres=27`" :id="9"/>
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
  font-size: 18px;
  line-height: 1.25vw;
  font-weight: bolder;
  padding: 2.5% 0 15px 3.5%;
}

.group-movies:first-child {
  padding: 90px 0 15px 3.5%;
}
</style>