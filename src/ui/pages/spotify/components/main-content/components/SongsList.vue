<template>
  <section class="flex flex-col">
    <div class="flex justify-between mb-4">
      <p
        class="text-2xl text-spotify-white font-bold capitalize hover:underline"
      >
        {{ list.title }}
      </p>
      <p class="text-xs uppercase font-bold hover:underline self-end">
        Ver tudo
      </p>
    </div>
    <ul
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        xl:grid-cols-7
        overflow-hidden
        gap-6
      "
    >
      <li
        class="
          group
          bg-spotify-800
          hover:bg-spotify-700
          transition-colors
          duration-200
          rounded
          p-4
          flex flex-col
          gap-4
        "
        v-for="(playlist, index) in list.playlists"
        :key="index"
      >
        <figure class="w-full h-full relative">
          <img
            :src="playlist.imgUrl"
            class="w-full h-full object-cover bg-spotify-700"
          />
          <span
            class="
              right-2
              bottom-2
              absolute
              transform
              opacity-0
              translate-y-5
              group-hover:translate-y-0 group-hover:opacity-100
              hover:scale-105
              transition-all
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
        </figure>
        <div class="h-16">
          <p
            class="
              text-spotify-white
              font-bold
              capitalize
              whitespace-nowrap
              overflow-hidden overflow-ellipsis
            "
          >
            {{ playlist.playlistName }}
          </p>
          <p
            class="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
          >
            {{ playlist.author }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PlayIcon from '../../../assets/icons/PlayIcon.vue';

export default defineComponent({
  name: 'SongsList',
  components: {
    PlayIcon,
  },
  props: {
    list: {
      type: Object as PropType<{
        title: string;
        playlists: Array<{
          imgUrl: string;
          playlistName: string;
          author: string;
        }>;
      }>,
      required: true,
    },
  },
});
</script>
