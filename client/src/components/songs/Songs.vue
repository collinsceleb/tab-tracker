<template>
    <v-container column>
        <v-flex xs6 offset-xs3>
            <songs-search-panel />
            <songs-panel class="mt-2"/>
        </v-flex>
    </v-container>
</template>

<script>
import SongService from '@/services/SongService'
import SongsPanel from './SongsPanel.vue'
import SongsSearchPanel from './SongsSearchPanel.vue'
export default {
  
  components: { SongsPanel, SongsSearchPanel },
  data() {
      return {
          songs: null
      }
  },
  methods: {
      navigateTo(route) {
          this.$router.push(route)
      }
  },
  async mounted() {
      this.songs = (await SongService.index()).data
  }
    
}
</script>

<style scoped>

.song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
}

.song-title {
    font-size: 30px;
}

.song-artist{
    font-size: 24px;
}

.song-genre{
    font-size: 18px;
}
.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>