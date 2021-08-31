<template>
  <div>
    <p class="text-spotify-white text-3xl font-bold mb-4">
      {{ welcomeMessage }}
    </p>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
      <li
        v-for="(playlist, index) in recentlyPlayed"
        :key="index"
        class="
          h-20
          flex
          items-center
          bg-white bg-opacity-10
          hover:bg-opacity-20
          transition-colors
          duration-200
          rounded
          group
          cursor-pointer
        "
      >
        <img :src="playlist.imgUrl" class="h-20 w-20 rounded-l shadow-md" />
        <div class="p-4 flex items-center justify-between w-full">
          <p class="text-spotify-white font-bold">
            {{ playlist.playlistName }}
          </p>
          <span
            class="
              opacity-0
              group-hover:opacity-100
              hover:scale-105
              transform
              transition-opacity
              duration-200
              bg-spotify-green
              text-spotify-white
              flex
              justify-center
              items-center
              h-10
              w-10
              rounded-full
              shadow
            "
          >
            <play-icon />
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayIcon from '../../../assets/icons/PlayIcon.vue';

export default defineComponent({
  name: 'RecentlyPlayed',
  components: {
    PlayIcon,
  },
  setup() {
    return {
      welcomeMessage: (() => {
        const currentHour = new Date(Date.now()).getHours();

        if (currentHour < 12) return 'Bom dia';
        if (currentHour < 18) return 'Boa tarde';
        return 'Boa noite';
      })(),
      recentlyPlayed: [
        {
          imgUrl: 'https://picsum.photos/202',
          playlistName: 'Cras aliquam',
        },
        {
          imgUrl: 'https://picsum.photos/203',
          playlistName: 'Quaisque pellentesque',
        },
        {
          imgUrl: 'https://picsum.photos/204',
          playlistName: 'Vivamus sit amet',
        },
        {
          imgUrl: 'https://picsum.photos/205',
          playlistName: 'Duis cursus neque',
        },
        {
          imgUrl: 'https://picsum.photos/206',
          playlistName: 'Proinblandit mauris',
        },
        {
          imgUrl: 'https://picsum.photos/207',
          playlistName: 'Cras id mauris eget turpis ornare',
        },
      ],
    };
  },
});
</script>
