<script>
import { provide, inject, ref, computed } from 'vue'
import router from '/src/router.js'

import Button from '/src/components/ui/Button.vue'
import GuessRow from '/src/components/gameElements/GuessRow.vue'
import Peg from '/src/components/gameElements/Peg.vue'

export default {
  components: {
    'v-button': Button,
    'v-guess-row': GuessRow,
    'v-peg': Peg,
  },

  setup() {
    const settings = inject('settings')
    const results = inject('results')
    let { gameCode, setGameCode } = inject('gameCode')
    let selection = ref( undefined)

    setGameCode(generateGameCode())

    function generateGameCode() {
      let code = []

      for(let i = 0; i < settings.codeSize; i++) {
        code.push(Math.ceil(Math.random() * settings.colorCount))
      }

      return code
    }

    function handleResults(success = false) {
      results.available = true
      results.success = success

      router.push({
        name: 'Results',
        params: {
          gameCode: gameCode
        }
      })
    }

    provide('selectedPegId', selection)
    provide('gameOver', handleResults)

    return {
      gameCode,
      selection: computed(() => selection),
      attemptNumber: ref(1),
      settings
    }
  }
}
</script>

<template>
  <div class="game-board">
    <v-guess-row
      v-for="index in attemptNumber"
      :key="index"

      v-model:attempt-number="attemptNumber"
      :index="index"
    />
  </div>

  <div class="color-selection">
    <v-peg
        v-for="index in Number(settings.colorCount)"
        :key="index"

        :pegId="index"

        :class="{
        'active': selection.value === index
      }"

        @click="selection.value = index"
    />
  </div>
</template>