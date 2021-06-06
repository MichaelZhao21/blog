<template>
    <a
        v-if="type !== 'router'"
        class="font-header text-xl mx-8 text-gray-300 hover:text-primary transition-colors"
        v-bind:href="href"
    >
        <slot></slot>
    </a>
    <router-link
        v-if="type === 'router'"
        class="font-header text-xl mx-8 text-gray-300 hover:text-primary transition-colors"
        v-bind:to="href"
    >
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: ['href', 'type'],
};
</script>
