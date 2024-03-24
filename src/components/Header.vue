<template>
    <header
        class="flex justify-end items-center p-4"
    >
        <switch-component
            class="switch"
            v-model="toggle"
            hide-details
            color="#A729F5"
            inset
        >
            <template v-slot:prependIcon>
                <img src="/images/icon-sun-dark.svg" alt="icon-sun-dark">
            </template>
            <template v-slot:appendIcon>
                <img src="/images/icon-moon-dark.svg" alt="icon-moon-dark">
            </template>
        </switch-component>
    </header>
</template>

<script>
import SwitchComponent from "@/components/Switch.vue";
export default {
    name: "HeaderComponent",
    components: { SwitchComponent },
    data() {
        return {
            toggle: false,
        };
    },
};
</script>

<style scoped>
header {
    padding: 24px 75px;
}
</style>
