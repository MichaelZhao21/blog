import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Post from './components/Post.vue';

const router = createRouter({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/:id', name: 'Post', component: Post },
    ],
    history: createWebHistory(process.env.BASE_URL),
});

createApp(App)
    .use(router)
    .mount('#app');
