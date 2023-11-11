
import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        username: "",
        password: "",
        role: "",
        isLoggedIn: false,
    }),
    actions: {
        /**
         * This method is used to login a user.
         * It sends a POST request to the specified URL with the provided username and password.
         * If the response status is 200, it sets the username, password, and isLoggedIn properties of the user.
         * If the response status is not 200, it sets the isLoggedIn property to false.
         *
         * @param username - The username of the user.
         * @param password - The password of the user.
         */
        async login(username: string, password: string) {
            const respond = await axios.post("/login", {
                username,
                password,
            });
            if (respond.status === 200) {
                this.username = username;
                this.password = password;
                this.isLoggedIn = true;
                this.role = respond.data.role;
            } else {
                this.isLoggedIn = false;
            }
        },
        logout() {
            this.isLoggedIn = false;
        },
    }
})