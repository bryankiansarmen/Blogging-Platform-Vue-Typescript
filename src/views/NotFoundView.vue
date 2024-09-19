<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="not-found-container">
    <div class="not-found-card">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for does not exist.</p>
      <RouterLink to="/" class="not-found-button">Go Back Home</RouterLink>
    </div>
  </div>
</template>

<style lang="css" scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); /* Adjust height to account for navbar */
}

.not-found-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 300px;
  text-align: center;
}

.not-found-card h1 {
  font-size: 5em;
  color: #007bff; /* Blue color to match the theme */
  margin: 0;
}

.not-found-card h2 {
  font-size: 2em;
  color: #333;
  margin: 10px 0;
}

.not-found-card p {
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
}

.not-found-button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.not-found-button:hover {
  background-color: #0056b3;
}
</style>
