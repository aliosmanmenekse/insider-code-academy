<template>
  <div class="user-create">
    <h1>Kullanıcı  Oluştur</h1>
    Kullanıcı Adı
    <input v-model="user" type="text">
    Şifre
    <input v-model="password" type="text">
    Email
    <input v-model="email" type="text">
    <button @click="createUser()" class="create-user-button">Kullanıcı Oluştur</button>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        user: "",
        password: "",
        email: "",
        userList: []
      }
    },

    methods: {
      createUser() {
        const user = {
          user: this.user,
          password: this.password,
          email: this.email,
        };

        this.userList.push(user)

        localStorage.setItem('user', JSON.stringify(this.userList));

        this.clearForm();
      },

      clearForm () {
        this.user = "";
        this.email = "";
        this.password = "";
      }
    }
  }
</script>

<style>
  .user-create {
    display: grid;
    grid-template-columns: 400px ;
  }
  .create-user-button {
    margin-top: 20px;
  }
</style>
