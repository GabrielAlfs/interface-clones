<template>
  <div class="flex text-spotify-500 gap-4">
    <microphone-icon title="Letra" class="w-4 h-4 hover:text-spotify-white" />
    <collection-icon title="Fila" class="w-4 h-4 hover:text-spotify-white" />
    <device-icon
      title="Conectar a um dispositivo"
      class="w-4 h-4 hover:text-spotify-white"
    />
    <div class="flex items-center gap-2 group">
      <volume-icon
        title="Mudo"
        v-if="!muted && volume > 0"
        class="w-4 h-4 group-hover:text-spotify-white"
        @click="muted = true"
      />
      <mute-icon
        title="Com som"
        v-else
        class="w-4 h-4 group-hover:text-spotify-white"
        @click="muted = false"
      />
      <slider
        class="w-24"
        step="1"
        :value="muted ? 0 : volume"
        @input="changeVolume"
      />
    </div>
    <full-screen-icon
      title="Tela cheia"
      class="w-4 h-4 hover:text-spotify-white"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CollectionIcon } from '@heroicons/vue/outline';
import MicrophoneIcon from '@ui/pages/spotify/assets/icons/MicrophoneIcon.vue';
import DeviceIcon from '@ui/pages/spotify/assets/icons/DeviceIcon.vue';
import VolumeIcon from '@ui/pages/spotify/assets/icons/VolumeIcon.vue';
import FullScreenIcon from '@ui/pages/spotify/assets/icons/FullScreenIcon.vue';
import MuteIcon from '../../../assets/icons/MuteIcon.vue';
import Slider from './Slider.vue';

export default defineComponent({
  name: 'VolumeAndSettings',
  components: {
    Slider,
    MicrophoneIcon,
    CollectionIcon,
    DeviceIcon,
    VolumeIcon,
    FullScreenIcon,
    MuteIcon,
  },
  setup() {
    const volume = ref(75);
    const muted = ref(false);

    const changeVolume = (event: Event) => {
      volume.value = Number((event.target as HTMLInputElement).value);
    };

    return {
      volume,
      muted,
      changeVolume,
    };
  },
});
</script>
