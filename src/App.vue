<template>
    <v-app>
        <app-header></app-header>
        <v-main class="main">
            <VueHome />
        </v-main>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import VueHome from "./components/Home.vue";
import AppFooter from "./components/AppFooter";

export default {
    name: "App",
    components: {
        AppHeader,
        VueHome,
        AppFooter,
    },
};
</script>

<style lang="scss"></style>
