<template>
  <div class="border-4 carousel border-red" @keydown="checkSlide($event)" tabindex="0">
    <pre># of slides {{ slidesLength }}</pre>
    <slot></slot>
    <button @click.prevent="next" class="btn btn-next">
      <i class="fa fa-angle-right"></i>
    </button>
    <button @click.prevent="prev" class="btn btn-prev">
      <i class="fa fa-angle-left"></i>
    </button>
  </div>

  <!-- MINE -->
  <!-- <div class="relative overflow-hidden">
    <Row>
      <button
        class="m-2 transition-all transform border-4 rounded-xl hover:scale-110"
        @click="prev"
      >
        <i class="m-1 fa fa-arrow-left"></i>
      </button>
      <slot></slot>
      <button
        class="m-2 transition-all transform border-4 rounded-xl hover:scale-110"
        @click="next"
      >
        <i class="m-1 fa fa-arrow-right"></i>
      </button>
    </Row>
  </div> -->
</template>
<script>
import { Row, Stack } from "../../../components/flex";
export default {
  data() {
    return {
      index: 0,
      slides: [],
      slideDirection: "",
    };
  },
  computed: {
    slidesLength() {
      return this?.slides?.length || 0;
    },
  },
  mounted() {
    const children = this.$slots.default()?.[0].children;
    console.log("slots", children);
    // console.log("refs", this.this.$refs);
    this.slides = children;
    console.log("this.slides", this.slides);
    // if (!this?.slides) return;
    this.slides.map((slide, index) => {
      slide.index = index;
      console.log("slide", slide);
    });
  },
  methods: {
    next() {
      this.index++;
      if (this.index >= this.slidesLength) {
        this.index = 0;
      }
      this.slideDirection = "slide-right";
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.slidesLength - 1;
      }
      this.slideDirection = "slide-left";
    },
    checkSlide(event) {
      if (event.keyCode === 39) {
        this.next();
      } else if (event.keyCode === 37) {
        this.prev();
      } else {
        return;
      }
    },
  },
  components: {
    Stack,
    Row,
  },
};
</script>
<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 500px;
  z-index: 10;
}
.btn {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  margin: 5px 10px;
  color: #fff;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn-next {
  top: 50%;
  right: 0;
}
.btn-prev {
  top: 50%;
  left: 0;
}
.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>
