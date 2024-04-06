<template>
    <div>
        <header-component :category="currentCategory" />
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
export default {
    name: "App",
    components: { HeaderComponent },
    data() {
        return {
            currentCategory: null,
        }
    },
    methods: {
        handleUpdateCategory(category) {
            this.currentCategory = category;
        }
    },
    watch: {
        '$route.params.category': {
            immediate: true,
            handler(category) {
                this.currentCategory = category;
            }
        }
    }
};
</script>

<style>
* {
    background-color: var(--background);
}
:root {
    --red: #ff5c5c;
    --green: #26d782;
    --dark-navy: #313e51;
    --box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
    --background: #f4f6fa;
    --grey-navy: #626c7f;
    --purple: #a729f5;
}
#app {
    font-family: "Rubik", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 48px;
    margin: auto;
}

.page-container {
    min-width: 75%;
    display: flex;
    justify-content: center;
    padding: 75px;
    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 100%;
        color: #626c7f;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    span {
        font-style: normal;
        font-weight: 300;
        font-size: 64px;
        line-height: 100%;
        color: var(--dark-navy);
        flex: none;
        order: 0;
        flex-grow: 0;
    }
}

@media screen and (max-width: 768px) {
    #app {
        padding: 0px;
    }

    .page-container {
        gap: 32px;
        padding-top: 32px;
        padding-left: 24px;
        padding-right: 24px;
        h1 {
            font-style: normal;
            font-size: 40px;
            line-height: 100%;
            color: var(--dark-navy);
            span {
                font-weight: 300;
                font-size: 40px;
            }
        }
    }
}
</style>
