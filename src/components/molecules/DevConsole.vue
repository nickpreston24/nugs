<!-- Developer Console -->
<template>
  <div v-if="devmode" class="h-32 bg-orange-500">
    <!-- <pre>{{ developerSettings }}</pre> -->
    <Row v-if="devmode">
      <div v-for="(item, key) in developerSettings" :key="key">
        <label :for="item.id">{{ key }}</label>
        <input
          type="checkbox"
          v-model="developerSettings"
          :id="item.index"
          :value="item.enabled"
          @click="item.enabled = !item.enabled"
        />
      </div>
    </Row>
  </div>
</template>
<script>
import { Log } from "../../helpers";
export default {
  computed: {
    developerSettings() {
      const settings = this.$store.state.settings.developer;
      Log("settings", settings);
      return settings;
    },
  },
};
</script>
