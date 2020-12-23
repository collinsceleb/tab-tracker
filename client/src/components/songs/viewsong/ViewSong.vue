<template>
<div>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song" />
    </v-flex>
    <v-flex xs6  class="ml-2">
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>
  <v-layout class="mt-2">
    <tab :song="song" />
    <lyrics :song="song" />
  </v-layout>
</div>
</template>
 
<script>
import SongService from '@/services/SongService'
import SongMetadata from './SongMetadata.vue'
import YouTube from './YouTube.vue'
import Lyrics from './Lyrics.vue'
import Tab from './Tab.vue'
export default {
  data() {
    return {
      song: {}
    }
  },
   async mounted() {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    // console.log(songId)
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>

</style>>
