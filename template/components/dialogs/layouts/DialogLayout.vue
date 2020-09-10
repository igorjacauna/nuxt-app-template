<template>
  <v-dialog
    ref="vdialog"
    v-model="isActive"
    eager
    content-class="vuedl-layout"
    :fullscreen="fullscreen"
    :max-width="getWidth"
    :persistent="persistent || loading"
    :scrollable="scrollable"
    :transition="transition"
    :hide-overlay="hideOverlay"
    :retain-focus="false"
    @keydown.esc="dismiss"
  >
    <dialog-child
      ref="dialog"
      v-bind="$options.propsData"
    />
  </v-dialog>
</template>

<script>
export default {
  props: {
    fullscreen: Boolean,
    scrollable: Boolean,
    hideOverlay: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    showClose: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    _destroy () {
      setTimeout(() => {
        this.$destroy()
      }, 1000)
    }
  }
}
</script>
