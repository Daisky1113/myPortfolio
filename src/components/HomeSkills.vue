<template>
    <section class="skills" id="skills">
        <app-title :name="title"></app-title>
        <v-container>
            <v-row>
                <v-col
                    class="skill-item"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <div class="skill-item__icon text-center">
                        <font-awesome-icon
                            v-for="icon in item.icons"
                            :key="icon"
                            :icon="['fab', icon]"
                            class="mx-2"
                        ></font-awesome-icon>
                    </div>

                    <h3 class="skill-item__title text-center">
                        {{ item.title }}
                    </h3>
                    <div class="skill-item__desc px-5">
                        {{ item.desc }}
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
    data: function() {
        return {
            title: "SKILLS",
            items: [
                {
                    icons: ["php"],
                    title: "PHP",
                    desc:
                        "WordPressを用いたサイト作成の経験があります。実務経験はありませんが、基本的な内容は理解できています。",
                },
                {
                    icons: ["laravel"],
                    title: "Laravel",
                    desc:
                        "ジムの予約システムをLaravelを使用して運用しております。",
                },

                {
                    icons: ["js-square"],
                    title: "JavaScript",
                    desc: "基本的な内容は理解できています。",
                },
                {
                    icons: ["vuejs", "react"],
                    title: "Vue & React",
                    desc:
                        "こちらのサイトはVueを使用しております。Reactは、友人たちと勉強会を開催し、勉強中です。",
                },
                {
                    icons: ["html5", "css3-alt", "sass"],
                    title: "HTML, CSS , Sass",
                    desc:
                        "約2年のコーディング経験があります。適切なマークアップを意識しております。",
                },
                {
                    icons: ["git-alt"],
                    title: "Git",
                    desc:
                        "基本的な操作はターミナル上で行っております。チーム開発の経験もあります。",
                },
                {
                    icons: ["docker"],
                    title: "Docker",
                    desc: "ローカル環境はDockerを取り入れております。",
                },

                {
                    icons: ["adobe"],
                    title: "Adobe",
                    desc: "Illustrator, Photoshop , XD を扱えます。",
                },
            ],
        };
    },
};
</script>
<style>
.skill-item__icon {
    font-size: 45px;
    line-height: 1.5;
}

.skill-item__title {
    margin: 0 0 10px;
}

.skill-item__desc {
    font-size: 14px;
}

.fa-js-square {
    color: #f1de4f;
}

.fa-react {
    color: #62d4fa;
}

.fa-vuejs {
    color: #64b687;
}

.fa-php {
    color: #777baf;
}

.fa-laravel {
    color: #ff2d20;
}

.fa-html5 {
    color: #de6e3c;
}

.fa-css3-alt {
    color: #53a7dc;
}

.fa-sass {
    color: #bf6b97;
}

.fa-git-alt {
    color: #f03c2e;
}

.fa-docker {
    color: #0db7ed;
}

.fa-adobe {
    color: #ff0000;
}
</style>
