<template>
  <main
    class="
      to-spotify-900
      from-spotify-900
      bg-gradient-to-b
      overflow-y-auto
      relative
    "
  >
    <nav-bar class="sticky top-0" />
    <section class="flex flex-col pt-6 px-8 gap-6">
      <recently-played class="mb-4" />
      <div v-for="(list, index) in lists" :key="index">
        <songs-list :list="list" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/nav-bar/NavBar.vue';
import SongsList from './components/SongsList.vue';
import RecentlyPlayed from './components/RecentlyPlayed.vue';

export default defineComponent({
  name: 'MainContent',
  components: {
    NavBar,
    SongsList,
    RecentlyPlayed,
  },
  setup() {
    return {
      lists: [
        {
          title: 'Tocado recentemente',
          playlists: [
            {
              imgUrl: 'https://picsum.photos/2104',
              playlistName: 'deserunt nostrud amet anim',
              author: 'Castro Sims',
            },
            {
              imgUrl: 'https://picsum.photos/2610',
              playlistName: 'enim qui dolor tempor',
              author: 'Edwards Melendez',
            },
            {
              imgUrl: 'https://picsum.photos/2110',
              playlistName: 'culpa irure veniam sit',
              author: 'Robbins Warren',
            },
            {
              imgUrl: 'https://picsum.photos/219',
              playlistName: 'nulla exercitation Lorem dolor',
              author: 'Santos Merrill',
            },
            {
              imgUrl: 'https://picsum.photos/222',
              playlistName: 'culpa exercitation duis cupidatat',
              author: 'Alana Whitfield',
            },
            {
              imgUrl: 'https://picsum.photos/248',
              playlistName: 'duis ex nostrud dolore',
              author: 'Wilson Henderson',
            },
            {
              imgUrl: 'https://picsum.photos/286',
              playlistName: 'ut qui sunt ea',
              author: 'Herring Pate',
            },
          ],
        },
        {
          title: 'cillum voluptate commodo',
          playlists: [
            {
              imgUrl: 'https://picsum.photos/2108',
              playlistName: 'incididunt consequat reprehenderit aute',
              author: 'Woodard Keller',
            },
            {
              imgUrl: 'https://picsum.photos/249',
              playlistName: 'occaecat eiusmod quis est',
              author: 'Katrina Roberson',
            },
            {
              imgUrl: 'https://picsum.photos/236',
              playlistName: 'labore deserunt dolore mollit',
              author: 'Richard Ellis',
            },
            {
              imgUrl: 'https://picsum.photos/216',
              playlistName: 'amet sit culpa veniam',
              author: 'Carr Buck',
            },
            {
              imgUrl: 'https://picsum.photos/259',
              playlistName: 'id dolore fugiat aliquip',
              author: 'Matilda Becker',
            },
            {
              imgUrl: 'https://picsum.photos/212',
              playlistName: 'velit dolore qui velit',
              author: 'Hendricks Leonard',
            },
            {
              imgUrl: 'https://picsum.photos/2110',
              playlistName: 'aliqua nisi voluptate nostrud',
              author: 'Henderson Fox',
            },
          ],
        },
        {
          title: 'enim consectetur do',
          playlists: [
            {
              imgUrl: 'https://picsum.photos/229',
              playlistName: 'occaecat occaecat ipsum excepteur',
              author: 'Haley Castaneda',
            },
            {
              imgUrl: 'https://picsum.photos/274',
              playlistName: 'cupidatat id sunt consequat',
              author: 'Webb Tyson',
            },
            {
              imgUrl: 'https://picsum.photos/253',
              playlistName: 'dolore eu magna qui',
              author: 'Brianna Langley',
            },
            {
              imgUrl: 'https://picsum.photos/278',
              playlistName: 'ipsum consectetur dolore et',
              author: 'Maureen Gaines',
            },
            {
              imgUrl: 'https://picsum.photos/283',
              playlistName: 'fugiat ullamco commodo irure',
              author: 'Barbra Larsen',
            },
            {
              imgUrl: 'https://picsum.photos/254',
              playlistName: 'cillum culpa officia est',
              author: 'Krystal Holt',
            },
            {
              imgUrl: 'https://picsum.photos/246',
              playlistName: 'labore occaecat exercitation voluptate',
              author: 'Janette Houston',
            },
          ],
        },
        {
          title: 'officia nostrud dolor',
          playlists: [
            {
              imgUrl: 'https://picsum.photos/265',
              playlistName: 'sit magna do ex',
              author: 'Henry Floyd',
            },
            {
              imgUrl: 'https://picsum.photos/242',
              playlistName: 'proident reprehenderit commodo proident',
              author: 'Priscilla Shields',
            },
            {
              imgUrl: 'https://picsum.photos/264',
              playlistName: 'quis minim reprehenderit id',
              author: 'Lesley Harvey',
            },
            {
              imgUrl: 'https://picsum.photos/285',
              playlistName: 'nulla mollit Lorem eu',
              author: 'Curry Blanchard',
            },
            {
              imgUrl: 'https://picsum.photos/231',
              playlistName: 'non aliqua cupidatat consectetur',
              author: 'Murphy Durham',
            },
            {
              imgUrl: 'https://picsum.photos/268',
              playlistName: 'qui laboris dolore quis',
              author: 'Diana Wooten',
            },
            {
              imgUrl: 'https://picsum.photos/264',
              playlistName: 'veniam esse cupidatat labore',
              author: 'Katherine Rodgers',
            },
          ],
        },
        {
          title: 'id aliqua ipsum',
          playlists: [
            {
              imgUrl: 'https://picsum.photos/2810',
              playlistName: 'voluptate voluptate tempor eiusmod',
              author: 'Fischer Witt',
            },
            {
              imgUrl: 'https://picsum.photos/236',
              playlistName: 'sunt aliquip cillum mollit',
              author: 'Tyler Kirk',
            },
            {
              imgUrl: 'https://picsum.photos/2710',
              playlistName: 'aliqua incididunt mollit incididunt',
              author: 'Bowers Martinez',
            },
            {
              imgUrl: 'https://picsum.photos/292',
              playlistName: 'duis laboris esse fugiat',
              author: 'Kennedy Norman',
            },
            {
              imgUrl: 'https://picsum.photos/282',
              playlistName: 'fugiat ipsum reprehenderit ut',
              author: 'Ruthie Powell',
            },
            {
              imgUrl: 'https://picsum.photos/291',
              playlistName: 'aliquip irure deserunt amet',
              author: 'Campos Payne',
            },
            {
              imgUrl: 'https://picsum.photos/266',
              playlistName: 'nostrud non est velit',
              author: 'Morrison Webb',
            },
          ],
        },
        {
          title: 'ea fugiat qui',
          playlists: [
            {
              imgUrl: 'https://picsum.photos/275',
              playlistName: 'quis proident dolore adipisicing',
              author: 'Whitney Elliott',
            },
            {
              imgUrl: 'https://picsum.photos/238',
              playlistName: 'magna elit pariatur commodo',
              author: 'Edna Waller',
            },
            {
              imgUrl: 'https://picsum.photos/291',
              playlistName: 'amet aliquip sit esse',
              author: 'Alston Gilbert',
            },
            {
              imgUrl: 'https://picsum.photos/221',
              playlistName: 'laborum ex enim elit',
              author: 'Jeannine Bruce',
            },
            {
              imgUrl: 'https://picsum.photos/228',
              playlistName: 'mollit nisi enim occaecat',
              author: 'Mcintyre Flores',
            },
            {
              imgUrl: 'https://picsum.photos/255',
              playlistName: 'aute ex nisi voluptate',
              author: 'Marion Sloan',
            },
            {
              imgUrl: 'https://picsum.photos/232',
              playlistName: 'officia reprehenderit consequat incididunt',
              author: 'Dolly Hopkins',
            },
          ],
        },
        {
          title: 'Lorem consectetur nisi',
          playlists: [
            {
              imgUrl: 'https://picsum.photos/222',
              playlistName: 'ad tempor nostrud sunt',
              author: 'Rhonda Odonnell',
            },
            {
              imgUrl: 'https://picsum.photos/231',
              playlistName: 'eiusmod dolore proident sit',
              author: 'Justice Berger',
            },
            {
              imgUrl: 'https://picsum.photos/281',
              playlistName: 'consequat duis sunt deserunt',
              author: 'Doris Aguirre',
            },
            {
              imgUrl: 'https://picsum.photos/2610',
              playlistName: 'minim Lorem aliqua commodo',
              author: 'Farrell Spence',
            },
            {
              imgUrl: 'https://picsum.photos/2108',
              playlistName: 'velit et et occaecat',
              author: 'Berger Branch',
            },
            {
              imgUrl: 'https://picsum.photos/251',
              playlistName: 'laboris incididunt esse ea',
              author: 'Dillon Boyer',
            },
            {
              imgUrl: 'https://picsum.photos/254',
              playlistName: 'est consectetur consequat reprehenderit',
              author: 'Brown Alston',
            },
          ],
        },
      ],
    };
  },
});
</script>
