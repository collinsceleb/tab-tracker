<template>
  <panel title="Youtube Video">
      <youtube 
            :video-id="youtubeId"
            :player-width="700"
            :player-height="240">
            </youtube>
  </panel>
</template>

<script>
import Panel from '../Panel.vue'
export default {
  components: { Panel },
  props: [
      'youtubeId'
  ]

}
</script>

<style scoped>

</style>