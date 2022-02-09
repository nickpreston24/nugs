<!-- Developer Console -->
<template>
  <div v-if="devmode" class="bg-orange-500 h-32">
    <!-- <pre>{{ developerSettings }}</pre> -->
    <Row v-if="devmode">
      <div v-for="(item, key, index) in developerSettings">
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
export default {
  computed: {
    developerSettings() {
      const settings = this.$store.state.settings.developer;
      console.log("settings", settings);
      return settings;
    },
  },
};
</script>
