<template>
  <div class="mt-6 flex flex-col overflow-y-hidden">
    <div class="cursor-pointer px-6 py-2 flex items-center gap-4 group">
      <span
        class="
          w-6
          h-6
          bg-spotify-500
          flex
          justify-center
          items-center
          group-hover:bg-spotify-white
          transition-colors
          duration-300
        "
      >
        <plus-icon class="w-3.5 h-3.5 text-spotify-black" />
      </span>
      <p
        class="
          text-sm
          font-semibold
          group-hover:text-spotify-white
          transition-colors
          duration-300
        "
      >
        Criar playlist
      </p>
    </div>
    <div class="cursor-pointer px-6 py-2 flex items-center gap-4 group">
      <span
        class="
          w-6
          h-6
          bg-gradient-to-br
          from-indigo-700
          to-spotify-500
          flex
          justify-center
          items-center
          group-hover:text-spotify-white group-hover:to-spotify-white
          transition-colors
          duration-300
        "
      >
        <heart-icon class="w-3.5 h-3.5" />
      </span>
      <p
        class="
          text-sm
          font-semibold
          group-hover:text-spotify-white
          transition-colors
          duration-300
        "
      >
        Músicas Curtidas
      </p>
    </div>
    <div class="mx-6 border-t border-spotify-700 mt-2"></div>
    <div class="overflow-y-auto">
      <ul>
        <li
          class="
            text-sm
            px-6
            py-2
            hover:text-spotify-white
            whitespace-nowrap
            overflow-hidden overflow-ellipsis
          "
          v-for="(playlist, index) in playlists"
          :key="index"
        >
          {{ playlist }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HeartIcon, PlusIcon } from '@heroicons/vue/solid';

export default defineComponent({
  name: 'Playlists',
  components: {
    HeartIcon,
    PlusIcon,
  },
  setup() {
    const playlists = [
      'Cras aliquam',
      'Quisque pellentesque',
      'Vivamus sit amet',
      'Duis cursus neque',
      'Proin blandit mauris',
      'Cras id mauris eget turpis ornare',
      'Sed feugiat massa vitae',
      'Phasellus fringilla est',
      'Etiam suscipit odio eget',
      'Ut et risus elementum mauris bibendum',
      'Praesent id nunc et libero vestibulum',
      'Vestibulum rhoncus',
      'Nam in lorem',
      'Phasellus nec lacus',
      'Vestibulum pharetra',
      'Phasellus sit amet',
      'Nam laoreet mauris sit amet',
      'Mauris mollis dui at magna dapibus',
      'Vivamus quis',
      'Ut ut felis sed sapien',
    ];

    return {
      playlists,
    };
  },
});
</script>
