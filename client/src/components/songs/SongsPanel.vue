<template>
            <panel title="Songs">
                <v-btn 
                    class="cyan accent-2"
                    slot="action"
                    @click="navigateTo({name: 'Song-Create'})"
                    fab
                    light
                    medium
                    absolute
                    right
                    middle>
                    <span class="material-icons">
                        <v-icon>
                            add
                        </v-icon>
                    </span>
                </v-btn>
                <div 
                    v-for="song in songs" 
                    :key="song.id" 
                    class="song">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song-title">
                                {{song.title}}
                            </div>
                             <div class="song-artist">
                                {{song.artist}}
                            </div>
                             <div class="song-genre">
                                {{song.genre}}
                            </div>
                            <v-btn 
                                class="cyan" 
                                type="submit"
                                 dark 
                                 @click="navigateTo({name: 'View-Song', params: {songId: song.id}})">
                                 View
                            </v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <img class="album-image" :src="song.albumImageUrl">
                        </v-flex>
                    </v-layout>
                </div>
            </panel>
</template>

<script>
import SongService from '@/services/SongService'
export default {
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
  watch: {
      '$route.query.search': {
          immediate: true,
          async handler(value) {
              this.songs = (await SongService.index(value)).data
          }
      }
  }
//   async mounted() {
//       this.songs = (await SongService.index()).data
//   }
    
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