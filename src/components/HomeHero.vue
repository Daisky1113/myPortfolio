<template>
    <section class="hero" id="hero">
        <v-container fluid fill-height class="hero-content">
            <v-row>
                <v-col class="hero-content__title">
                    <h1 class="hero-content__title--main">PORTFOLIO</h1>
                    <p class="hero-content__title--sub">
                        KIYOSHI NISHIDA
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-content {
    background: url("../assets/img/home_hero.jpg") center;
    background-size: cover;
    width: 100%;
    height: 60vh;
    min-height: 350px;
    letter-spacing: 6px;

    &__title {
        color: #fff;
        text-align: center;
        padding: 30px 0 0;
        // font-size: 28px;
        font-size: 22px;

        &--main {
            font-weight: 700;
            letter-spacing: 10px;
            padding: 0 0 0 3px;
        }

        &--sub {
            font-weight: 300;
            margin: 0;
        }
    }
}
</style>
