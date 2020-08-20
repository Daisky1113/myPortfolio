<template>
    <h2 class="section__title">
        {{ name }}
    </h2>
</template>
<script>
export default {
    props: {
        name: {
            type: String, //String型に限定
            required: true, // 必須項目
        },
    },
};
</script>

<style>
.section__title {
    text-align: center;
    font-size: 22px;
    letter-spacing: 3px;
    margin: 0 0 30px;
    position: relative;
}

@media screen and (min-width: 961px) {
    .section__title {
        margin: 0 0 50px;
    }
}
</style>
