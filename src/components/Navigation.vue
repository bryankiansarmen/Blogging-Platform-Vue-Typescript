<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <ul class="nav-left">
      <li><a href="#">Home</a></li>
    </ul>
    <ul class="nav-right">
      <li><a href="#">Login</a></li>
      <li><a href="#">Register</a></li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.navbar {
  width: 100%;
  background-color: #007bff; /* Blue background to match card button */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slight shadow */
  padding: 15px 20px; /* Added padding */
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
  background-color: #0056b3; /* Darker blue on hover */
}
</style>
