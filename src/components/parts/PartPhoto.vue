<template>
  <div v-if="part?.url" class="lightbox" @click.self="closeLightbox">
    <img :src="part?.url" />
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <a :href="part.Link" target="_blank" rel="noopener noreferrer">
          <h2 class="p-2 font-normal text-arctic-600" v-if="part?.Name">
            {{ part.Name }}
          </h2>
        </a>
        <p v-if="part.Notes">{{ part.Notes }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import useTable from "../useTable";

export default {
  setup() {
    let { state } = useTable();
    return {
      state,
    };
  },
  computed: {
    part() {
      // console.log('this.state :>> ', this.state);

      // let parts = this.state.parts.filter((p) => p?.Attachments);
      // // console.log("parts", parts);
      // let names = parts.map((b) => b.id);
      // // console.log("names", names);
      // // console.log(this.$route);
      // let found = parts.find((part) => {
      //   // console.log(part)
      //   return part.id === this.$route.params.id;
      // });
      // // console.log("found:>>", found);
      // return {
      //   ...found,
      //   url: found?.Attachments[0].url || "",
      // };
      console.log("this.state.records :>> ", this.state.records[0]);

      return this.state.records[0];
    },
  },
  methods: {
    closeLightbox() {
      this.$router.push("/parts");
    },
  },
  components: {},
};
</script>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}

.lightbox img {
  margin: auto;
  width: 100%;
  grid-column-start: 2;
  border-radius: 0.75rem;
}

.lightbox-info {
  margin: auto 2rem auto 0;
}

.lightbox-info-inner {
  background-color: #ffffff;
  display: inline-block;
  padding: 2rem;

  border-radius: 0.75rem;
}

/*Bounce animations*/

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
