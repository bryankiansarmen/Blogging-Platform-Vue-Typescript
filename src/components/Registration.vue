<script setup lang="ts">
import { ref } from "vue";

const registerForm = ref<{ username: string; email: string; password: string }>(
  {
    username: "",
    email: "",
    password: "",
  }
);

const handleRegistrationSubmit = () => {
  const newUser = {
    username: registerForm.value.username,
    email: registerForm.value.email,
    password: registerForm.value.password,
  };

  console.log(newUser);
};
</script>

<template>
  <div class="flex-container">
    <div class="card-container">
      <div class="card">
        <h2>Register</h2>

        <form class="card-form" @submit.prevent="handleRegistrationSubmit">
          <div class="form-group">
            <label for="name">Username</label>
            <input
              v-model="registerForm.username"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="registerForm.email"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="registerForm.password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" class="card-button">Submit</button>
        </form>

        <br />
        <p>Already have an account? <a href="#">Login</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid red;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: #fff;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slight shadow */
  padding: 30px;
  width: 350px;
  text-align: center;
}

.card h2 {
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
}

.card p {
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
}

.card-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-group label {
  margin-bottom: 5px;
  font-size: 1em;
  color: #333;
}

.form-group input {
  padding: 8px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1em;
}

.card-button {
  font-size: 1em;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #0056b3;
}
</style>
