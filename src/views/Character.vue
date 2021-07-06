<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Detalles del personaje</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-spinner name="bubbles" :paused="stoped" v-show="showSpinner"> </ion-spinner>
        <div v-show="!showSpinner" align="center">
          <ion-row>
            <ion-col size="4" offset="4">
              <ion-item style="padding-top: 30%">
                <h1 class="text-center">Datos del personaje</h1>
              </ion-item>
              <ion-img :src="personaje.image" alt=""></ion-img>
              <ion-item>Nombre: {{personaje.name}}</ion-item>
              <ion-item>Status: {{personaje.status}}</ion-item>
              <ion-item>Genero: {{personaje.gender}}</ion-item>
              <ion-item>Especie: {{personaje.species}}</ion-item>
            </ion-col>
          </ion-row>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonSpinner,IonImg,IonItem,IonCol,IonRow  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Character',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSpinner,
    IonImg,
    IonItem,
    IonCol,
    IonRow
  },
  data() {
    return {
      personaje: [],
      stoped: false,
      showSpinner : true
    }
  },
  methods: {
    async consumirPersonaje() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
        const personajeDetalles = await response.json();
        this.personaje = personajeDetalles;
        this.stoped = true;
        this.showSpinner= false;
        console.log('Personaje dibujado');
      } catch (error){
        alert(error);
      }
    }
  },
  created() {
    this.consumirPersonaje();
  }
})
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>