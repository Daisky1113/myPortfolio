<template>
    <v-footer padless>
        <v-row justify="center" no-gutters>
            <v-card
                flat
                tile
                class="white--text text-center py-10"
                width="100%"
            >
                <v-card-text class="">
                    <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        class="mx-4"
                        icon
                        :href="icon.url"
                        target="_blank"
                    >
                        <v-icon size="35px">{{ icon.text }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="letter-spacing">
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
                    url: "mailto:nishida.sky170@gmail.com",
                    text: "mdi-email",
                },
                {
                    url: "https://github.com/1071sh",
                    text: "mdi-github",
                },
            ],
        };
    },
};
</script>

<style scoped></style>
