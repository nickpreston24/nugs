<template>
  <Section>
    <h1 class="text-white text-4xl">Clones</h1>
    <Grid mode="photo">
      <div class="rounded-md bg-white shadow-xl" v-for="(clone, key, index) in clones">
        <Card>
          <template v-slot:header>
            <div class="mt-2">
              <div>
                <div class="text-xs text-slate-600 uppercase font-bold tracking-wider">
                  {{ clone?.Name }}
                </div>
              </div>
            </div>
          </template>

          <template v-slot:footer>
            <div
              class="font-bold text-slate-700 leading-snug hover:text-tahiti-500 hover:fill-tahiti-500"
            >
              <a :href="clone?.Url" target="_" class="hover:underline">
                <SVGButton> Visit </SVGButton>
              </a>
            </div>
          </template>

          <!-- <div class="mt-2 text-sm text-slate-600">{{ clone?.Url }}</div> -->
          <!-- <img class="rounded" :src="img" :alt="imgAlt" /> -->
        </Card>
      </div>
    </Grid>
  </Section>
</template>
<script>
import { Grid, Row, Stack } from "../components/flex";
import { SVGButton, Card, Section } from "../components/molecules";
import { useTable } from "../hooks";

export default {
  setup(props) {
    // do stuff

    const { state } = useTable("Clones");

    return {
      state,
    };
  },
  components: { Grid, Row, Stack, SVGButton, Card, Section },
  computed: {
    clones() {
      return this.state.records;
    },
  },
};
</script>
