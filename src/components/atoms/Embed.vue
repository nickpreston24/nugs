<template>
  <div>
    <h1>url</h1>
    <!-- <p>{{ url.replace("watch?v=", "embed/") }}</p> -->
    <iframe width="640" height="480" src="{{url}}"> </iframe>
  </div>
</template>

<script>
import { Log } from "./helpers";

export default {
  mounted() {
    Log(`this.url`, this.url);
  },
  props: ["url"],
  computed: {
    embedUrl() {
      Log(`this.url`, this.url);
      return this.url.replace("watch?v=", "embed/").replace("t=", "start=");
    },
  },
  props: {
    url: {
      required: true,
      type: String,
    },
  },
};
</script>
