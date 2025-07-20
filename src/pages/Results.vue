<script>
import { inject } from 'vue'
import router from '/src/router.js'

import Button from '/src/components/ui/Button.vue'
import Title from '/src/components/ui/Title.vue'
import Peg from '/src/components/gameElements/Peg.vue'

export default {
  components: {
    'v-button': Button,
    'v-title': Title,
    'v-peg': Peg,
  },

  setup() {
    const results = inject('results')
    const { gameCode } = inject('gameCode')

    if (!results.available) {
      router.push({
        name: 'Home'
      })
    }

    return {
      results,
      gameCode
    }
  }
}
</script>

<template>
  <v-title>
    <span class="title">
      <template v-if="results.success">
        You won!
      </template>

      <template v-else>
        You lost.
      </template>
    </span>
  </v-title>

  <div class="game-result">
    <p>
      The correct game code was:
    </p>

    <div class="game-code">
      <v-peg
          v-for="index in gameCode"
          :key="index"

          :pegId="index"
      />
    </div>
  </div>

  <div class="buttons-row">
    <router-link
      :to="{
        name: 'Game'
      }"
    >
      <v-button>
        Play again
      </v-button>
    </router-link>

    <router-link
      :to="{
        name: 'Home'
      }"
    >
      <v-button>
        Change settings
      </v-button>
    </router-link>
  </div>
</template>