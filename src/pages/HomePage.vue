
<template>
    <container class="page-container flex md:flex-row flex-col justify-between mx-auto">
        <div class="">
            <h1 class="mb-5">
                <span>Welcome to the</span>
                <br/>
                Frontend Quiz!
            </h1>
            <p>Pick a subject to get started</p>
        </div>
        <div class="">
            <ul class="subject-list flex gap-4 flex-col">
                <li v-for="category in categories" :key="category.title">
                    <category-item 
                        :icon="category.icon" 
                        :title="category.title" 
                        :slug="category.slug"
                    />
                </li>
            </ul>
        </div>
    </container>
</template>

<script>

import CategoryItem from "@/components/CategoryItem.vue";

export default {
    name: "HomePage",
    components: { CategoryItem },
    data() {
        return {
            categories: [
                {
                    icon: "/images/icon-html.svg",
                    title: "HTML",
                    slug: 'html',
                },
                {
                    icon: "/images/icon-css.svg",
                    title: "CSS",
                    slug: 'css',
                },
                {
                    icon: "/images/icon-js.svg",
                    title: "Javascript",
                    slug: 'javascript'
                },
                {
                    icon: "/images/icon-accessibility.svg",
                    title: "Accessibility",
                    slug: 'accessibility'
                },
            ],
        }
    }
};
</script>

<style scoped lang="scss">
p {
    /* Pick a subject to get started. */
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: var(--grey-navy);
}

@media screen and (max-width: 768px) {
    container h1 {
        font-style: normal;
        font-size: 40px !important;
        line-height: 100%;
        color: var(--dark-navy);
        span {
            font-weight: 300;
            font-size: 40px;
        }
    }
    container p {
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
    }
}

</style>
