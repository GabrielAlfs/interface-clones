<template>
  <aside
    class="
      bg-spotify-black
      flex flex-col
      justify-between
      overflow-y-hidden
      pt-6
    "
  >
    <spotify-logo class="text-spotify-white px-6 mb-4 w-34 box-content" />
    <side-bar-menu />
    <playlists />
    <div class="flex items-center px-4 gap-4 group cursor-pointer py-2.5">
      <download-icon
        class="w-5 h-5 transition-colors group-hover:text-spotify-white"
      />
      <p
        class="
          text-sm
          font-semibold
          transition-colors
          group-hover:text-spotify-white
        "
      >
        Instalar aplicativo
      </p>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DownloadIcon } from '@heroicons/vue/outline';
import SpotifyLogo from '../../assets/icons/SpotifyLogo.vue';
import SideBarMenu from './components/SideBarMenu.vue';
import Playlists from './components/Playlists.vue';

export default defineComponent({
  name: 'SideBar',
  components: {
    SpotifyLogo,
    SideBarMenu,
    Playlists,
    DownloadIcon,
  },
});
</script>
