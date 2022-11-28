<template>
  <div class="box-details">
    <div class="container-details">
      <h1 id="title" v-if="item.title">{{ item.title }}</h1>
      <h1 id="title" v-else>{{ item.name }}</h1>
      <h4 id="sinopse" v-if="item.overview">
        <b>Sinopse: </b><span>{{ item.overview }}</span>
      </h4>
      <p id="runtime" v-if="item.runtime">
        <b>Duração do filme: </b><span>{{ item.runtime }} minutos</span>
      </p>
      <p id="seasons" v-if="item.seasons">
        <b>Temporadas: </b><span>{{ item.seasons.length }}</span>
      </p>
      <p id="vote" v-if="item.vote_average">
        <b>Avaliação: </b
        ><span>{{
          item.vote_average.toFixed(1)
        }} %</span>
      </p>
    </div>

    <div class="container-trailer" v-if="this.keyVideo !== ''">
      <iframe
        width="490"
        height="315"
        :src="`https://www.youtube.com/embed/${keyVideo}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="container-poster" v-else>
      <img
        id="poster"
        :src="`${image}${item.poster_path}`"
        alt="poster-movie"
      />
    </div>
  </div>
</template>

<script>
import config from "@/config/config";

export default {
  name: "BoxDetails",
  data() {
    return {
      image: config.imageTmdb,
    };
  },
  props: {
    item: Object,
    keyVideo: String,
  },
};
</script>

<style scoped>
.box-details {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-details .container-details {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  padding: 0 6%;
}

.box-details .container-details #title {
  font-size: 3rem;
  margin-bottom: 15px;
}

.box-details .container-details #sinopse {
  font-weight: normal;
}

.box-details .container-details #sinopse,
.box-details .container-details #runtime,
.box-details .container-details #seasons,
.box-details .container-details #vote {
  font-size: 1.15rem;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}

.box-details .container-details #sinopse b,
.box-details .container-details #runtime b,
.box-details .container-details #seasons b,
.box-details .container-details #vote b {
  margin-bottom: 4px;
}

.box-details .container-trailer,
.box-details .container-poster {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2%;
}

.box-details .container-poster #poster {
  height: 25rem;
}

@media screen and (max-width: 1000px) {
  .box-details {
    max-height: 100%;
    flex-direction: column;
  }

  .box-details .container-details {
    width: 100%;
  }

  .box-details .container-details #title {
    margin-top: 5%;
  }

  .box-details .container-trailer,
  .box-details .container-poster {
    padding: 10% 0;
  }
}

@media screen and (max-width: 417px) {
  .box-details .container-details #title {
    margin-top: 15%;
  }
}
</style>