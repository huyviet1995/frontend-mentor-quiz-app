<template>
    <header
        class="flex items-center p-4"
        :class="{'justify-end': !category, 'justify-between': category}"
    >
        <nav v-if="category" class="flex flex-row gap-2 md:gap-6 items-center">
            <icon-wrapper :category="category" />
            <h1>{{ categoryTitle }}</h1>
        </nav>
        <switch-component
            class="switch"
            v-model="toggle"
            @change.native="handleChange"
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
import { getCategoryIcon, categories, getIconBackground } from "@/utils/category";
import IconWrapper from "./IconWrapper.vue";
export default {
    name: "HeaderComponent",
    components: { SwitchComponent, IconWrapper },
    props: {
        category: {
            type: String,
            required: true,
            default: null,
        }
    },
    data() {
        return {
            toggle: false,
        };
    },
    computed: {
        categoryIcon() {
            return getCategoryIcon(this.category);
        },
        categoryTitle() {
            return categories.find(category => category.slug === this.category)?.title;
        },
        iconBackground() {
            return getIconBackground(this.category); 
        }
    },
    methods: {
        handleChange(checked) {
            this.$emit("update:dark-mode", checked);
        }
    }
};
</script>

<style scoped>
header {
    padding: 24px 75px;
}

nav h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 100%;
    color: var(--dark-navy);
}

@media screen and (max-width: 768px) {
    header {
        padding: 24px 24px;
    }

    nav h1 {
        font-size: 18px;
    }
}
</style>
