<script>
import { inject } from 'vue'

export default {
  props: {
    result: Object,
    attemptNumber: Number
  },

  emits: ['update:attemptNumber'],

  setup(props) {
    const settings = inject('settings')
    const { gameCode } = inject('gameCode')
    const gameOver = inject('gameOver')

    const output = match(Object.values(props.result), Object.values(gameCode.value))

    function match(check, control) {
      let matches = []
      for(let i = 0; i < check.length; i++) {
        if (check[i] === control[i]) {
          matches.push(2)
          continue
        }

        // TODO: revise this to show correct amount of occurrences
        if (control.includes(check[i])) {
          matches.push(1)
          continue
        }

        matches.push(0)
      }

      if (matches.every(value => value === 2)) {
        gameOver(true)
      }

      if (Number(props.attemptNumber) > Number(settings.guessAttempts)) {
        gameOver()
      }

      return matches.sort().reverse()
    }

    return {
      output: output
    }
  }
}
</script>

<template>
  <div class="row-results">
    <div
      v-for="(result, index) of output"

      class="peg result-peg"
      :class="{
        'correct': result === 2,
        'included': result === 1,
        'incorrect': result === 0
      }"

      :style="`grid-area: peg-${index + 1}`"
    />
  </div>
</template>