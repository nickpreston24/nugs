//https://atomicdesign.bradfrost.com/chapter-2/

<template>
  <Row>
    <Border class="w-1/4">
      <slot name="left"></slot>
    </Border>
    <Border class="w-1/2">
      <slot></slot>
    </Border>
    <Border class="w-1/4">
      <slot name="right"></slot>
    </Border>
  </Row>
</template>
<script>
import { Row, Stack } from "../flex";
import Border from "../atoms/Border.vue";
export default {
  components: {
    Row,
    Stack,
    Border,
  },
};
</script>
