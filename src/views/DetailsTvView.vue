<template>
  <div class="container-serie">
    <div class="container-close">
      <i class="fa-solid fa-xmark" @click="$router.push('/series')"></i>
    </div>
    <box-details :item="item" :keyVideo="keyVideo" />
  </div>
</template>

<script>
import config from "@/config/config";
import BoxDetails from "@/components/BoxDetails.vue";

export default {
  name: "DetailsTvView",
  data() {
    return {
      item: "",
      image: config.imageTmdb,
      keyVideo: "",
    };
  },
  components: {
    BoxDetails,
  },
  created() {
    fetch(
      `${config.apiTmdbUrl}tv/${this.$route.params.id}${config.apiTmdbKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        this.item = response;
      });

    fetch(
      `${config.apiTmdbUrl}tv/${this.$route.params.id}/videos${config.apiTmdbKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        let trailer = response.results[0];
        this.keyVideo = trailer.key;
      });
  },
};
</script>

<style scoped>
.container-serie {
  width: 100%;
  height: 100vh;
  background: #212130;
}

.container-close {
  width: 100%;
  text-align: right;
  font-size: 2rem;
  padding: 5px 25px;
  color: #fff;
  position: fixed;
}

.container-close i {
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .container-serie {
    height: 100%;
  }
}
</style>