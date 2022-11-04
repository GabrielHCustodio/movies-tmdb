<template>
  <div class="search">
    <header-app />
    <div class="container-input">
      <input
        type="text"
        name=""
        id="search"
        placeholder="Nome do filme ou série..."
        v-model="nameSearch"
        @keyup.enter="searchName"
      />
      <i class="fa-solid fa-magnifying-glass" @click="searchName()"></i>
    </div>
    <div class="container-result" v-if="this.nameSearch === ''">
      Digite o nome do filme...
    </div>
    <loader-request v-else-if="this.nameSearch !== '' && loader === true" />
    <div class="container-result" v-else>
      <div class="container-link">
        <router-link
          :to="{
            name: 'searchType',
            params: { type: 'movie' },
            query: { name: this.nameParams },
          }"
          >Resultado em filmes</router-link
        >
        <router-link
          :to="{
            name: 'searchType',
            params: { type: 'serie' },
            query: { name: this.nameParams },
          }"
          >Resultado em series</router-link
        >
      </div>

      <span
        ><router-view name="searchType" :movies="movies"></router-view
      ></span>
    </div>
  </div>
</template>

<script>
import config from "@/config/config"

import HeaderApp from "@/components/HeaderApp.vue";
import LoaderRequest from "@/components/LoaderRequest.vue";
import SearchResponse from "@/components/SearchResponse.vue";

export default {
  name: "SearchView",
  components: {
    HeaderApp,
    LoaderRequest,
    SearchResponse,
  },
  data() {
    return {
      nameParams: "",
      nameSearch: "",
      listResponse: "",
      loader: true,
      movies: [],
    };
  },
  methods: {
    searchName() {
      this.nameParams = this.nameSearch

      this.searchMovies()

      this.$router.push({
        name: "searchType",
        params: { type: "movie" },
        query: { name: this.nameParams },
      });
      this.loader = false;
    },
    searchMovies() {
      fetch(
        `${config.searchTmdb}${config.apiTmdbKey}&sort_by=popularity.desc&language=pt-BR&query=${this.nameParams}`
      )
        .then((response) => response.json())
        .then((response) => {
          this.movies = response.results;
        });
    }
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  min-height: 100vh;
  background: #212130;
}

.container-input {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 0 10px 0;
  color: #fff;
}

.container-input #search {
  width: 250px;
  height: 30px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 1rem;
  color: #fff;
}

.container-input i {
  padding-left: 10px;
  font-size: 1.2rem;
  cursor: pointer;
}

.container-result {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
  color: #fff;
  font-size: 1.1rem;
}

.container-link {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.container-link a {
  color: #fff;
  text-decoration: none;
}
</style>