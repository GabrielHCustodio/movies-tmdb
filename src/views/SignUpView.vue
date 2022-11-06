<template>
  <div class="container-login">
    <div class="container-login-left">
      <img src="@/assets/create.svg" alt="image-login" />
    </div>
    <div class="container-login-right">
      <div class="container-form">
        <h2>Cadastre-se agora</h2>
        <form>
          <div class="input">
            <label for="name">Nome</label>
            <input type="text" name="name" placeholder="Nome completo..." />
          </div>
          <div class="input">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Seu melhor email..."
            />
          </div>
          <div class="input">
            <label for="password">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha..."
            />
          </div>
          <button @click="$router.push('login')">CADASTRAR</button>
          <p id="login">
            Já tem conta?<a @click="$router.push('login')"> Acesse agora</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style scoped>
.container-login {
  width: 100%;
  height: 100vh;
  background: #212130;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-login-left,
.container-login-right {
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-form {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  color: #fff;
  padding: 2.5rem;
  border: none;
  border-radius: 10px;
  box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.75);
}

.container-form form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.95rem;
}

a {
  text-decoration: none;
  color: #6c64fc;
  cursor: pointer;
}

.container-form h2 {
  font-size: 2.1rem;
  text-align: left;
  margin-bottom: 1.8rem;
}

.container-form form .input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
}

.container-form form .input label {
  margin-bottom: 0.5rem;
}

.container-form form .input input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  outline: none;
}

.container-form form button {
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 300px;
  height: 35px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  color: #fff;
  background: #6c64fc;
  cursor: pointer;
}

.container-form form button:hover {
  opacity: 0.8;
}

.container-form form #login {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-form form #login a {
  margin-left: 0.3rem;
}

.container-login-left img {
  width: 100%;
  padding-left: 80px;
}

@media screen and (max-width: 850px) {
  .container-login-rigth {
    width: 100%;
  }

  .container-form {
    width: 400px;
  }

  .container-login-left {
    display: none;
  }
}
</style>