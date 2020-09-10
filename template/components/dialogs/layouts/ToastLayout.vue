<template>
  <v-snackbar
    v-model="isActive"
    :timeout="timeout"
    :color="getColor"
    class="application"
    :top="top"
    :left="left"
    :right="right"
    :bottom="bottom"
    :multi-line="multiLine"
    :vertical="vertical"
    :elevation="elevation"
    :text="flat"
    :centered="centered"
    :rounded="rounded"
    :outlined="outlined"
    :shaped="shaped"
    @click="dismiss"
  >
    <dialog-child
      ref="dialog"
      v-bind="$options.propsData"
    />
  </v-snackbar>
</template>

<script>
import Confirmable from 'vuedl/src/mixins/confirmable'
export default {
  mixins: [Confirmable],
  props: {
    type: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    timeout: {
      type: Number,
      default: 5000
    },
    position: {
      type: String,
      default: 'top'
    },
    multiLine: Boolean,
    vertical: Boolean,
    elevation: {
      type: [Number, String],
      default: 0
    },
    flat: Boolean,
    centered: Boolean,
    rounded: {
      type: [Boolean, String],
      default: false
    },
    outlined: Boolean,
    shaped: Boolean
  },
  data () {
    const position = this.position || this.$options.propsData.position || ''
    return {
      top: position.includes('top'),
      left: position.includes('left'),
      right: position.includes('right'),
      bottom: position.includes('bottom')
    }
  },
  computed: {
    getColor () {
      return this.color || this.type
    }
  },
  methods: {
    _destroy () {
      setTimeout(() => {
        this.$destroy()
      }, 500)
    }
  }
}
</script>
