
<template>
    <container class="page-container flex lg:flex-row flex-col justify-between mx-auto md:gap-16">
        <div class="">
            <h1 class="mb-5">
                <span>Welcome to the</span>
                <br/>
                Frontend Quiz!
            </h1>
            <p>Pick a subject to get started</p>
        </div>
        <div class="">
            <ul class="subject-list flex gap-4 flex-col md:gap-6">
                <li v-for="category in categories" :key="category.title">
                    <category-item 
                        :icon="category.icon" 
                        :title="category.title" 
                        :slug="category.slug"
                        :onClick="() => onSelectCategory(category.slug)"
                    />
                </li>
            </ul>
        </div>
    </container>
</template>

<script>

import CategoryItem from "@/components/CategoryItem.vue";
import { categories } from "@/utils/category";

export default {
    name: "HomePage",
    components: { CategoryItem },
    data() {
        return {
            categories
        }
    },
    methods: {
        onSelectCategory(slug) {
            this.$emit('update:category', slug);
            this.$router.push({ 
                path: `${slug}/1`,
                meta: { category: slug }
            });
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
    container p {
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
    }
}

</style>
