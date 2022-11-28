<template>
  <div>
    <header-app />
    <div class="container-list-series">
      <p class="group-series">Descobertas do momento</p>
      <series :link="`discover/tv`" :id="0"/>
      <p class="group-series">Top melhores séries avaliados</p>
      <series :link="`tv/top_rated`" :id="1"/>
      <p class="group-series">Romance</p>
      <series :link="`discover/tv`" :genre="`&with_genres=10749`" :id="2"/>
      <p class="group-series">Acão e aventura</p>
      <series :link="`discover/tv`" :genre="`&with_genres=10759`" :id="3"/>
      <p class="group-series">Comédia</p>
      <series :link="`discover/tv`" :genre="`&with_genres=35`" :id="4"/>
      <p class="group-series">Família</p>
      <series :link="`discover/tv`" :genre="`&with_genres=10751`" :id="5"/>
      <p class="group-series">Realidade</p>
      <series :link="`discover/tv`" :genre="`&with_genres=10764`" :id="6"/>
      <p class="group-series">Documentários</p>
      <series :link="`discover/tv`" :genre="`&with_genres=99`" :id="7"/>
      <p class="group-series">Crimes</p>
      <series :link="`discover/tv`" :genre="`&with_genres=80`" :id="8"/>
      <p class="group-series">Mistério</p>
      <series :link="`discover/tv`" :genre="`&with_genres=9648`" :id="9"/>
      <p class="group-series">Drama</p>
      <series :link="`discover/tv`" :genre="`&with_genres=18`" :id="10"/>
      <p class="group-series">Animação</p>
      <series :link="`discover/tv`" :genre="`&with_genres=16`" :id="11"/>
      <p class="group-series">Crianças</p>
      <series :link="`discover/tv`" :genre="`&with_genres=10762`" :id="12"/>
    </div>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import Series from "@/components/Series.vue";

export default {
  name: "SeriesView",
  components: {
    HeaderApp,
    Series,
  },
};
</script>

<style scoped>
.container-list-series {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: #212130;
  padding-bottom: 20px;
}

.group-series {
  width: 100%;
  color: #fff;
  font-size: 18px;
  line-height: 1.25vw;
  font-weight: bolder;
  padding: 2.5% 0 15px 3.5%;
}

.group-series:first-child {
  padding: 90px 0 15px 3.5%;
}
</style>