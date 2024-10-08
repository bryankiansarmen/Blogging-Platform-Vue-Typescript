<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/authStore";

const loginForm = ref<{
  email: string;
  password: string;
}>({
  email: "",
  password: "",
});

const authStore = useAuthStore();
const responseMessage = ref<string | null>(null);

const handleLoginSubmit = async () => {
  const userCredential = {
    email: loginForm.value.email,
    password: loginForm.value.password,
  };

  try {
    await authStore.login(userCredential);
  } catch (error: any) {
    if (error.response) {
      responseMessage.value =
        error.response.data.message || "Login failed. Please try again.";
    } else if (error.request) {
      responseMessage.value =
        "No response from the server. Please check your network connection.";
    } else {
      responseMessage.value = "An unexpected error occurred. Please try again.";
    }
    console.error(error);
  }
};
</script>

<template>
  <div class="flex-container">
    <div class="card-container">
      <div class="card">
        <h2>Login</h2>
        <form class="card-form" @submit.prevent="handleLoginSubmit">
          <span v-if="responseMessage != null">{{ responseMessage }}</span>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="loginForm.email"
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
              v-model="loginForm.password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="card-button">Submit</button>
        </form>
        <br />
        <p>Don't have an account? <a href="#">Register</a></p>
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

span {
  color: red;
  font-weight: bold;
}
</style>
