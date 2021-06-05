<template>
    <div class="post"></div>
</template>

<script>
export default {
    watch: {
        $route() {
            loadArticle(this.$route.params);
        },
    },
    mounted: function () {
        loadArticle(this.$route.params);
    },
};

async function loadArticle(slug) {
    console.log(slug);
}
</script>
