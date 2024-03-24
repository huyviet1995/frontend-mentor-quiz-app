<template>
    <div class="page-container flex flex-row justify-between mx-auto">
        <div class="">
            <p>Question {{ currentQuestion }} out of {{ totalQuestions }}</p>
            <h1 class="mb-5">
                {{ title }}
            </h1>
            <p>Pick a question to get started</p>
        </div>
        <div class="">
            <ul class="question-list flex gap-4 flex-col">
                <li v-for="question in questions" :key="question.title">
                    <card-item :icon="question.icon" :title="question.title" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue';
export default {
    name: "QuestionPage",
    components: { CardItem },
    props: {
        title: {
            type: String,
            required: true,
        },
        currentQuestion: {
            type: Number,
            required: true,
        },
        totalQuestions: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            questions: [
                {
                    icon: "/images/icon-html.svg",
                    title: "Question 1",
                },
                {
                    icon: "/images/icon-css.svg",
                    title: "Question 2",
                },
                {
                    icon: "/images/icon-js.svg",
                    title: "Question 3",
                },
                // Add more questions here
            ]
        };
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>