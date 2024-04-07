<template>
    <card-item :title="title" :icon="icon" @click="onClick" :icon-background="iconBackground" />
</template>
<script>
import CardItem from "@/components/CardItem.vue";
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
            switch (this.slug) {
                case "html":
                    return "var(--html-background)";
                case "css":
                    return "var(--css-background)";
                case "javascript":
                    return "var(--js-background)";
                case "accessibility":
                    return "var(--accessibility-background)";
                default:
                    return "var(--card-background)";
            }
        }
    }
};
</script>
