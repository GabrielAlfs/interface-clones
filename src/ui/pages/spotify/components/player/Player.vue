<template>
  <section
    class="
      bg-spotify-800
      border-t border-spotify-700
      col-span-2
      px-4
      flex
      items-center
      justify-between
    "
  >
    <current-song />
    <player-controller />
    <volume-and-settings />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CurrentSong from './components/CurrentSong.vue';
import PlayerController from './components/PlayerController.vue';
import VolumeAndSettings from './components/VolumeAndSettings.vue';

export default defineComponent({
  name: 'Player',
  components: {
    CurrentSong,
    PlayerController,
    VolumeAndSettings,
  },
});
</script>
