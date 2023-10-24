<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PocketBase from "pocketbase";

</script>

<template>
  <header class="bg-black">
    <div class="text-sky-400">TESSST</div>
      <div class="justify-center">
            <img src="/public/img/logo.svg" alt="Logo de votre site">
        </div>
        <nav>
        <RouterLink to="/">Connexion</RouterLink>
        </nav>
   
  </header>

   <div>
    <router-link to="/" class="bg-indigo-500">Go to Home</router-link>
    <img
      alt="Logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper" id="signOut">
      <div><SignIn msg="User, please sign in !" /></div>
      <label>email: </label><br />
      <input
        type="email"
        required
        id="email"
        placeholder="username@domain.tld"
      /><br />
      <label>password: </label><br />
      <input type="password" required id="passwd" /><br />
      <button v-on:click="login()">Sign In Google</button>
      <button v-on:click="github()">Sign In with Github</button>
      <button v-on:click="logout()">Log Out</button>
      <button v-on:click="add()">Add</button>
      <p><label id="status"> You are not yet connected </label><br /></p>
    </div>
  </div>

  <RouterView />
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
