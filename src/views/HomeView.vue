<script setup>
import { RouterLink } from 'vue-router';
import Map from "../components/MapOsm.vue";

</script>

<template >
  <main >
    <h1 class="bg-vert font-2 text-center pt-2 mb-0">
      Jusqu’à -30% sur les montures blanches jusqu’au 31 novembre !
    </h1>
    <img src="/public/img/image_accueil.svg" alt="Image accueil" class="container-fluid full-width-header no-margin">

  <div class="bg-beige">
      <div>
        <h1 class="font-1 text-center pt-5 mx-5 lh-1">Fusion parfaite entre artisanat français, élégance, minimalisme et pureté du design.</h1>
      </div><br>

      <div>
        <h2 class="font-2 mx-5">Nous plaçons l'utilisateur au cœur de la création en offrant une expérience inédite, où chaque paire de lunettes devient une toile vierge pour votre style personnel. Notre identité visuelle incarne notre engagement envers la qualité et le raffinement, et reflète notre attachement à la fabrication française.
        <br>
        Avec TaVue, chaque paire de lunettes est une déclaration de votre unicité. Rejoignez-nous pour créer, personnaliser et incarner votre vision de la mode à travers le prisme de la qualité et de l'élégance.</h2>
      </div>

      <h3 class="text-center font-1 mt-5 mb-5">Personnalisation</h3>

        <div class="d-flex justify-content-center align-items-center">
          <img src="/public/img/card_1.png" alt="Card 1 Accueil" class="mr-5">
          <img src="/public/img/card_2.png" alt="Card 2 Accueil" class="">
        </div>
      

      <div class="d-flex justify-content-center align-items-center">
        <RouterLink to="/custom">
          <button class="bg-vert btn btn-vert btn-lg m-5 m-5">
            <p class="font-2 font-blanc">Personnaliser votre monture</p>
          </button>
        </RouterLink>
      </div> 

      <h3 class="text-center font-1 mt-4">Nous retrouver</h3>

  <!-- mapOsm ici -->
    <Map/>


  </div>

  </main>
</template>
