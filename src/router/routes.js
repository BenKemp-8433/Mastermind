import Home from '/src/pages/Home.vue'
import Game from '/src/pages/Game.vue'
import Results from '/src/pages/Results.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: {name: 'Home'}
  },

  {
    path: '/',
    name: 'Home',
    components: {
      Home: Home
    }
  },

  {
    path: '/game',
    name: 'Game',
    components: {
      Game: Game
    }
  },

  {
    path: '/results',
    name: 'Results',
    components: {
      Results: Results
    }
  },
]

export default routes