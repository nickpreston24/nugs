<template>
  <div>
    <div v-for="(item, key, index) of contents" :key="item.id">
      <div class="id" @click="item?.expanded = !item?.expanded">
        <div>
          <b>{{ index }}</b>
        </div>
        <div>
          <span v-if="item?.expanded">&#x2191;</span>
          <span v-else>&#x2193;</span>
        </div>
      </div>
      <div class="description" v-if="item?.expanded && item?.description">
        {{ item.description }}
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
          v-if="expandElement(listItem)"
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
export default {
  props: {
    list: {
      type: Array,
      required: false,
      default: [],
    },
  },
  computed: {
    contents() {
      console.log("this.list", this.list);
      return this.list;
    },
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
