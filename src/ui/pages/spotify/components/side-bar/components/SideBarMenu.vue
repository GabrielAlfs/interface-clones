<template>
  <div>
    <ul>
      <li
        class="
          cursor-pointer
          flex
          items-center
          bg-spotify-700
          rounded
          text-spotify-white
          mx-2
          px-4
          gap-4
          h-10
          group
        "
      >
        <home-icon
          class="group-hover:text-spotify-white transition-colors duration-300"
        />
        <p
          class="
            text-sm
            font-semibold
            group-hover:text-spotify-white
            transition-colors
            duration-300
          "
        >
          Início
        </p>
      </li>
      <li class="cursor-pointer flex items-center mx-2 px-4 gap-4 h-10 group">
        <search-icon
          class="group-hover:text-spotify-white transition-colors duration-300"
        />
        <p
          class="
            text-sm
            font-semibold
            group-hover:text-spotify-white
            transition-colors
            duration-300
          "
        >
          Buscar
        </p>
      </li>
      <li class="cursor-pointer flex items-center mx-2 px-4 gap-4 h-10 group">
        <books-icon
          class="group-hover:text-spotify-white transition-colors duration-300"
        />
        <p
          class="
            text-sm
            font-semibold
            group-hover:text-spotify-white
            transition-colors
            duration-300
          "
        >
          Sua Biblioteca
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeIcon from '../../../assets/icons/HomeIcon.vue';
import SearchIcon from '../../../assets/icons/SearchIcon.vue';
import BooksIcon from '../../../assets/icons/BooksIcon.vue';

export default defineComponent({
  name: 'SideBarMenu',
  components: {
    HomeIcon,
    SearchIcon,
    BooksIcon,
  },
});
</script>
