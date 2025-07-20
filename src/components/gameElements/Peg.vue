<script>
import { computed, inject } from 'vue'

import { colors } from "/src/gameData.js";

export default {
  props: {
    pegId: Number | undefined
  },

  setup(props) {
    const settings = inject('settings')
    const availableColors = colors.slice(0, Number(settings.colorCount))

    return {
      pegId: computed(() => props.pegId),
      availableColors
    }
  }
}
</script>

<template>
  <div
    class="peg"

    :style="{
      'background-color': availableColors[pegId - 1]
    }"
  />
</template>