<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in title" :key="index" class="title">
      <span
        :class="{ active: index === currentindex }"
        @click="show(index)"
        >{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    show(index) {
      this.currentindex = index;
      this.$emit('tabclick',index)
    },
  },
};
</script>

<style>
.tabcontrol {
  text-align: center;
  background:#fff;
}
.tabcontrol .title {
  display: inline-block;
  width: 33.333%;
  padding: 8px 0;
}
.tabcontrol .title span {
  text-decoration: none;
  color: #121;
  /* border:2px solid transparent; */
}
.tabcontrol .title .active {
  padding: 5px;
  color: #f40;
  border-bottom: 2px solid #f40;
}
</style>