<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
export default {
  layout: 'snackbar',
  props: {
    text: {
      type: String,
      default: null
    }
  }
}
</script>
