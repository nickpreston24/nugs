<template>
  <Stack>
    <Border class="w-full h-1/2">
      <slot name="header"></slot>
      <DevConsole />
    </Border>

    <Border class="w-full h-2/3">
      <slot name="top"></slot>
    </Border>

    <Border class="h-2/3 w-full">
      <Row>
        <Border class="w-1/2">
          <slot name="left"></slot>
        </Border>
        <Border class="w-1/2">
          <slot name="right"></slot>
        </Border>
      </Row>
    </Border>

    <Border class="w-full h-1/6">
      <slot name="bottom"></slot>
    </Border>
  </Stack>
</template>
<script>
import Border from "../../components/atoms/Border.vue";
import { Row, Right, Stack } from "../../components/flex";
import DevConsole from "../../components/molecules/DevConsole.vue";
export default {
  components: {
    Border,
    Row,
    Right,
    Stack,
    DevConsole,
  },
};
</script>
