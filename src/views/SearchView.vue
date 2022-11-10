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
      <select id="options" v-model="type" @change="searchName" required>
        <option value="" selected>Selecione</option>
        <option value="movie">Filme</option>
        <option value="tv">Série</option>
      </select>
      <i
        id="glass"
        class="fa-solid fa-magnifying-glass"
        @click="searchName"
      ></i>
    </div>
    <div class="container-result" v-if="this.nameSearch === ''">
      Digite o nome do filme...
    </div>
    <loader-request v-else-if="this.nameSearch !== '' && loader === true" />
    <div class="container-result" v-else>
      <span
        ><router-view name="searchType" :list="list" :type="type"></router-view
      ></span>
    </div>
  </div>
</template>

<script>
import config from "@/config/config";

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
      loader: true,
      list: [],
      type: "",
    };
  },
  methods: {
    searchName() {
      this.nameParams = this.nameSearch;

      this.searchMovies();

      this.$router.push({
        name: "searchType",
        query: { name: this.nameParams },
      });
      this.loader = false;
    },
    searchMovies() {
      fetch(
        `${config.searchTmdb}${this.type}${config.apiTmdbKey}&sort_by=popularity.desc&language=pt-BR&query=${this.nameParams}`
      )
        .then((response) => response.json())
        .then((response) => {
          this.list = response.results;
        });
    },
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
  color: rgba(255, 255, 255, 0.8);
}

.container-input #options {
  width: 100px;
  height: 30px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  border: none;
  outline: none;
  padding-left: 5px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 10px;
}

.container-input #glass {
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

@media screen and (max-width: 768px) {
  .container-input {
    flex-wrap: wrap;
  }

  #glass {
    display: none;
  }
}
</style>