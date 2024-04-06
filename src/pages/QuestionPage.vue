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
                    <card-item 
                        :title="choice" 
                        :class="getCardItemClassName(index)"
                        :onClick="() => onAnswer(index)" 
                        :selected="selectedAnswer === index"
                        :disabled="questionAnswered"
                    >
                        <template v-slot:icon>
                            <div
                                class="letter"
                                :class="getCardItemClassName(index)"
                            >
                                {{ letters[index] }}
                            </div>
                        </template>
                        <template v-slot:appendIcon v-if="questionAnswered && getCardItemIcon(index)">
                            <img :src="getCardItemIcon(index)" alt="append-icon">
                        </template>
                    </card-item>
                </li>
            </ul>
            <div class="flex flex-col card w-full result-card items-center" v-else>
                <div class="category">
                    <img :src="getCategoryIcon(category)" :alt="category">
                    <p>{{ category }}</p>
                </div>
                <p class="total-score">{{ currentScore }}</p>
                <p class="out-of">out of {{ totalQuestions }}</p>
            </div>
            <button class="mt-4" :disabled="selectedAnswer === null && !showResult && !readyToProceed" @click="onClick">
                {{ buttonLabel }}
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
            currentQuestion: 1,
            currentScore: 0,
            isCorrect: null,
            readyToProceed: false,
            questionAnswered: false,
        };
    },
    computed: {
        question() {
            const id = Number(this.currentQuestion);
            return questions[this.category].find((question) => question.id === id);
        },
        totalQuestions() {
            return questions[this.category].length;
        },
        letters() {
            return ["A", "B", "C", "D"];
        },
        category() {
            return this.$route.params.category;
        },
        buttonLabel() {
            if (this.showResult) {
                return "Play again";
            } else if (this.readyToProceed) {
                return "Next Question";
            } else {
                return 'Submit Answer';
            }
        },
        correctAnswerId() {
            return this.question.options.findIndex(option => option === this.question.answer);
        }
    },
    methods: {
        getCardItemClassName(index) {
            let className = "";
            if (this.selectedAnswer === index) {
                if (this.isCorrect) {
                    className = "correct"; 
                } else if (this.isCorrect === false ) {
                    className = "incorrect";
                } else {
                    className = "selected";
                }
            }
            return className;
        },
        getCardItemIcon(index) {
            if (this.isCorrect === true && this.selectedAnswer === index) {
                return "/images/icon-correct.svg";
            } else if (this.isCorrect === false && this.selectedAnswer === index) {
                return "/images/icon-incorrect.svg";
            } else if (this.isCorrect === false && index === this.correctAnswerId) {
                return "/images/icon-correct.svg";
            }
        },
        onAnswer(id) {
            this.selectedAnswer = id;
        },
        getCategoryIcon(category) {
            return getCategoryIcon(category);
        },
        onClick() {
            if (this.showResult) {
                this.onPlayAgain();
                return;
            } else if (this.readyToProceed) {
                this.onNextQuestion();
                return;
            } else {
                this.onSubmit();
            }
        },
        onNextQuestion() {
            this.selectedAnswer = null;
            this.currentQuestion++;
            this.readyToProceed = false;
            this.isCorrect = null;
            this.questionAnswered = false;
            if (this.currentQuestion === this.totalQuestions + 1) {
                this.showResult = true; 
                return;
            }
        },
        onSubmit() {
            // Calculate the current score
            if (this.correctAnswerId === this.selectedAnswer) {
                this.currentScore++;
                this.isCorrect = true;
            } else {
                this.isCorrect = false;
            }
            this.questionAnswered = true;
            this.readyToProceed = true;
        },
        onPlayAgain() {
            this.$router.push({ name: "HomePage" });
        }
    },
};
</script>

<style scoped lang="scss">

.correct {
    background: #FFFFFF;
    border: 3px solid var(--green);
    box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
    border-radius: 24px;
}

.incorrect {
    background: #FFFFFF;
    border: 3px solid var(--red);
    box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
    border-radius: 24px;
}

.selected {
    border: 2px solid var(--purple);
}

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

    &.correct {
        background: var(--green);
        color: #fff;
    }

    &.incorrect {
        background: var(--red);
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

.result-card * {
    background-color: #fff;
}

.result-card {
    padding: 48px;
    gap: 40px;
    min-width: 564px;
    height: 388px;
    background-color: #FFFFFF;
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

.page-container img {
    background-color: #fff;
}
</style>
