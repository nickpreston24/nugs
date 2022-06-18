<template>
  <Section>
    <h1 class="text-white text-4xl">Guides</h1>
    <Grid mode="photo">
      <div class="rounded-md bg-white shadow-xl" v-for="(guide, key, index) in guides">
        <Card>
          <template v-slot:header>
            <div class="mt-2">
              <div>
                <div class="text-xs text-slate-600 uppercase font-bold tracking-wider">
                  {{ guide?.Name }}
                </div>
              </div>
            </div>
          </template>

          <!-- <pre class="text-tiny">remaining: {{ guide }}</pre> -->

          <template v-slot:footer>
            <div
              class="font-bold text-slate-700 leading-snug hover:text-tahiti-500 hover:fill-tahiti-500"
            >
              <a :href="guide?.Link" target="_" class="hover:underline">
                <SVGButton> Visit </SVGButton>
              </a>
            </div>
          </template>

          <!-- <div class="mt-2 text-sm text-slate-600">{{ guide?.Url }}</div> -->
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
    const { state } = useTable("Guides");

    return {
      state,
    };
  },
  components: { Grid, Row, Stack, SVGButton, Card, Section },
  computed: {
    guides() {
      return this.state.records;
    },
  },
};
</script>
