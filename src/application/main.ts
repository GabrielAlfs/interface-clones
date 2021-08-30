import { createApp } from 'vue';
import * as volar from '@volar/experimental/client';
import App from '@/ui/App.vue';

import { router } from '@/application/router';

const app = createApp(App);

app.use(volar.vuePlugin);
app.use(router);
app.mount('#app');
