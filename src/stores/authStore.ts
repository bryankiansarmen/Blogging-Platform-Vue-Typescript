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

        const { token, expiration } = response.data;

        this.setToken(token, expiration);

        router.push({ name: "home" });
      } catch (error) {
        throw new Error("Invalid login credenetials.");
      }
    },

    setToken(token: string, expiration: number) {
      this.token = token;
      this.expiration = expiration;

      // set up automatic token refresh
      this.scheduleTokenRefresh(token, expiration);
    },

    scheduleTokenRefresh(token: string, expiration: number) {
      const timeout = expiration - 5000; // 5 seconds before expiry

      setTimeout(async () => {
        try {
          const response = await axios({
            url: "http://192.168.4.35:8000/api/v1/auth/refresh",
            method: "post",
            data: { token: token },
            headers: {
              "Content-type": "application/json",
            },
          });

          this.setToken(response.data.token, response.data.expiration);
        } catch (error) {
          throw new Error("Invalid or expired refresh token.");
        }
      }, timeout);
    },

    logout() {
      this.token = null;
      this.expiration = null;

      router.push({ name: "login" });
    },

    checkTokenExpiration() {
      const tokenExpiration = this.expiration;
      if (tokenExpiration && Date.now() >= tokenExpiration) {
        this.logout();
      }
    },
  },
});
