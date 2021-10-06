<template>
  <section class="Login">
    <h1>Acesso via e-mail</h1>
    <h2>Acesse sua conta Aires por algum método abaixo</h2>
    <form class="form" @submit="submitForm"  method="post">
      <div class="form__div initial__align">
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          class="form__input"
          id="email"
          name="email"
          v-model="email"
        />

        <p v-if="erroEmail.length">
          <small v-for="erroEmail in erroEmail" :key="erroEmail">{{
            erroEmail
          }}</small>
        </p>
      </div>
      <div class="form__div initial__align">
        <label for="senha">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          name="senha"
          class="form__input"
          v-model="senha"
        />

        <p v-if="erroPassword.length">
          <small v-for="erroPassword in erroPassword" :key="erroPassword">{{
            erroPassword
          }}</small>
        </p>
      </div>
      <div class="form__div bottom__content">
        <label class="form__div__text">
          <input
            type="checkbox"
            name="checkbox"
            class="form__checkbox"
          />Continuar conectado</label
        >

        <a class="form__div__text">Esqueceu a senha ?</a>
      </div>

      <div class="form__div">
        <button class="form__div__button" value="enviar" type="submit">
          Acessar
        </button>
      </div>
    </form>

    <p>
      Não possui uma conta ?
      <router-link to="/CriarConta">Clique para criar a sua conta</router-link>
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      erroPassword: [],
      erroEmail: [],
      email: null,
      senha: null,
    };
  },
  methods: {
    submitForm: function(e) {
      this.erroPassword = [];
      this.erroEmail = [];

      if (!this.senha) {
        this.erroPassword.push("A senha é obrigatoria.");
      }
      if (!this.email) {
        this.erroEmail.push("O e-mail é obrigatório.");
      } else if (!this.validEmail(this.email)) {
        this.erroEmail.push("Utilize um e-mail válido.");
      }

      if (!this.erroPassword.length && !this.erroEmail.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped></style>
