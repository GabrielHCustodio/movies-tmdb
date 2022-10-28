<template>
  <div class="container-login">
    <div class="container-login-left">
      <div class="container-form">
        <h2>Seja bem-vindo</h2>
        <form>
          <div class="input">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Entre com seu email..."
            />
          </div>

          <div class="input">
            <label for="password">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Informe sua senha..."
            />
          </div>

          <div class="more">
            <div class="check">
              <input type="checkbox" name="check" id="" />
              <label for="check">Lembre-se de mim</label>
            </div>
            <a href="">Recuperar senha</a>
          </div>

          <button>ENTRAR</button>
          <p id="sign-up">
            Ainda não tem conta?<a href=""> Cadastre-se agora</a>
          </p>
        </form>
      </div>
    </div>
    <div class="container-login-right">
      <img src="@/assets/login.svg" alt="image-login" />
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
}

.container-form h2 {
  font-size: 2.1rem;
  text-align: left;
  margin-bottom: 1.8rem;
}

.container-form form .input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
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

.container-form form .more {
  margin-bottom: 1.2rem;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-form form .more .check {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-form form .more .check label {
  padding-left: 0.5rem;
}

.container-form form button {
  margin-bottom: 2rem;
  width: 300px;
  height: 30px;
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

.container-form form #sign-up {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-form form #sign-up a {
  margin-left: 0.3rem;
}

.container-login-right img {
  width: 100%;
  padding-right: 80px;
}
</style>