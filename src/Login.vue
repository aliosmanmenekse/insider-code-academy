<template>
  <div id="app">
    <h1>Insider Code Academy</h1>
    <div class="container">
      <input type="text" name="email" v-model="email"/>
      <input type="password" name="password" v-model="password"/>
    </div>
    <p>{{ warningMessage }}</p>
    <button @click="login()"> Giriş</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: "",
      password: "",
      warningMessage: "",
    }
  },

  methods: {
    login() {
      if (this.email === "" || this.password === "") {
        this.warningMessage = "Lütfen tüm alanları doldurunuz."

        return;
      }

      this.warningMessage = "";

      if (this.email.includes('@') === false) {
        this.warningMessage = "Lütfen geçerli bir email adresi giriniz."

        return;
      }

      if (this.email === 'a@' && this.password === '1') {
        this.$router.push('/user-create')
      } else {
        this.warningMessage = "Email veya şifre hatalı."
      }
    },
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 200px 200px;
  column-gap: 20px;
}

#app {
  display: grid;
  grid-template-columns: 400px ;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
