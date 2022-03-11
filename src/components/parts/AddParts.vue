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
      <div class="gentle-flex">
        <Button v-if="ready" v-on:click="addPart">Add Part</Button>
        <Button @click="lorem" v-if="devmode">Lorem</Button>
        <Button @click="clear">X</Button>
      </div>
      <br />
    </div>
  </div>
</template>
<style scoped></style>

<script>
import { useState } from "@hookstate/vue";
import { countEmpty } from "../../helpers/array.ts";
import Label from "../atoms/Label.vue";
import { random } from "../../helpers/generators";
import Button from "../atoms/Button.vue";
import { Row } from "../../components/flex";
import { Log, devmode } from "../../helpers";
import useTable from "../../hooks/useTable";

const initial = {
  Name: "",
  Cost: "",
  Link: "",
  Notes: "",
  Weight: "",
  Weight: "",
  Demo: "",
  // Attachments: [],
  // Calibers: [],
};

const part = useState({ ...initial });

export default {
  components: {
    Button,
    Row,
    Label,
  },
  setup() {
    const { state, searchTable, getById, loading, error, patch, create } = useTable(
      "Parts",
      {
        maxRecords: 100,
      }
    );
    return {
      state,
      create,
      patch,
    };
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
      await this.create("Parts", {
        fields: {
          ...this.part,
          Cost: parseFloat(this.part.Cost),
          Weight: parseFloat(this.part.Weight),
        },
      });
      this.clear();

      // this.$dtoast.pop({
      //   preset: "success",
      //   heading: `Custom Heading`,
      //   content: `Custom content`,
      // });
    },
    clear() {
      Log(`initial`, initial);
      this.part = initial;
    },
    lorem() {
      let fake = {
        Name: random.Name("ACME", "Upper Receiver", 10),
        Cost: random.Float(3000),
        Link: "example.com",
        Notes: random.Paragraph(),
        Weight: random.Float(7 * 16),
      };
      // devmode && console.log(`fake`, fake);

      this.part = fake;
    },
  },
  data() {
    return {
      devmode: devmode,
      part: part,
    };
  },

  computed: {
    ready() {
      if (!this) return false;
      return !(countEmpty(this.part).length === 0);
    },
  },
};
</script>
