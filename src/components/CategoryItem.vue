<template>
    <card-item :title="title" :icon="icon" @click="onClick" :category="slug" />
</template>
<script>
import CardItem from "@/components/CardItem.vue";
import { getIconBackground } from "@/utils/category";
export default {
    name: "CategoryItem",
    components: { CardItem },
    props: {
        icon: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        onClick: {
            type: Function,
            required: true,
        }
    },
    computed: {
        iconBackground() {
            return getIconBackground(this.slug);
        }
    }
};
</script>
