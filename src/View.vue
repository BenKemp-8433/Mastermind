<script>
import { provide, ref } from "vue";

export default {
  setup() {
    let gameCode = ref([])
    function setGameCode(newCode) {
      gameCode.value = newCode
    }

    provide('settings', {
      codeSize: 4,
      colorCount: 6,
      guessAttempts: 10
    })

    provide('results', {
      available: false,
      success: false
    })

    provide('gameCode', {
      gameCode,
      setGameCode
    })
  }
}
</script>

<template>
  <main
    :class="$route.name?.toLowerCase()"
  >
    <router-view
      :name="$route.name"
    />
  </main>
</template>