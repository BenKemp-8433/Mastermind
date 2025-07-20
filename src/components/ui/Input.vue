<script>
import { ref } from "vue";

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
    let inputValue = ref(props.modelValue)

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
        inputValue.value = value
        emit('update:modelValue', value)
      }
    }

    return {
      inputValue,
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

    <input
      type="text"

      :value="inputValue"

      @input="(event) => handleUpdate(event.target.value)"
      @blur="(event) => event.target.value = inputValue"
    >
  </div>
</template>