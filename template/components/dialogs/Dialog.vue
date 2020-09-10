<template>
  <v-card>
    <v-card-title>
      Título
    </v-card-title>
    <v-card-text>
      Texto do dialog
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$emit('submit')">
        \{{ value }}
      </v-btn>
      <v-btn @click="$emit('submit', true)">
        Ok
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  layout: ['default', { width: 450 }],
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>
