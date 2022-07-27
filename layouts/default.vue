<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  onMounted,
} from '@nuxtjs/composition-api'

const index = defineComponent({
  setup() {
    return {}
  },
})
export default index
</script>
<style scoped>
.focusSelect {
  border-radius: 10px;
  border: solid;
  background: #66e867 !important;
}
</style>
