<template>
  <div class="flex items-center gap-3.5">
    <img :src="currentSong.imgUrl" class="w-14 h-14" />
    <div class="flex flex-col">
      <p class="text-sm leading-4 text-spotify-white">{{ currentSong.name }}</p>
      <p class="text-xxs text-spotify-500">{{ currentSong.author }}</p>
    </div>
    <span class="w-4 h-4 hover:text-spotify-white">
      <heart-icon title="Salvar na Sua Biblioteca" />
    </span>
    <span class="w-4 h-4 hover:text-spotify-white">
      <picture-in-picture-icon title="Picture-in-picture" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HeartIcon from '@ui/pages/spotify/assets/icons/HeartIcon.vue';
import PictureInPictureIcon from '@ui/pages/spotify/assets/icons/PictureInPictureIcon.vue';

export default defineComponent({
  name: 'CurrentSong',
  components: {
    HeartIcon,
    PictureInPictureIcon,
  },
  setup() {
    return {
      currentSong: {
        imgUrl: 'https://picsum.photos/201',
        name: 'Dolor sit amet',
        author: 'Lorem Ipsum',
      },
    };
  },
});
</script>
