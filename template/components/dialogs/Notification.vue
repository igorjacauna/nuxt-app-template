<template>
  <v-alert
    style="margin: 0; min-width: 300px"
    :dismissible="dismissible"
    :type="color"
    :outlined="outlined"
    :prominent="prominent"
    :text="flat"
    :border="border"
    :tile="tile"
    :dense="dense"
    @input="$emit('submit')"
  >
    <div class="d-flex align-center">
      <div class="mr-2">
        {{ text }}
      </div>
    </div>
  </v-alert>
</template>
<script>
export default {
  layout: ['notification', { showClose: false }],
  props: {
    color: {
      type: String,
      default: 'info'
    },
    actions: {
      type: [Array, Object],
      default: () => ({})
    },
    text: {
      type: String,
      default: ''
    },
    outlined: Boolean,
    prominent: Boolean,
    dismissible: {
      type: Boolean,
      default: true
    },
    flat: Boolean,
    border: {
      type: String,
      default: null
    },
    tile: Boolean,
    dense: Boolean
  }
}
</script>
