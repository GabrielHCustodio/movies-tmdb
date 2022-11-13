<template>
  <div class="container-boxes">
    <div class="box">
      <img
        v-for="l in list"
        :key="l.id"
        :src="`${image}${l.poster_path}`"
        alt="poster"
        :title="l.title"
        @click="push(l.id)"
        v-show="l.poster_path !== null"
      />
      </div>
  </div>
</template>

<script>
import config from "@/config/config";

export default {
  name: "SearchResponse",
  data() {
    return {
      image: config.imageTmdb
    };
  },
  props: {
    list: Array,
    type: String
  },
  methods: {
    push(id) {
      this.$router.push({ name: `details-${this.type}`, params: { id: id } })
    }
  }
};
</script>

<style scoped>
.container-boxes {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-boxes .box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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