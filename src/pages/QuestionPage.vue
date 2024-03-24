<template>
    <div class="page-container flex flex-row justify-between mx-auto">
        <div class="left-column">
            <p class="mb-5">Question {{ currentQuestion }} out of {{ totalQuestions }}</p>
            <h1 class="mb-5">
                {{ question.title }}
            </h1>
        </div>
        <div class="right-column">
            <ul class="question-list flex gap-4 flex-col">
                <li v-for="(choice, index) in question.options" :key="choice">
                    <card-item :title="choice">
                        <template v-slot:icon>
                            <div class="letter">{{ letters[index] }}</div>
                        </template>
                    </card-item>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import questions from "@/utils/questions.js";
import CardItem from "@/components/CardItem.vue";
export default {
    name: "QuestionPage",
    components: { CardItem },
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    computed: {
        question() {
            const category = this.$route.params.category;
            const id = Number(this.$route.params.id);
            return questions[category].find((question) => question.id === id);
        },
        totalQuestions() {
            const category = this.$route.params.category;
            return questions[category].length;
        },
        currentQuestion() {
            const id = Number(this.$route.params.id);
            return id;
        },
        letters() {
            return ["A", "B", "C", "D"];
        },
    },
    data() {
        return {
            multipleChoices: [
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
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.left-column {
    max-width: 465px;
}
.page-container p {
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: var(--grey-navy);
}

.page-container h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
    color: var(--dark-navy);
}

.page-container .letter {
    min-width: 56px;
    min-height: 56px;
    background: var(--background);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 28px;
    left: 38px;
    top: 34px;

    /* Heading S */
    font-weight: 500;
    font-size: 28px;
    line-height: 100%;
    /* identical to box height, or 28px */
    color: var(--grey-navy);
}
/* Add your styles here */
</style>
