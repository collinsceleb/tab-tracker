<template>
  <v-layout>
      <v-flex xs4>
          <panel title="Song Metadata">
              <v-form>            
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field 
                                    label="Title"
                                    hint="Song Title"
                                    placeholder="Title"
                                    required
                                    :rules="[required]"
                                    name="title"
                                    v-model="song.title"
                                    outlined>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field 
                                    label="Artist"
                                    hint="Artist Name"
                                    placeholder="Artist"
                                    required
                                    :rules="[required]"
                                    name="artist"
                                    v-model="song.artist"
                                    outlined>
                                </v-text-field>
                            </v-col>
                             <v-col cols="12" sm="6" md="12">
                                <v-text-field 
                                    label="Genre"
                                    hint="Song Genre"
                                    placeholder="Genre"
                                    required
                                    :rules="[required]"
                                    name="genre"
                                    v-model="song.genre"
                                    outlined>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field 
                                    label="Album"
                                    hint="Song Album"
                                    placeholder="Album"
                                    required
                                    :rules="[required]"
                                    name="album"
                                    v-model="song.album"
                                    outlined>
                                </v-text-field>
                            </v-col>
                             <v-col cols="12" sm="6" md="12">
                                <v-text-field 
                                    label="Album Image Url"
                                    placeholder="Album Image Url"
                                    hint="Album Image" 
                                    required
                                    :rules="[required]"
                                    name="albumImageUrl" 
                                    v-model="song.albumImageUrl"
                                    outlined>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field 
                                    label="Youtube ID"
                                    placeholder="Youtube ID"
                                    hint="Song Youtube ID"
                                    required
                                    :rules="[required]"
                                    name="youtubeId"
                                    v-model="song.youtubeId"
                                    outlined>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
              </v-form>
          </panel>
      </v-flex>

      <v-flex xs8>
          <panel title="Song Structure" class="ml-2">
                <v-form>            
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-textarea 
                                    label="Lyrics"
                                    hint="Song Lyrics"
                                    placeholder="Lyrics"
                                    required
                                    :rules="[required]"
                                    name="lyrics"
                                    v-model="song.lyrics"
                                    outlined>
                                </v-textarea>
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <v-textarea
                                    label="Tab"
                                    hint="Song Tab"
                                    placeholder="Tab"
                                    required
                                    :rules="[required]"
                                    name="tab"
                                    v-model="song.tab"
                                    outlined>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
              </v-form>
          </panel>
          <div class="danger-alert ml-4 mt-4" v-if="error">
              {{error}}
          </div>
          <v-col cols="12" sm="6" md="12" align-center>
              <v-btn class="cyan" type="submit" align-center dark @click="create">Create Song</v-btn>
          </v-col>
      </v-flex>
  </v-layout>
</template>

<script>

import SongService from '@/services/SongService'
export default {
    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            },
            error: null,
            required: (value) => !!value || 'Required'
        }
    },
    methods: {
        async create() {
            this.error = null
            const areAllFieldFilled = Object
                .keys(this.song)
                .every(key => !!this.song[key])
                if (!areAllFieldFilled) {
                    this.error = 'Please fill in all the required fields'
                    return
                }
            try {
                await SongService.post(this.song)
                this.$router.push({
                    name: 'Songs'
                })
            } catch (err) {
                console.log(err)                
            }
        }
    }

}
</script>

<style>
 .danger-alert {
     color: red;
 }
</style>