<template>
    <section class="about" id="about">
        <app-title :name="title"></app-title>
        <v-container>
            <v-row>
                <v-col cols="12" md="6" class="about-iamge">
                    <v-img
                        src="@/assets/img/about.jpg"
                        aspect-ratio="1.7"
                        contain
                    ></v-img>
                </v-col>
                <v-col cols="12" md="6" class="about-info px-5">
                    <div class="about-info__header">
                        <div class="about-info__name">
                            西田 聖志
                            <span class="about-info__name--en">
                                Kiyoshi Nishida
                            </span>
                        </div>
                        <div class="about-info__role">Engineer</div>
                    </div>
                    <div class="about-info__desc">
                        2014年 関西大学政策創造学部政策学科卒業。
                        <br />
                        大学卒業後、株式会社ダスキンにてレンタル・イベント運営事業を経て、未経験ながら京都のWeb制作会社に転職。
                        <br />
                        デザイン・コーディングなど約二年経験を積み、エンジニアになるために休職し、
                        2020年4月 G's ACADEMY TOKYOに入学。 日々勉強中。
                    </div>
                </v-col>
            </v-row>
        </v-container>
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
        title: "ABOUT",
    }),
};
</script>

<style>
.about-info {
    letter-spacing: 0.1em;
}

.about-info__header {
    margin: 0 0 30px;
}

.about-info__name {
    margin: 0 0 10px;
    font-size: 18px;
}

.about-info__name--en {
    font-size: 12px;
    padding: 0 0 0 10px;
}

.about-info__role {
    font-style: italic;
    font-weight: 700;
}

.about-info__desc {
    line-height: 2;
    font-size: 14px;
}
</style>
