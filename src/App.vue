<template>
    <navbar></navbar>
    <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
    name: 'App',
    components: { Navbar },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Open+Sans:ital,wght@0,600;1,600&family=Ubuntu:wght@500;700&family=Ubuntu+Mono:wght@700&display=swap');
    html,
    body {
        @apply bg-white dark:bg-dark-bkg h-full;
    }
    h1,
    h2,
    p,
    a {
        @apply text-black dark:text-white;
    }
    h1 {
        @apply font-title text-7xl text-center;
    }
    p {
        @apply font-text text-xl;
    }
}
</style>
