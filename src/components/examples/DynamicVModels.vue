<template v-for="(question, index) in questions" :key="index">
  <h4>{{ question.q }}</h4>
  <template v-for="(options, i) in question.a" :key="i">
    <input
      type="radio"
      :name="'question' + index"
      :value="options.option"
    />
    {{ options.option }} <br />
  </template>
  <br />
</template>
<script>
export default {
  data() {
    return {
      questions: [
        {
          q: "What number is the letter A in the English alphabet?",
          a: [
            { option: "8", correct: false },
            { option: "14", correct: false },
            { option: "1", correct: true },
            { option: "23", correct: false }, // no comma here
          ],
        },
        {
          q: "Where is TajMahal?",
          a: [
            { option: "Delhi", correct: false },
            { option: "Agra", correct: true },
            { option: "Mumbai", correct: false },
            { option: "Kochin", correct: false }, // no comma here
          ],
        },
        {
          q: "Where is GateWay Of India?",
          a: [
            { option: "Delhi", correct: false },
            { option: "Agra", correct: false },
            { option: "Mumbai", correct: true },
            { option: "Kochin", correct: false }, // no comma here
          ],
        },
      ],
    };
  },
};
</script>