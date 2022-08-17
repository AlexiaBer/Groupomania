import { createApp } from 'vue' // j'importe createApp
import { createPinia } from 'pinia'

import App from './App.vue' //la vue par défaut
import router from './router'

import './assets/main.css'

const app = createApp(App) //je crée l'appli

app.use(createPinia()) //Comme un LS sous stéroïdes ! Il est dynamique. gestionnaire d'état qui save toutes les infos concernant l'appli. ex:récup l'ensemble des posts, les sauvegarder dans Pinia. permet à TOUS les composants d'accéder aux infos. on peut save les infos de l'user (ex : page de profil, page login s'il est déja connecté)
app.use(router) // le router gère la navigation (les paths). C'est le router qui change l'affichage des composants à l'écran

app.mount('#app')
