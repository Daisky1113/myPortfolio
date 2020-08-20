<template>
    <section class="work" id="work">
        <app-title :name="title"></app-title>
        <v-card flat>
            <v-container>
                <v-row>
                    <v-col
                        v-for="card in cards"
                        :key="card.title"
                        cols="12"
                        md="6"
                        lg="4"
                    >
                        <v-card>
                            <v-img
                                :src="card.src"
                                class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="200px"
                            >
                                <v-card-title
                                    v-text="card.title"
                                ></v-card-title>
                            </v-img>

                            <v-card-subtitle
                                v-text="card.subtitle"
                            ></v-card-subtitle>
                            <v-divider class="mx-4"></v-divider>

                            <v-card-text
                                class="text--primary"
                                v-text="card.desc"
                            ></v-card-text>

                            <v-card-actions class="justify-center">
                                <v-btn
                                    class="ma-2"
                                    color="light-blue darken-3"
                                    style="text-transform: none"
                                    dark
                                    :href="card.website"
                                    target="_blank"
                                >
                                    WebSite
                                </v-btn>

                                <v-btn
                                    class="ma-2"
                                    outlined
                                    color="light-blue darken-3"
                                    style="text-transform: none"
                                    :href="card.github"
                                    target="_blank"
                                >
                                    GitHub
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </section>
</template>

<script>
import AppTitle from "../components/AppTitle";

export default {
    components: {
        AppTitle,
    },
    props: ["name"],
    data: () => ({
        title: "WORK",
        cards: [
            {
                title: "ジム予約システム",
                src: require("@/assets/img/skill_gym.jpg"),
                subtitle: "Laravel , Vue.js",
                desc: "現在製作中です。",
                website: "4",
                github: "5",
            },
            {
                title: "ポートフォリオ",
                src: require("@/assets/img/home_hero.jpg"),
                subtitle: "Vue.js",
                desc:
                    "私のポートフォリオサイトです。見やすいデザインを意識してレイアウトを組みました",
                github: "https://github.com/1071sh/myPortfolio",
            },
        ],
    }),
};
</script>

<style lang="scss"></style>
