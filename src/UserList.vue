<template>
  <div>
    <div class="user-list">
      <b>Kullanıcı</b>
      <b>Şifre</b>
      <b>Email</b>
    </div>
    <div v-for="(item, index)  in userList" class="user-list">
      <p>{{ item.user }}</p>
      <p>{{ item.password }}</p>
      <p>{{ item.email }}</p>
      <button @click="deleteUser(index)">Sil</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userList: []
      }
    },

    methods: {
      getUserList() {
        const userList = localStorage.getItem('user');

        if (userList) {
          this.userList = JSON.parse(userList);
        }
      },

      deleteUser(index) {
        this.userList.splice(index, 1);

        localStorage.setItem('user', JSON.stringify(this.userList));

        this.getUserList();
      }
    },

    created() {
      this.getUserList();
    }
  }
</script>

<style>
  .user-list {
    display: grid;
    grid-template-columns: 200px 200px 200px 100px;
  }
</style>
