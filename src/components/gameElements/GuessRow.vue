<script>
import { computed, inject, reactive, ref } from 'vue'

import Receptacle from '/src/components/gameElements/Receptacle.vue'
import RowResult from '/src/components/gameElements/RowResult.vue'
import Button from '/src/components/ui/Button.vue'

export default {
  components: {
    'v-receptacle': Receptacle,
    'v-row-result': RowResult,
    'v-button': Button,
  },

  props: {
    attemptNumber: Number,
    index: Number
  },

  emits: ['update:attemptNumber'],

  setup(props, { emit }) {
    const settings = inject('settings')
    const pegs = reactive({})
    let result = ref([])

    function checkRow() {
      result.value = pegs

      emit('update:attemptNumber', props.attemptNumber + 1)
    }

    return {
      settings,
      pegs,
      result,
      current: computed(() => props.attemptNumber === props.index),
      checkRow
    }
  }
}
</script>

<template>
  <div class="guess-row">
    <div
      class="receptacles"
      style="grid-area: receptacles"
      :style="{
        '--ColumnCount': settings.codeSize
      }"
    >
      <v-receptacle
        v-for="index in Number(settings.codeSize)"
        :key="index"
        :index="index"

        @peg-updated="(pegId) => pegs[index] = pegId"
      />
    </div>

    <v-button
      v-if="current"

      :disabled="Object.values(pegs).length !== Number(settings.codeSize)"

      @click="checkRow()"
    >
      Submit
    </v-button>

    <v-row-result
      v-if="Object.values(result).length"

      :result="result"
      :attempt-number="attemptNumber"

      style="grid-area: row-result"
    />
  </div>
</template>