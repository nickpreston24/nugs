// From: https://bestofvue.com/repo/luvejo-vue-3-carousel-tutorial
<template>
  <Stack>
    <Row>
      <button
        class="m-2 transition-all transform border-4 rounded-xl hover:scale-110"
        @click="prev"
      >
        <i class="m-1 fa fa-arrow-left"></i>
      </button>
      <div class="carousel">
        <div v-if="cards?.length" class="inner" ref="inner" :style="innerStyles">
          <div class="w-8 h-8 card" v-for="card in cards" :key="card">
            {{ card }}
          </div>
        </div>
        <Row v-else>
          <h1>No Items!</h1>
          <AwesomeConfusedIcon class="w-32 h-32" />
        </Row>
      </div>

      <button
        class="m-2 transition-all transform border-4 rounded-xl hover:scale-110"
        @click="next"
      >
        <i class="m-1 fa fa-arrow-right"></i>
      </button>
    </Row>
  </Stack>
</template>
<script>
import { Button } from "../../components/atoms";
import { Stack, Row } from "../../components/flex";
import { AwesomeConfusedIcon } from "../../assets/icons";
export default {
  props: {
    cards: {
      type: Array,
      required: false,
      //   default: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  },
  data() {
    return {
      //   cards: [1, 2, 3, 4, 5, 6, 7, 8],
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
  components: {
    Button,
    Stack,
    Row,
    AwesomeConfusedIcon,
  },
  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
};
</script>
<style scoped>
.carousel {
  width: 170px;
  overflow: hidden;
}
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
.card {
  margin-right: 10px;
  display: inline-flex;
  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
/* .carousel {
  overflow: hidden;
}

.inner {
  white-space: nowrap;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card {
  display: inline-flex;
} */
</style>
