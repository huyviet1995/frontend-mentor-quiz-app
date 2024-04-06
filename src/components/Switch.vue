<template>
    <label
        class="flex items-center cursor-pointer select-none text-dark dark:text-white gap-3"
    >
        <slot name="prependIcon"></slot>
        <div class="relative">
            <input
                type="checkbox"
                class="sr-only"
                v-model="isChecked"
                @change.stop="$emit('change', isChecked)"
            />
            <div class="block h-8 rounded-full box bg-purple-500 w-14"></div>
            <div
                :class="{ 'translate-x-full !bg-white': isChecked }"
                class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1"
            ></div>
        </div>
        <slot name="appendIcon"></slot>
    </label>
</template>

<script>
export default {
    name: "SwitchComponent",
    data() {
        return {
            isChecked: false,
        };
    },
};
</script>

<style scoped></style>
