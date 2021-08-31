<template>
  <div
    class="
      grid
      spotify__scrollBar spotify__gridTemplate
      h-screen
      overflow-y-hidden
      text-spotify-500
      font-spotify
    "
  >
    <side-bar />
    <main-content />
    <player />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Player from './components/player/Player.vue';
import SideBar from './components/side-bar/SideBar.vue';
import MainContent from './components/main-content/MainContent.vue';

export default defineComponent({
  name: 'Spotify',
  components: {
    Player,
    SideBar,
    MainContent,
  },
});
</script>

<style lang="postcss" scoped>
.spotify__gridTemplate {
  grid-template-rows: 1fr 5.75rem;
  grid-template-columns: 15rem 1fr;
}

.spotify__scrollBar {
  & ::-webkit-scrollbar {
    width: 12px;
  }
  & ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
  }
  & ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
