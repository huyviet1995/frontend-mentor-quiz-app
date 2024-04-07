<template>
    <div class="icon-container flex items-center justify-center" v-if="icon" :style="{ backgroundColor: iconBackground }">
        <img :src="icon" alt="alt" />
    </div>
</template>

<script>
import { getCategoryIcon, getIconBackground } from "@/utils/category";
export default {
    name: "IconWrapper",
    props: {
        category: {
            type: String,
            required: true,
            default: "",
        }
    },
    computed: {
        iconBackground() {
            return getIconBackground(this.category);
        },
        icon() {
            return getCategoryIcon(this.category);
        }
    }
}
</script>

<style scoped lang="scss">
.icon-container {
    width: 56px;
    height: 56px;
    border-radius: 8px;
    img {
        background: none;
        width: 40px;
    }
}

@media screen and (max-width: 768px) {
    .icon-container {
        width: 40px;
        height: 40px;
        img {
            width: 30px;
        }
    }
}

</style>