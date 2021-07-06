<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Listado de personajes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <div v-for="personaje in personajes.results" :key="personaje.id">
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>Personaje</ion-card-subtitle>
                    <ion-card-title> {{personaje.name}}</ion-card-title>
                  </ion-card-header>
                  <ion-row>
                    <ion-col size="4" offset="4">
                      <ion-img :src="personaje.image" alt=""></ion-img>
                    </ion-col>
                  </ion-row>
                  <ion-card-content>
                    <router-link :to="`/character/${personaje.id}`" class="btn btn-primary">Ver detalles</router-link>
                  </ion-card-content>
                </ion-card>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      <div>

      </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent,IonCardTitle,IonCardHeader,IonCardSubtitle,IonCol, IonGrid, IonRow ,IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonRow,
    IonCardSubtitle,
    IonCardHeader,
    IonImg
  },
  data() {
    return {
      personajes: [],
      comentarios: []
    }
  },
  methods: {
    async consumirPersonajes() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const personajeLista = await response.json();
        this.personajes = personajeLista;
        console.log('lista de personajes dibujada');
      } catch (error){
       alert(error);
      }
    }
  },
  created() {
    this.consumirPersonajes();
  }
})
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
}


</style>