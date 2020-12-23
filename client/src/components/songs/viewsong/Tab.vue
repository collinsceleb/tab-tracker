<template>
  <v-flex xs6>
      <panel title="Tabs">
        <textarea
                readonly
                name="tab"
                v-model="song.tab">
        </textarea>
      </panel>
    </v-flex>
</template>

<script>
export default {
    props: [
        "song"
    ],
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