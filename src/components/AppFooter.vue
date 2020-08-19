<template>
    <v-footer padless>
        <v-row justify="center" no-gutters>
            <v-card
                flat
                tile
                class="blue-grey darken-3 white--text text-center"
                width="100%"
            >
                <v-row justify="center" no-gutters class="py-10">
                    <v-btn
                        v-for="(link, index) in links"
                        :key="index"
                        color="white"
                        text
                        rounded
                        x-large
                        style="text-transform: none"
                        class="px-4 font-lato"
                        :href="link.target"
                        v-smooth-scroll="{ duration: 700, offset: -64 }"
                    >
                        {{ link.text }}
                    </v-btn>
                </v-row>
                <v-card-text class="pt-0 pb-10">
                    <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        class="mx-4 white--text"
                        icon
                        :href="icon.url"
                        target="_blank"
                    >
                        <v-icon size="35px">{{ icon.text }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text
                    class="white--text blue-grey darken-4 py-7 letter-spacing"
                >
                    <p class="copyright mb-0">
                        © {{ new Date().getFullYear() }} · Kiyoshi Nishida · All
                        Rights Reserved
                    </p>
                </v-card-text>
            </v-card>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    data: function() {
        return {
            icons: [
                {
                    url: "https://www.facebook.com/kiyoshi.nishida.9",
                    text: "mdi-facebook",
                },
                {
                    url: "https://github.com/1071sh",
                    text: "mdi-github",
                },
            ],
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

<style scoped></style>
