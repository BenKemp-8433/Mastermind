<script>
import { computed } from "vue"

export default {
  props: {
    disabled: Boolean
  },

  setup(props) {
    return {
      disabled: computed(() => props.disabled)
    }
  }
}
</script>

<template>
  <button
    class="button-component"

    :disabled="disabled"
  >
    <slot />
  </button>
</template>