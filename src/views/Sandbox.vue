<template>
  <div class="sandbox gentle-flex" style="border: 1px solid red">
    <PartCard
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    />
    <!-- <card>
      <template v-slot:header>
        <h2>My Header</h2>
      </template>
      <template v-slot:default>
        <img src="https://picsum.photos/0" />
      </template>
      <template v-slot:footer>
        <button>Show Details</button>
      </template>
    </card> -->
    <tailwind-card v-show="false" />
  </div>
</template>
<script>
import TailwindCard from "../components/examples/TailwindCard.vue";
import Card from "../components/molecules/Card.vue";
import PartCard from "../components/parts/PartCard.vue";
export default {
  data() {
    return {
      part: {
        Name: "Viper PST II",
      },
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
    };
  },
  components: { TailwindCard, PartCard },
};
</script>