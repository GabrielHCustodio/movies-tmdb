<template>
  <div class="loader">
    <i class="fa-solid fa-spinner"></i>
  </div>
</template>

<script>
export default {
  name: 'LoaderRequest',
};
</script>

<style scoped>
.loader {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  text-align: center;
  color: #fff;
}
.loader i {
  animation: rotate 1.5s linear infinite;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>