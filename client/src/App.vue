<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/partner-list">Partner List </router-link>
    <!-- <router-link  to="/add">add</router-link> -->
    <router-view />
  </nav>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
  created() {
    if (localStorage.userToken) {
      const decoded = jwt_decode(localStorage.userToken);

      this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));
      this.$store.dispatch("setUser", decoded);
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
