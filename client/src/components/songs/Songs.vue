<template>
    <v-container column>
        <v-flex xs6 offset-xs3>
            <songs-search-panel />
            <songs-panel class="mt-2"/>
        </v-flex>
    </v-container>
</template>

<script>
import SongsPanel from './SongsPanel.vue'
import SongsSearchPanel from './SongsSearchPanel.vue'
export default {
  
  components: { SongsPanel, SongsSearchPanel },
  data() {
      return {
          songs: null
      }
  },  
}
</script>

<style scoped>


</style>