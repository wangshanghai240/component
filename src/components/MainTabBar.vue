<template>
  <Tabbar>
      <TabBarItem path='/home'>
        <img slot='item-icon' src="../assets/img/logo-color.png" alt="">
        <div slot="item-txt">首页</div>
      </TabBarItem>
      <TabBarItem path='/cate'>
        <img slot="item-icon" src="../assets/img/logo-color.png" alt="">
        <div slot="item-txt">分类</div>
      </TabBarItem>
      <TabBarItem path='/cart'>
        <img slot="item-icon" src="../assets/img/logo-color.png" alt="">
        <div slot="item-txt">购物车</div>
      </TabBarItem>
      <TabBarItem path='/profile'>
        <img slot="item-icon" src="../assets/img/logo-color.png" alt="">
        <div slot="item-txt">我的</div>
      </TabBarItem> 
    </Tabbar>
</template>

<script>
import Tabbar from "./tabbar/TabBar.vue";
import TabBarItem from './tabbar/TabBarItem.vue'
export default {
    name:'maintabar',
    components:{
        TabBarItem,
        Tabbar
    }
}
</script>

<style>

</style>