<script>
import { provide, ref } from "vue"
import { settingsDefaults } from '/src/gameData.js'

export default {
  setup() {
    let gameCode = ref([])
    function setGameCode(newCode) {
      gameCode.value = newCode
    }

    provide('settings', {
      codeSize: settingsDefaults.codeSize,
      colorCount: settingsDefaults.colorCount,
      guessAttempts: settingsDefaults.guessAttempts,
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