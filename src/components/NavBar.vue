<template>
  <nav>
    <div class="logo">
      <img alt="logo" src="../assets/touchwonders_logo.jpeg" />
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 1rem;
}

.logo img {
  height: 50px;
}
</style>
