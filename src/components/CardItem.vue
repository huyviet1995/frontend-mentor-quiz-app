<template>
    <container
        class="container flex flex-row gap-4 items-center rounded-lg cursor-pointer"
        v-bind="$attrs"
        @click="onCardClick"
    >
        <img v-if="icon" :src="icon" :width="32" alt="alt" />
        <slot v-else name="icon" />
        <h2>{{ title }}</h2>
        <div class="append-icon">
            <slot name="appendIcon" />
        </div>
    </container>
</template>

<script>
export default {
    name: "CardItem",
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: false,
        },
        alt: {
            type: String,
            required: false,
        },
        onClick: {
            type: Function,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    methods: {
        onCardClick() {
            if (!this.disabled) {
                this.onClick();
            }
        }
    }
};

</script>

<style scoped lang="scss">
container {
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
}

container h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 100%;
    color: var(--dark-navy);
    flex: none;
    flex-grow: 0;
    background: #fff;
}

container .append-icon {
    align-self: center;
    margin-left: auto;
    background-color: #fff;
}

.append-icon * {
    background-color: #fff;
}

@media screen and (max-width: 1024px) {
    container.container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 32px;
        height: 80px;
        border-radius: 24px;
    } 
}

@media screen and (max-width: 768px) {
    container {
        gap: 16px;
        background: #FFFFFF;
        box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
        h2 {
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 100%;
        }
    }
}

</style>
