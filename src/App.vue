<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PocketBase from "pocketbase";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Map from "./components/MapOsm.vue";

</script>

<template>
  <Header/>
    <RouterView />
    <!-- <Map/> -->
  <Footer/>
  

</template>

<script>
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "https://www.tavu.romane-miguel.fr:443";
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
var currentUser;
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async logout() {
      await pb.authStore.clear();
      document.getElementById("status").innerHTML = "You are now logged out";
    },
    async login() {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in with Google";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },
      async github() {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in with Github";
        connected = true;
        currentUser=pb.authStore.model;
      }
    }/*
    async add() {
      const record = await pb.collection("poems").create({
        title: "good year",
        content: "how a nice year",
        private: false,
        email:currentUser.email
      });
    },*/
    //this method allows the already registred user to log in the system.
  },
};
</script>



