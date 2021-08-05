<template>
  <Tabbar>
      <TabBarItem path='/home'>
        <i class='iconfont icon-shouye' slot="item-icon"></i>
        <div slot="item-txt">首页</div>
      </TabBarItem>
      <TabBarItem path='/cate'>
        <i class='iconfont icon-leimupinleifenleileibie2' slot="item-icon"></i>
        <div slot="item-txt">分类</div>
      </TabBarItem>
      <TabBarItem path='/cart'>
        <i class='iconfont icon-gouwuchekong' slot="item-icon"></i>
        <div slot="item-txt">购物车</div>
      </TabBarItem>
      <TabBarItem path='/profile'>
        <i class='iconfont icon-wodedangxuan' slot="item-icon"></i>
        <div slot="item-txt">我的</div>
      </TabBarItem> 
    </Tabbar>
</template>

<script>
import Tabbar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBarItem,
        Tabbar
    }
}
</script>

<style scoped>

</style>