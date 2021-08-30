import { createApp, defineComponent } from 'vue';
import * as volar from '@volar/experimental/client';
import '@ui/assets/tailwind.css';

import { router } from '@application/router';

const app = createApp(
  defineComponent({
    name: 'App',
    render() {
      return <router-view />;
    },
  })
);

app.use(volar.vuePlugin);
app.use(router);
app.mount('#app');
