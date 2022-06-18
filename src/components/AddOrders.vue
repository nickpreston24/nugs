<template>
  <div>
    <div class="gentle-flex">
      <ul>
        <li v-for="(value, key, index) in order" :key="index">
          <label v-bind:[key]="something">{{ key }}: </label>
          <input
            class="bullet-border"
            v-model="order[key]"
            type="text"
            v-bind:placeholder="key"
          />
        </li>
      </ul>

      <span v-if="devmode">{{ { ...order } }}</span>
      <label v-if="force > 0" v-bind="force">Force: {{ force }}</label>
      <label v-if="wound > 0" v-bind="wound">Wound: {{ wound }}</label>
      <Button v-if="ready" v-on:click="addOrder">
        <div>
          <i class="fa fa-star fa-xs"></i>
        </div>
      </Button>
      <Button @click="lorem" v-if="devmode">Lorem</Button>
      <br />
    </div>
  </div>
</template>
<style scoped>
input {
  border: 2px solid #42b983;
  border-radius: 0% 50% 50% 0%;
  font-weight: inherit;
}

button {
  box-shadow: #aaa;
  color: #42b983;
  padding: 1rem;
  font-weight: 700;
  border: #42b983 1px solid;
}
</style>

<script>
import { random } from "../helpers/generators";
import { isEmpty, devmode } from "../helpers";

export default {
  methods: {
    async addOrder() {
      // await createOrders([{ ...this.order }]);
      // this.clear();
    },
    clear() {
      this.order = {
        Buy: false,
        QuantityDesired: 0,
      };
    },
    lorem() {
      let fake = {
        Buy: random.Boolean(),
        QuantityDesired: random.Int(10),
      };
      this.order = fake;
    },
  },
  data() {
    return {
      devmode,

      order: {
        Buy: null,
        QuantityDesired: null,
      },
    };
  },
  mounted() {
    devmode && console.log(`order`, this.order);
  },
  computed: {
    ready() {
      if (!this) return false;
      return !isEmpty(this.order);
    },
  },
};
</script>
