<template>
  <div>
    <h1>Lista Filmes</h1>
  </div>
</template>

<script>
import config from '@/config/config'

export default {
  name: 'HomeView',
  created() {
    fetch(`${config.apiTmdbUrl}${config.apiTmdbKey}&language=pt-BR`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
  }
}
</script>
