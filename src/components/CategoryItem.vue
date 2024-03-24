<template>
    <div class="container flex flex-row gap-4 items-center rounded-lg">
        <img :src="icon" width="32" alt="Category Icon" />
        <h2>{{ title }}</h2>
    </div>
</template>
<script>
export default {
    name: "CategoryItem",
    props: {
        icon: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.container {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    gap: 32px;
    width: 564px;
    height: 96px;
    background: #ffffff;
    box-shadow: var(--box-shadow);
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;

    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 100%;
        color: var(--dark-navy);
        flex: none;
        order: 1;
        flex-grow: 0;
    }
}
</style>
