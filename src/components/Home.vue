<template>
    <div class="home">
        <HomeHero />
        <HomeWork class="section" />
        <HomeSkills class="section" />
        <HomeAbout class="section" />
        <HomeContact />
    </div>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import HomeWork from "@/components/HomeWork";
import HomeSkills from "@/components/HomeSkills";
import HomeAbout from "@/components/HomeAbout";
import HomeContact from "@/components/HomeContact";

export default {
    components: {
        HomeHero,
        HomeWork,
        HomeSkills,
        HomeAbout,
        HomeContact,
    },
};
</script>

<style>
.section {
    padding: 40px 0;
}

@media screen and (min-width: 961px) {
    .section {
        padding: 80px 0;
    }
}
</style>
