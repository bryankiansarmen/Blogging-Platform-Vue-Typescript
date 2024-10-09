<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();
const router = useRouter();

const isActiveLink = (routePath: string) => {
  const route = useRoute();
  return route.path === routePath;
};

const logout = () => {
  authStore.logout();
  router.push({ name: "login" });
};
</script>

<template>
  <nav class="navbar">
    <ul class="nav-left">
      <li>
        <RouterLink to="/" :class="isActiveLink('/') ? 'active' : null"
          >Home</RouterLink
        >
      </li>
    </ul>
    <ul class="nav-right">
      <li v-if="!authStore.isAuthenticated">
        <RouterLink
          to="/login"
          :class="isActiveLink('/login') ? 'active' : null"
          >Login</RouterLink
        >
      </li>
      <li v-if="!authStore.isAuthenticated">
        <RouterLink
          to="/register"
          :class="isActiveLink('/register') ? 'active' : null"
          >Register</RouterLink
        >
      </li>
      <li v-if="authStore.isAuthenticated">
        <button @click="logout" class="logout-button">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.navbar {
  width: 100%;
  background-color: #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar .nav-left {
  margin: 0;
}

.navbar .nav-right {
  margin: 0;
}

.navbar ul li {
  margin: 0 15px;
}

.navbar ul li a {
  text-decoration: none;
  color: white;
  font-size: 1em;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.navbar ul li a:hover {
  background-color: #0056b3;
}

.logout-button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1em;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #0056b3;
}

.active {
  background-color: #0056b3;
}
</style>
