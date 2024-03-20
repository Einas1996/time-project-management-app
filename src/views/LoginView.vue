<template>
  <div class="login">
    <h1>login page</h1>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
}

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

form div {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
}

input {
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 30px;
}

button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #ecd9d9;
  color: rgb(15, 15, 15);
  cursor: pointer;
  margin-bottom: 50px;
}

button:hover {
  background-color: #ef8ea0;
}
</style>
