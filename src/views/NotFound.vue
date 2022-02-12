<template>
  <Page class="bullet-border bg-gradient-to-t from-rose-500 via-tahiti-600 to-ocean-500">
    <h1>Oh snap!</h1>
    <h2>
      Looks like you're searching for something we don't yet have! (or Mike dropped the
      ball...again!)
    </h2>
    <div>
      <div>
        {{ message }}
      </div>
    </div>
  </Page>
</template>
<script>
import Page from "../components/templates/Page.vue";
import { onMounted } from "vue";
export default {
  components: {
    Page,
  },
  props: {
    seconds: {
      required: true,
      default: 3,
    },
  },
  data() {
    return {
      count: this.seconds,
      tick: 1,
    };
  },
  computed: {
    message() {
      return `Redirecting you in ${this.timeout} seconds...`;
    },
    timeout() {
      return this.tick * this.count;
    },
  },
  mounted() {
    setInterval(() => {}, this.seconds * 1000);
  },
  // created() {
  //   setInterval(()=>{
  //       this.$router.push({name:'builds'})
  //   }), seconds * 1000)
  // }
};
</script>
