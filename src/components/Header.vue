<script setup>
import { RouterLink } from 'vue-router';

// Import pocketbase
import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

// Import éléments de vue
import { ref, onMounted } from 'vue';

// user connecté ? au départ faux
let isConnected = ref(false)

// Element de connexion
let user = ref('')
let psw = ref('')

// User connecté
let currentUser = ref(null)
let avatar = ref(null)

// Au montage du composant
onMounted(async() => {
// Vérifier que le user est déjà connecté
refresh()

})

const refresh = ()=>{
if(pb.authStore.isValid){
currentUser.value = pb.authStore.model
isConnected.value = true

 avatar.value =
  "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
  +currentUser.value.collectionId     // Id ou name de la collection concernée
  +"/"
  +currentUser.value.id               // Id de l'utilisateur connecté
   +"/"
  +currentUser.value.avatar           // Nom fichier image pocketbase
  +"?thumb=100x100"                   // Taille par défaut

   //console.log("image avatar utilisateur", avatar)
}
}

const connect = async()=>{
try{
const authData = await pb.collection('users')
.authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
refresh()
}catch(error){
//    console.log("erreur de connexion : ",error.message)
alert("Erreur d'identification : mauvais login et/ou mot de passe")
user.value = ""
psw.value = ""
}
}

const deconnect = ()=>{
// Suppression utilisateur connecté
pb.authStore.clear()
isConnected.value=false
avatar.value = null
// Retour à la page d'accueil -> Redirection
router.push({name:"HomeView"})
}

</script>

<template >
  <div class="bg-beige d-flex container-fluid full-width-header no-margin pt-4 pb-4">
    <RouterLink to="/">
      <img src="/public/img/logo.svg" alt="Logo de votre site" class="ml-5">
    </RouterLink>
            
<!--           <nav>
          <RouterLink to="/" class="font-2">Connexion</RouterLink>
          </nav> -->
    
    <!-- <div class="d-flex col-md-6 offset-md-8 ml-auto"> -->
  <!--     <img
        alt="Logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
      /> -->
      <!-- <div class="wrapper" id="signOut">
        <div><SignIn msg="User, please sign in !" /></div>
        <label class="font-2">Email: </label><br />
        <input
          type="email"
          required
          id="email"
          placeholder="username@domain.tld"
        /><br />
        <label class="font-2">Password: </label><br />
        <input type="password" required id="passwd" /><br />
        <button v-on:click="login()" class="font-2">Sign In Google</button>
        <button v-on:click="github()" class="font-2">Sign In with Github</button>
        <button v-on:click="logout()" class="font-2">Log Out</button>
        <button v-on:click="add()" class="font-2">Add</button>
        <p><label id="status" class="font-2"> You are not yet connected </label><br /></p>
      </div>
    </div>
   -->

   <!-- Formulaire Connexion -->
   <div class="ml-auto">
      <span v-if="isConnected">
        <!-- <img :src="avatar" class="img-fluid max-w-60px" /> -->
        <button class="mr-2 btn btn-light btn-outline-none ">{{ currentUser.username }}</button>
        <button class="btn btn-light btn-outline-none ml-auto" type="button" @click="deconnect">
         <!--  <img class="" src="../../public/icon/log-out.svg" /> -->
        </button>
      </span>

      <form v-else class="form-inline input-group-sm ml-auto">
        <input class="form-control mr-2" placeholder="Login" v-model="user">
        <input class="form-control mr-2" placeholder="Password" v-model="psw">
        <button class="btn btn-beige ml-auto" 
          type="button" @click.prevent="connect">
            <i class="fa fa-power-off"></i>
        </button>
      </form>
    </div>
  </div>
</template>