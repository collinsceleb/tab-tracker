<template>
  <panel title="Song Metadata">
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
                dark
                :to="{
                    name: 'Edit-Song', 
                    params() {
                        return {
                            songId: song.id
                        }
                    }
                }">
                  Edit Song
              </v-btn>
              <v-btn
                v-if="isUserLoggedIn && !bookmark"
                class="cyan ml-1 mt-1 mb-1" 
                dark
                @click="setAsBookmark"
                >
                 Set As Bookmark
              </v-btn>

              <v-btn
                v-if="isUserLoggedIn && bookmark"
                class="cyan mt-1 ml-1" 
                dark
                @click="unsetAsBookmark"
                >
                 Unset As Bookmark
              </v-btn>

          </v-flex>
          <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl">
              <br>
              {{song.album}}
          </v-flex>
      </v-layout>        
  </panel>
</template>

<script>
import {mapGetters} from 'vuex'
import BookmarkService from '@/services/BookmarkService'
export default {
    props: [
        'song'
    ],
    data() {
        return {
            bookmark: null
        }
    },
    computed: {
        ...mapGetters([
            'isUserLoggedIn'
        ])
    },
    async mounted() {
        try {
            this.bookmark = (await BookmarkService.index({
            songId: this.song.id,
            userId: this.$store.state.authenticationModule.user.id
        })).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        async setAsBookmark() {
            try {
                this.bookmark = (await BookmarkService.post({
                        SongId: this.song.id,
                        UserId: this.$store.state.authenticationModule.user.id
                })).data
            } catch (error) {
                console.log(error)
            }
            // console.log('bookmark')
        },
        async unsetAsBookmark() {
            try {
                await BookmarkService.delete(this.bookmark.id)
                
                this.bookmark = null
            } catch (error) {
                console.log(error)
            }
        }
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
textarea{
  width: 100%;
  border: none;
  border-style: none;
  font-family: monospace;
  height: 240px;
  overflow: auto;
  border-color: transparent;
  padding: 40px;
}
</style>