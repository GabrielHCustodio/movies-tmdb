<template>
  <div>
    <h1>Detalhes Filmes</h1>
    <p>{{movie}}</p>
  </div>
</template>

<script>
import config from "@/config/config"

export default {
  name: 'DetailsMovie',
  data() {
    return {
      movie: ''
    }
  },
  created() {
    fetch(
      `${config.apiTmdbUrl}movie/${this.$route.params.id}${config.apiTmdbKey}&language=pt-BR`
    )
    .then( response => response.json())
    .then( response => {
      this.movie = response
    })
  }
}
</script>