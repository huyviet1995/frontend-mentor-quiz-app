<template>
    <div class="page-container flex flex-row justify-between mx-auto">
        <div class="left-column flex justify-between flex-col">
            <div>
                <p class="mb-5">
                    Question {{ currentQuestion }} out of {{ totalQuestions }}
                </p>
                <h1 class="mb-5">
                    {{ question.title }}
                </h1>
            </div>
            <progress
                :value="currentQuestion"
                :max="totalQuestions"
                class="rounded-lg"
            ></progress>
        </div>
        <div class="right-column">
            <ul class="question-list flex gap-4 flex-col">
                <li v-for="(choice, index) in question.options" :key="choice">
                    <card-item :title="choice" :onClick="() => onAnswer(index)" :selected="selectedAnswer === index">
                        <template v-slot:icon>
                            <div
                                class="letter"
                                :class="{ selected: selectedAnswer === index }"
                            >
                                {{ letters[index] }}
                            </div>
                        </template>
                    </card-item>
                </li>
            </ul>
            <button class="mt-4" :disabled="selectedAnswer === null" @click="onSubmit">
                Submit Answer
            </button>
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
            selectedAnswer: null,
        };
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
    methods: {
        onAnswer(id) {
            this.selectedAnswer = id;
        },
        onSubmit() {
            this.$router.push({
                name: "QuestionPage",
                params: {
                    category: this.$route.params.category,
                    id: this.currentQuestion + 1,
                },
            });
            this.selectedAnswer = null;
        },
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

    &.selected {
        background: var(--purple);
        color: #fff;
    }
}
/* Add your styles here */
.page-container progress {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 4px;
    gap: 8px;
    margin: 0 auto;
    width: 100%;
    background: #ffffff;
}

.page-container progress::-webkit-progress-value {
    background: var(--purple);
    border-radius: 0.5rem;
}

.page-container progress::-webkit-progress-bar {
    background: #ffffff;
}

.page-container button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 32px;
    gap: 8px;
    width: 100%;
    min-height: 92px;
    background: var(--purple);
    box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
    border-radius: 24px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 100%;
    /* identical to box height, or 28px */

    color: #ffffff;
    &[disabled] {
        background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5)
            ),
            var(--purple);
    }
}
</style>
