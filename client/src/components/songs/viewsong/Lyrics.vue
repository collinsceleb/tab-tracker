<template>
  <v-flex xs6 class="ml-2">
      <panel title="Lyrics">
        <textarea
                readonly
                name="tab"
                v-model="song.lyrics">
        </textarea>
      </panel>
    </v-flex>
</template>

<script>
import Panel from '../Panel.vue'
export default {
    props: [
        'song'
    ],
    components: {
        Panel
    }
}
</script>

<style scoped>
textarea{
  width: 100%;
  border: none;
  border-style: none;
  font-family: monospace;
  height: 600px;
  overflow: auto;
  border-color: transparent;
  padding: 40px;
}
</style>