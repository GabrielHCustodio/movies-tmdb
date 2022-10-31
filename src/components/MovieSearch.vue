<template>
  <div class="container-boxes">
    <div class="box">
      <img
        v-for="r in response"
        :key="r.id"
        :src="`${image}${r.poster_path}`"
        alt="poster-movie"
        :title="r.name"
        @click="$router.push({ name: 'details-movie', params: { id: r.id } })"
      />
    </div>
  </div>
</template>

<script>
import config from "@/config/config";

export default {
  name: "SerieSearch",
  props: {
    response: Object,
  },
  data() {
    return {
      image: config.imageTmdb,
    };
  },
};
</script>

<style scoped>
.container-boxes {
  height: 100%;
  width: 95%;
  position: relative;
  display: flex;
}

.container-boxes .box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.container-boxes .box img {
  min-width: 180px;
  max-width: 180px;
  height: 280px;
  background-size: cover;
  margin: 15px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  z-index: 2;
  object-fit: cover;
  border: none;
  border-radius: 20px;
}

.container-boxes .box img:hover {
  transform: scale(1.1);
  z-index: 5;
}
</style>