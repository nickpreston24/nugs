<template>
  <div>
    <div class="gentle-flex">
      <ul v-if="true">
        <li class="p-2" v-for="(value, key, index) in part" :key="index">
          <Label>{{ key }}:</Label>
          <input
            class="bullet-border"
            type="text"
            v-bind:placeholder="key"
            @input="onChange"
          />
        </li>
      </ul>

      <span v-if="devmode">{{ { ...part } }}</span>
      <Label v-if="force > 0" v-bind="force">Force: {{ force }}</Label>
      <Label v-if="wound > 0" v-bind="wound">Wound: {{ wound }}</Label>
      <List>
        <Button v-if="ready" v-on:click="addPart">Add Part</Button>
        <Button @click="lorem" v-if="devmode">Lorem</Button>
        <Button @click="clear">X</Button>
      </List>
      <br />
    </div>
  </div>
</template>
<style scoped></style>

<script>
//import { create } from "../../../data/airtable-curl";
import { useState } from "@hookstate/vue";
import { empties } from "../../helpers/array.ts";
import Label from "../atoms/Label.vue";
import { devmode, random } from "../../helpers/generators";
import Button from "../atoms/Button.vue";
import List from "../molecules/List.vue";

const initial = {
  Name: "",
  Cost: "",
  Link: "",
  Notes: "",
  Weight: "",
};

const state = useState({ ...initial });

export default {
  components: {
    Button,
    List,
    Label,
  },
  methods: {
    onChange(e) {
      const target = e.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.placeholder;
      this.part[name].set(value);
    },
    async addPart() {
      devmode && console.log(`this.part`, this.part);
      await create("Parts", [
        {
          ...this.part,
          Cost: parseFloat(this.part.Cost),
          Weight: parseFloat(this.part.Weight),
        },
      ]);
      this.clear();
    },
    clear() {
      console.log(`initial`, initial);
    },
    lorem() {
      let fake = {
        Name: random.Name("ACME", "Upper Receiver", 10),
        Cost: random.Float(3000),
        Link: "example.com",
        Notes: random.Paragraph(),
        Weight: random.Float(7 * 16),
      };
      devmode && console.log(`fake`, fake);
    },
  },
  data() {
    return {
      devmode: devmode,
      part: state,
    };
  },

  computed: {
    ready() {
      if (!this) return false;
      return !(empties(this.part).length === 0);
    },
  },
};
</script>
