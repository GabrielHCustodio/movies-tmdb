<template>
  <div class="container-serie">
    <div class="container-close">
      <i class="fa-solid fa-xmark" @click="$router.push('/series')"></i>
    </div>
    <div class="box-serie-trailer" v-if="this.key !== ''">
      <div class="serie-details">
        <h1 id="title">{{ serie.name }}</h1>
        <h4 id="sinopse"><b>Sinopse: </b><span>{{ serie.overview }}</span></h4>
      </div>

      <div class="serie-trailer">
        <iframe
          width="510"
          height="315"
          :src="`https://www.youtube.com/embed/${key}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="box-serie" v-else>
      <div class="serie-details">
        <h1 id="title">{{ serie.name }}</h1>
        <h4 id="sinopse"><b>Sinopse: </b><span>{{ serie.overview }}</span></h4>
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
  background: #212130;
  position: relative;
}

.container-close {
  width: 100%;
  text-align: right;
  font-size: 2rem;
  padding: 5px 20px;
  color: #fff;
  z-index: 10;
  position: absolute;
}

.container-close i {
  cursor: pointer;
}

/* There is trailer */
.box-serie-trailer {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-serie-trailer .serie-details {
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

.box-serie-trailer .serie-details #title {
  font-size: 3.2rem;
  margin-bottom: 20px;
}

.box-serie-trailer .serie-details #sinopse {
  font-weight: normal;
}

.box-serie-trailer .serie-details #sinopse,
.box-serie-trailer .serie-details #runtime {
  font-size: 1.3rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.box-serie-trailer .serie-details #sinopse b,
.box-serie-trailer .serie-details #runtime b {
  margin-bottom: 5px;
}

.serie-trailer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5%;
  width: 50%;
}

/* There is no trailer */
.box-serie {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99vh;
}

.box-serie .serie-img {
  position: relative;
  width: 100%;
  background: #000000;
}

.box-serie #backdrop {
  width: 100%;
  height: 100vh;
  opacity: 0.4;
}

.box-serie .serie-details {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  height: 85vh;
  padding: 40px;
  color: #fff;
}

.box-serie .serie-details #title {
  font-size: 4rem;
  margin-bottom: 20px;
}

.box-serie .serie-details #sinopse {
  font-weight: normal;
}

.box-serie .serie-details #sinopse,
.box-serie .serie-details #runtime {
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.box-serie .serie-details #sinopse b,
.box-serie .serie-details #runtime b {
  margin-bottom: 5px;
}

/* responsive - trailer */

@media screen and (max-width: 1000px) {
  .container-serie {
    height: 135vh;
  }

  .box-serie-trailer {
    flex-direction: column;
  }

  .box-serie-trailer .serie-details {
    width: 100%;
  }
}

@media screen and (max-width: 517px) {
  .box-serie-trailer .serie-details {
    margin-top: 85px;
  }

  .serie-trailer {
    margin-top: 70px;
  }
}

/* responsive - no trailer */
@media screen and (max-width: 600px) {
  .box-serie {
    height: 100%;
  }

  .box-serie .serie-img {
    position: relative;
    width: 100%;
    height: 170%;
    background: #212130;
  }

  .box-serie #backdrop {
    display: none;
  }

  .box-serie .serie-details {
    position: absolute;
    margin-top: 200px;
  }
}

@media screen and (max-width: 415px) {
  .box-serie .serie-img {
    height: 120%;
  }

  .box-serie .serie-details {
    margin-top: 100px;
  }
}
</style>