<template>
    <div class="Home">
        <HomeHero />
        <HomeWork />
        <HomeSkills />
        <HomeAbout />
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

<style></style>
