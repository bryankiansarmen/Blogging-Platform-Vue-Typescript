import { defineStore } from "pinia";
import axios from "axios";
import router from "../routes";

// aut state object
interface AuthState {
  token: string | null;
  expiration: number | null;
}

// defining a store
export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    token: null,
    expiration: null,
  }),

  actions: {
    async login(credentials: { email: string; password: string }) {
      try {
        const response = await axios({
          url: "http://192.168.4.35:8000/api/v1/auth/login",
          method: "post",
          data: credentials,
          headers: {
            "Content-type": "application/json",
          },
        });

        console.log(response.data);

        const { token, expiration } = response.data;

        this.setToken(token, expiration);

        router.push({ name: "home" });
      } catch (error) {
        throw new Error("Invalid login credenetials.");
      }
    },

    setToken(token: string, expiration: number) {
      this.token = token;
      this.expiration = Date.now() + expiration;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("expiration", this.expiration.toString());

      // set up automatic token refresh or logout
      this.scheduleTokenRefresh(expiration);
    },

    scheduleTokenRefresh(expiration: number) {
      const timeout = expiration - 5000; // 5 seconds before expiry
      setTimeout(() => {
        this.logout();
      }, timeout);
    },

    logout() {
      this.token = null;
      this.expiration = null;

      // remove from sessionStorage
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("expiration");

      router.push({ name: "login" });
    },

    checkTokenExpiration() {
      const tokenExpiration = Number(sessionStorage.getItem("expiration"));
      if (tokenExpiration && Date.now() >= tokenExpiration) {
        this.logout();
      }
    },
  },
});
