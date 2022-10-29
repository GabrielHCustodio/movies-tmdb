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
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  name: "SearchView",
  components: {
    HeaderApp,
  },
  data() {
    return {
      nameSearch: "",
    };
  },
  methods: {
    searchName() {
        console.log(this.nameSearch)
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100vh;
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
</style>