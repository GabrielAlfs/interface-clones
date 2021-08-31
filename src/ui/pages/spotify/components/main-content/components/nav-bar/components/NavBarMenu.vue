<template>
  <MenuItems class="bg-spotify-700 w-48 rounded">
    <ul class="text-sm p-1 flex flex-col">
      <MenuItem
        as="li"
        class="
          rounded-sm
          hover:bg-white hover:bg-opacity-10
          py-3
          pl-3
          pr-2
          flex
          items-center
          justify-between
        "
      >
        Conta
        <account-icon />
      </MenuItem>
      <MenuItem
        as="li"
        class="rounded-sm hover:bg-white hover:bg-opacity-10 py-3 pl-3 pr-2"
        >Perfil</MenuItem
      >
      <MenuItem
        as="li"
        class="rounded-sm hover:bg-white hover:bg-opacity-10 py-3 pl-3 pr-2"
        >Sair</MenuItem
      >
    </ul>
  </MenuItems>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MenuItems, MenuItem } from '@headlessui/vue';
import AccountIcon from '@ui/pages/spotify/assets/icons/AccountIcon.vue';

export default defineComponent({
  name: 'NavBarMenu',
  components: {
    AccountIcon,
    MenuItems,
    MenuItem,
  },
});
</script>
