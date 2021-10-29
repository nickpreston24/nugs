<template>
  <div>
    <div v-for="c of contents" :key="c.id">
      <div class="id" @click="c.expanded = !c.expanded">
        <div>
          <b>{{ c.id }}</b>
        </div>
        <div>
          <span v-if="c.expanded">&#x2191;</span>
          <span v-else>&#x2193;</span>
        </div>
      </div>
      <div class="description" v-if="c.expanded">
        <!-- {{ c.description }} -->
      </div>
    </div>

    
    <!-- <div id="accordion-header" class="relative py-3 sm:max-w-xl sm:mx-auto">
      <slot name="header"></slot>
    </div>

    <div
      v-for="listItem in displayList"
      :key="listItem.id"
      style="margin: 8px; border: solid green 1px"
    >
      <transition name="fade">
        <div
          :ref="'body-' + listItem.id"
          style="margin-top: 8px; display: none; height: 100px"
          v-show="expandElement(listItem)"
        >
          <div id="accordion-content">
            <slot name="content"></slot>
          </div>
        </div>
      </transition>
    </div> -->
  </div>
</template>
<script>
const contents = Array(10)
  .fill()
  .map((_, i) => {
    return {
      title: `title ${i}`,
      description: `description ${i}`,
      expanded: false,
    };
  });
export default {
  name: "App",
  data() {
    return {
      contents,
    };
  },
};
</script>
<style scoped>
.title {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.title,
.description {
  border: 1px solid black;
  padding: 5px;
}
</style>