<script>
import { inject, ref } from "vue"

import Input from '/src/components/ui/Input.vue'
import Peg from '/src/components/gameElements/Peg.vue'

export default {
  components: {
    'v-input': Input,
    'v-peg': Peg,
  },

  props: {
    index: Number
  },

  emits: [
    'peg-updated'
  ],

  setup(props, { emit }) {
    const selectedPegId = inject('selectedPegId')
    let pegId = ref(undefined)

    function updatePeg() {
      pegId.value = selectedPegId.value

      emit('peg-updated', Number(pegId.value))
    }

    return {
      index: props.index,
      pegId,
      updatePeg
    }
  }
}
</script>

<template>
  <v-peg
    class="peg"

    :peg-id="pegId"

    @click="updatePeg()"
  />
</template>