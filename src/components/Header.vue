<script>
import PocketBase from 'pocketbase'
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
    pocketbase_ip = "https://tavu.romane-miguel.fr:443";
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
var currentUser;
export default {
    methods: {
        async login() {
            await pb
                .collection("users")
                .authWithPassword(
                    document.getElementById("email").value,
                    document.getElementById("passwd").value
                );

            if (pb.authStore.isValid) {
                document.getElementById("status").innerHTML = "Vous etes maintenant connecté(e)";
                connected = true;
                currentUser = pb.authStore.model;
                document.getElementById("signOut").style.visibility = "hidden";
                document.getElementById("addPoem").style.visibility = "visible";
            }
        },
        async register() {
            currentUser = await pb.collection("users").create({
                email: document.getElementById("email").value,
                password: document.getElementById("passwd").value,
                passwordConfirm: document.getElementById("passwd").value,
                name: "John Di",
            });
            if (currentUser) {
                document.getElementById("status").innerHTML =
                    "Nous vous avons envoyer un mail de vérifictaion ...";
                await pb
                    .collection("users")
                    .requestVerification(document.getElementById("email").value);
            }
        },
        async googlelogin() {
            await pb.collection("users").authWithOAuth2({ provider: "google" });
            if (pb.authStore.isValid) {
                document.getElementById("status").innerHTML = "Vous êtes maintenant connecté avec Google";
                connected = true;
                currentUser = pb.authStore.model;
                document.getElementById("signOut").style.visibility = "hidden";
                document.getElementById("addPoem").style.visibility = "visible";
            }
        },
        async loginGithub() {
            await pb.collection("users").authWithOAuth2({ provider: "github" });
            if (pb.authStore.isValid) {
                document.getElementById("status").innerHTML = "Vous êtes maintenant connecté(e) avec Github";
                connected = true;
                currentUser = pb.authStore.model;
            }
        },
        async createPoem() {
            const record = await pb.collection("poems").create({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
                private: document.getElementById("notpublic").value,
                email: currentUser.email,
                illustration: document.getElementById("file").files[0],
            });
        },
    },
};
</script>


<template>
  <div class="card">
    <div class="bg-beige d-flex container-fluid full-width-header no-margin pt-4 pb-4 ">
    <RouterLink to="/">
      <img src="/public/img/logo.svg" alt="Logo de votre site" class="ml-5">
    </RouterLink>
          
          <div class="container justify-content-between">
              <div class="wrapper col-md-6 ml-auto" id="signOut">
                  <div>
                      <SignIn msg="Enter votre email pour vous connecter" />
                  </div>
                  <label class="font-1">Adresse mail: </label><br />
                  <input type="email" required id="email" placeholder="username@domain.tld" /><br />
                  <label class="font-1">Mot de passe: </label><br />
                  <input type="password" required id="passwd" /><br />
                  <button v-on:click="register()" class="btn btn-beige font-2">S'inscrire</button>
                  <button v-on:click="login()" class="btn btn-beige font-2">Se connecter</button>
                  <button v-on:click="googlelogin()" class="btn btn-beige font-2">Se connecter avec Google</button>
                  <button v-on:click="loginGithub()" class="btn btn-vert font-2">Se connecter avec Github</button>
                  <p><label id="status" class="font-2"> Vous n'êtes pas connecté </label><br /></p>
              </div>
          </div>
      </div>
  </div>
</template>

