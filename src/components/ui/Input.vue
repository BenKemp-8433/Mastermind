<script>
import { computed } from "vue";

export default {
  props: {
    modelValue: String | Number,
    handle: String,
    label: String,
    type: String,
    min: String | undefined,
    max: String | undefined
  },

  emits: [
    'update:modelValue'
  ],

  setup(props, {emit}) {
    function handleUpdate(value) {
      let validated
      switch(props.type) {
        case 'numeric':
          validated = /[0-9]+[,.]?[0-9]*/g.test(value)
          break
        default:
          validated = true
          break
      }

      if (!!props.min?.length) {
        value = value < Number(props.min) ? props.min : value
      }

      if (!!props.max?.length) {
        value = value > Number(props.max) ? props.max : value
      }

      if (validated) {
        emit('update:modelValue', value)
      }
    }

    return {
      value: computed(() => props.modelValue),
      handleUpdate
    }
  }
}
</script>

<template>
  <div class="input-component">
    <label
      v-if="label"

      :for="handle"
    >
      {{ label }}
    </label>

    <!-- TODO: Update value on focusOut -->
    <input
      type="text"

      :value="value"

      @input="(event) => handleUpdate(event.target.value)"
    >
  </div>
</template>