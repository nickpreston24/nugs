<template>
  <Stack>
    <div class="w-full h-1/2">
      <slot name="continue-button"></slot>
    </div>

    <div class="w-full h-1/6">
      <slot name="bottom"></slot>
    </div>
  </Stack>
</template>
<script>
import { Row, Right, Stack, Grid } from "../../components/flex";
export default {
  components: {
    Row,
    Right,
    Stack,
    Grid,
  },
};
</script>
