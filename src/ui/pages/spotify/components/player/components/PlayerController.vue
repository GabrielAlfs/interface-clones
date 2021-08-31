<template>
  <div class="flex flex-col items-center w-2/5">
    <div class="flex mb-3 gap-4 items-center">
      <random-icon
        title="Ativar a ordem aleatória"
        class="w-4 h-4 hover:text-spotify-white mr-2"
      />
      <backward-icon title="Voltar" class="w-4 h-4 hover:text-spotify-white" />
      <span
        class="
          bg-spotify-white
          w-8
          h-8
          flex
          justify-center
          items-center
          rounded-full
          transform
          hover:scale-105
        "
      >
        <play-icon title="Play" class="text-spotify-900" />
      </span>
      <forward-icon title="Avançar" class="w-4 h-4 hover:text-spotify-white" />
      <repeat-icon
        title="Repetir"
        class="w-4 h-4 hover:text-spotify-white ml-2"
      />
    </div>
    <div class="flex items-center w-full gap-2">
      <p class="text-xxs">
        {{ formatToMSS(currentSongPosition) }}
      </p>
      <div class="w-full -mt-2 group">
        <slider
          class="w-full"
          min="0"
          :max="songLength"
          step="1"
          :value="currentSongPosition"
          @input="changeSongPosition"
        />
      </div>
      <p class="text-xxs">
        {{ formatToMSS(songLength) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RandomIcon from '../../../assets/icons/RandomIcon.vue';
import BackwardIcon from '../../../assets/icons/BackwardIcon.vue';
import PlayIcon from '../../../assets/icons/PlayIcon.vue';
import ForwardIcon from '../../../assets/icons/ForwardIcon.vue';
import RepeatIcon from '../../../assets/icons/RepeatIcon.vue';
import Slider from './Slider.vue';

export default defineComponent({
  name: 'PlayerController',
  components: {
    RandomIcon,
    BackwardIcon,
    PlayIcon,
    ForwardIcon,
    RepeatIcon,
    Slider,
  },
  setup() {
    const currentSongPosition = ref(144);
    const songLength = 196;

    const changeSongPosition = (event: Event) => {
      currentSongPosition.value = Number(
        (event.target as HTMLInputElement).value
      );
    };

    const formatToMSS = (seconds: number) =>
      new Date(seconds * 1000).toISOString().substring(15, 19);

    return {
      currentSongPosition,
      songLength,
      changeSongPosition,
      formatToMSS,
    };
  },
});
</script>
