<template>
    <div>
        <header-component 
            :category="currentCategory" 
            @update:dark-mode="handleUpdateDarkmode"
        />
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
            darkMode: false,
        }
    },
    methods: {
        handleUpdateCategory(category) {
            this.currentCategory = category;
        },
        handleUpdateDarkmode(checked) {
            const appElement = document.getElementById('app');
            if (checked)  {
                appElement.classList.add('dark');
            } else {
                appElement.classList.remove('dark');
            }
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
    --card-background: #fff;
    --html-background: #FFF1E9;
    --css-background: #E0FDEF;
    --js-background: #EBF0FF;
    --accessibility-background: #F6E7FF;
}

.dark {
    --background: #1e1e1e;
    --dark-navy: #fff;
    --grey-navy: #ABC1E1;
    --card-background: #3B4D66;
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
        color: var(--dark-navy);
        span {
            display: block;
            font-style: normal;
            font-weight: 300;
            font-size: 64px;
            line-height: 100%;
        }
        span:last-child {
            font-style: normal;
            font-weight: 500;
            font-size: 64px;
        }
    }
}

@media screen and (max-width: 1024px) {
    #app {
        padding: 0px;
    }
}

@media screen and (max-width: 768px) {
    .page-container {
        gap: 32px;
        padding-top: 32px;
        padding-left: 24px;
        padding-right: 24px;
        h1 {
            color: var(--dark-navy);
            span {
                font-style: normal;
                font-size: 40px !important;
                line-height: 100%;
                display: block;
            }
        }
    }
}
</style>