<template>
  <div>
    <h1>Nugs!!</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nugs: [],
    };
  },
  mounted() {
    let uri = "https://nugs-api-mikepreston17.vercel.app/";
    axios
      .get(uri)
      .then((response) => {
        this.nugs = response.data;
        console.log(`response`, response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
