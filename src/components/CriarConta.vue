<template>
  <section class="Login">
    <h1>Crie sua conta</h1>
    <h2>Crie a sua conta Aires</h2>
    <form class="form" @submit="submitForm" method="post">
      <div class="form__div initial__align">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          class="form__input"
        />
        <p v-if="erroEmail.length">
          <small v-for="erroEmail in erroEmail" :key="erroEmail">{{
            erroEmail
          }}</small>
        </p>
      </div>
      <div class="form__div initial__align">
        <label>Senha</label>
        <input
          placeholder="Senha"
          v-model="senha"
          type="password"
          class="form__input"
        />
        <p v-if="erroPassword.length">
          <small v-for="erroPassword in erroPassword" :key="erroPassword">{{
            erroPassword
          }}</small>
        </p>
      </div>

      <div class="form__div initial__align">
        <label>Confirme sua senha</label>
        <input
          placeholder="Senha"
          v-model="confirmeSenha"
          type="password"
          class="form__input"
        />
        <p v-if="erroConfirmarSenha.length">
          <small
            v-for="erroConfirmarSenha in erroConfirmarSenha"
            :key="erroConfirmarSenha"
            >{{ erroConfirmarSenha }}</small
          >
        </p>
      </div>

      <div class="form__div">
        <button class="form__div__button" value="enviar" type="submit">
          Criar Conta
        </button>
      </div>
    </form>

    <p>
      Já possui uma conta ?
      <router-link to="/">Clique para acessar</router-link>
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      erroPassword: [],
      erroEmail: [],
      erroConfirmarSenha: [],
      email: null,
      senha: null,
      confirmeSenha: null,
    };
  },

  methods: {
    submitForm: function(e) {
      this.erroPassword = [];
      this.erroEmail = [];
      this.erroConfirmarSenha = [];

      if (!this.senha) {
        this.erroPassword.push("A senha é obrigatoria.");
      }
      if (this.senha !== this.confirmeSenha) {
        this.erroConfirmarSenha.push("Ok, as senhas não parecem ser iguais");
      }
      if (!this.email) {
        this.erroEmail.push("O e-mail é obrigatório.");
      } else if (!this.validEmail(this.email)) {
        this.erroEmail.push("Utilize um e-mail válido.");
      }

      if (
        !this.erroPassword.length &&
        !this.erroEmail.length &&
        !this.erroConfirmarSenha.length
      ) {
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
