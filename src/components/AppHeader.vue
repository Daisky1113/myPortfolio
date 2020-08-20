<template>
    <v-app-bar color="white accent-4" fixed>
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="(link, index) in links"
                :key="index"
                color="grey darken-4"
                rounded
                text
                dark
                style="text-transform: none"
                class="px-1"
                :href="link.target"
                v-smooth-scroll="{ duration: 700, offset: -64 }"
            >
                {{ link.text }}
            </v-btn>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
    data: function() {
        return {
            links: [
                {
                    target: "#hero",
                    text: "Top",
                },
                {
                    target: "#work",
                    text: "Work",
                },
                {
                    target: "#skills",
                    text: "Skills",
                },
                {
                    target: "#about",
                    text: "About",
                },
            ],
        };
    },
};
</script>

<style></style>
