<template>
    <div class="w-full mb-4 p-4 pl-10 fixed flex flex-row items-center bg-dark-bkg shadow-md">
        <a class="flex-none" href="/">
            <logo class="h-10"></logo>
        </a>
        <div class="flex-grow flex justify-end items-center">
            <nav-link href="/" type="router">Home</nav-link>
            <nav-link href="https://michaelzhao.xyz">About Me</nav-link>
            <nav-link href="/" type="router">Random Article</nav-link>
        </div>
    </div>
</template>

<script>
import NavLink from './NavLink.vue';
import Logo from '../assets/logo.vue'

export default {
    components: { NavLink, Logo },
};
</script>
