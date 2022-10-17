<template>
  <div class="container">
    <div class="container-left">
      <ul id="menu">
        <li class="li-menu">Filmes</li>
        <li class="li-menu">Séries</li>
        <li class="li-menu">Genêros</li>
      </ul>
      <i id="icon-menu" class="fa-solid fa-bars"></i>
    </div>
    <div class="logo">
      <h1>Cine+</h1>
    </div>
    <div class="container-right">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-user"></i>
      <span>Entrar</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  width: 100%;
  height: 70px;
  padding: 10px 60px;
  background: rgba(0, 0, 0, 0.5);
}

.container-left,
.container-right {
  width: 25%;
}

.container-left {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-left #menu {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.container-left #menu .li-menu {
  font-size: 18px;
  font-weight: 700;
  margin-right: 15px;
  color: #fff;
  cursor: pointer;
}

.container-left #icon-menu {
    font-size: 22px;
    color: #fff;
    display: none;
}

.container-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.container-right span {
  font-size: 18px;
  font-weight: 700;
  margin-left: 8px;
  color: #fff;
  cursor: pointer;
}

.container-right i {
  font-size: 22px;
  color: #fff;
  cursor: pointer;
}

.container-right i:first-child {
  margin-right: 22px;
}

.logo {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
}

@media screen and (max-width: 760px) {
    .container-left {
        flex-direction: row-reverse;
    }

    .container-left #menu{
       visibility: hidden;
    }

    .container-left #icon-menu{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 140px;
        cursor: pointer;
    }
}

@media screen and (max-width: 560px) {
    .logo {
        display: none;
    }
}
</style>