<template>
    <div class="page-container flex flex-row justify-between mx-auto">
        <div class="left-column flex justify-between flex-col">
            <div v-if="!showResult" class="title__question">
                <p class="mb-5">
                    Question {{ currentQuestion }} out of {{ totalQuestions }}
                </p>
                <h1 class="mb-5">
                    {{ question.title }}
                </h1>
            </div>
            <div class="mb-5 title__result" v-else>
                <h1>Quiz complete</h1>
                <span>You scored...</span>
            </div>
            <progress
                v-if="!showResult"
                :value="currentQuestion"
                :max="totalQuestions"
                class="rounded-lg"
            ></progress>
        </div>
        <div class="right-column">
            <ul class="question-list flex gap-4 flex-col" v-if="!showResult">
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
            <div class="flex flex-col card w-full result-card items-center" v-else>
                <div class="category">
                    <img :src="getCategoryIcon(category)" :alt="category">
                    <p>{{ category }}</p>
                </div>
                <p class="total-score">{{ 9 }}</p>
                <p class="out-of">out of {{ totalQuestions }}</p>
            </div>
            <button class="mt-4" :disabled="selectedAnswer === null" @click="onSubmit">
                {{ showResult ? 'Play again' : 'Submit Answer' }}
            </button>
        </div>
    </div>
</template>

<script>
import questions from "@/utils/questions.js";
import CardItem from "@/components/CardItem.vue";
import getCategoryIcon from "@/utils/category-icon";
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
            showResult: false,
        };
    },
    computed: {
        question() {
            const id = Number(this.$route.params.id);
            return questions[this.category].find((question) => question.id === id);
        },
        totalQuestions() {
            return questions[this.category].length;
        },
        currentQuestion() {
            const id = Number(this.$route.params.id);
            return id;
        },
        letters() {
            return ["A", "B", "C", "D"];
        },
        category() {
            return this.$route.params.category;
        }
    },
    methods: {
        onAnswer(id) {
            this.selectedAnswer = id;
        },
        getCategoryIcon(category) {
            return getCategoryIcon(category);
        },
        onSubmit() {
            if (this.currentQuestion === this.totalQuestions) {
                this.showResult = true; 
                this.selectedAnswer = null;
                return;
            }
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

.title__result {
    h1 {
        font-style: normal;
        font-weight: 300;
        font-size: 64px;
        color: var(--dark-navy);
    }

    span {
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 100%;
        color: var(--dark-navy);
    }
}

.page-container p {
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: var(--grey-navy);
}

.title__question h1 {
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

.result-card {
    padding: 48px;
    gap: 40px;
    min-width: 564px;
    height: 388px;
    background: #FFFFFF;
    box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
    border-radius: 24px;

    .category {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
    }

    .category > p {
        text-transform: capitalize;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 100%;
        color: var(--dark-navy);
    }

    .total-score {
        font-style: normal;
        font-weight: 500;
        font-size: 144px;
        line-height: 100%;
        /* identical to box height, or 144px */
        color: var(--dark-navy);
    }
    .out-of {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 150%;
        color: var(--grey-navy);
    }
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
