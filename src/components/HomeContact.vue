<template>
    <div class="l-contact">
        <v-row
            justify="center"
            align="center"
            no-gutters
            style="height:100%"
            class="text-center"
        >
            <v-col cols="12">
                <app-title :name="title"></app-title>
                <v-btn
                    color="light-blue darken-3"
                    dark
                    x-large
                    href="mailto:nishida.sky170@gmail.com"
                >
                    お問い合わせはこちら
                    <v-icon class="ml-3">mdi-email</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
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
            title: "CONTACT",
        };
    },
};
</script>

<style>
.l-contact {
    background: #efefef;
    height: 200px;
}

@media screen and (min-width: 961px) {
    .l-contact {
        height: 250px;
    }
}
</style>
