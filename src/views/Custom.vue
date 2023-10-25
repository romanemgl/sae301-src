<script>
// Import pocketbase
import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");
</script>

<template>
<div>
            <h1 class="font-1 text-center mt-4">
                Personnaliser sa monture
            </h1>
    </div>
        <div class="mt-5">
            <div class="container">
                <div class="row">
                    <!-- Colonne pour l'image (2/3 de la largeur) -->
                        <div class="col-md-8">
                            <img src="/public/img/svg_lunette.svg" alt="Logo de votre site" class="ml-5">
                        </div>
        
                    <!-- Colonne pour le texte (1/3 de la largeur) -->
                        <div class="col-md-4 font-2">
                            <p>Choissiez les couleurs avec lesquelles vous souhaitez personnaliser votre monture.</p>
                            <p class="font-1 col-md-4">Cadran</p>
                            <!--couleurs cadran-->

                            <p class="font-1 col-md-4">Branches</p>
                            <!--couleurs branches-->

                            <p class="font-1 col-md-4">Verres</p>
                            <!--couleurs verres-->
                        </div>
                        <p class="font-1">Total : 245E</p>
                            <div class="d-flex justify-content-center align-items-center">
                                <button class="bg-vert btn btn-vert btn-lg m-5 m-5">
                                    <p class="font-2">Commander</p>
                                </button>
                            </div>

                </div>
                
        </div>
</div>


</template>