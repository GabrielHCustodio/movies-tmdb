<template>
  <div class="container-serie">
    <div class="container-close">
      <i class="fa-solid fa-xmark" @click="$router.push('/series')"></i>
    </div>
    <div class="box-serie">
      <div class="serie-img">
        <img :src="`${image}${serie.backdrop_path}`" />
      </div>
      <div class="serie-details">
        <h1 id="title">{{ serie.name }}</h1>
        <h4 id="sinopse"><b>Sinopse: </b><span>{{ serie.overview }}</span></h4>
      </div>

      <div v-if="this.key !== '' " class="serie-trailer">
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/${key}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/config";

export default {
  name: "DetailsSeries",
  data() {
    return {
      serie: "",
      image: config.imageTmdb,
      key: "",
    };
  },
  created() {
    fetch(
      `${config.apiTmdbUrl}tv/${this.$route.params.id}${config.apiTmdbKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        this.serie = response;
      });

    fetch(
      `${config.apiTmdbUrl}tv/${this.$route.params.id}/videos${config.apiTmdbKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((response) => {
        let trailer = response.results[0];
        this.key = trailer.key
      });
  },
};
</script>

<style scoped>
.container-serie {
  width: 100%;
  height: 100vh;
}

.container-close {
  width: 100%;
  text-align: right;
  font-size: 2rem;
  padding: 5px 20px;
  color: #fff;
  position: absolute;
  z-index: 10;
}

.container-close i {
  cursor: pointer;
}

.box-serie {
  width: 100%;
  height: 99vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.box-serie img {
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
}

.serie-img {
  position: relative;
  width: 100%;
  background: #000000;
}

.serie-details {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  height: 85vh;
  left: 0px;
  padding: 40px;
  color: #fff;
}

.serie-details #title {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.serie-details #sinopse {
  font-weight: normal;
}

.serie-details #sinopse {
  font-size: 1.2rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.serie-details #sinopse b {
  margin-bottom: 5px;
}

</style>