<template>
  <div class="search">
    <header-app />
    <div class="container-input">
      <input
        type="text"
        name=""
        id="search"
        placeholder="Nome do filme..."
        v-model="nameSearch"
        @keyup.enter="searchName"
      />
      <i class="fa-solid fa-magnifying-glass" @click="searchName"></i>
    </div>
    <div class="container-result" v-if="this.nameSearch === ''">
      Nenhum nome pesquisado
    </div>
    <loader-request v-else-if="this.nameSearch !== '' && loader === true"/>
    <div class="container-result" v-else>
      <movie-search :response="listResponse"/>
    </div>
  </div>
</template>

<script>
import config from "@/config/config";
import HeaderApp from "@/components/HeaderApp.vue";
import MovieSearch from "@/components/MovieSearch.vue"
import LoaderRequest from '@/components/LoaderRequest.vue';

export default {
  name: "SearchView",
  components: {
    HeaderApp,
    MovieSearch,
    LoaderRequest
  },
  data() {
    return {
      nameSearch: "",
      listResponse: "",
      loader: true
    };
  },
  methods: {
    searchName() {
      fetch(
        `${config.apiTmdbUrl}/search/movie${config.apiTmdbKey}&sort_by=popularity.desc&language=pt-BR&query=${this.nameSearch}`
      )
        .then((response) => response.json())
        .then((response) => {
          this.listResponse = response.results

          this.loader = !this.loader
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
  padding: 20px 0;
  color: #fff;
  font-size: 1.1rem;
}
</style>