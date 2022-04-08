<template>
  <div class="cart">
      <nav-bar class="nav">
        <div slot='center'>购物车({{cartlength}})</div>
      </nav-bar>
    <cart-list class='list'></cart-list>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar.vue'
import CartList from './childCom/CartList.vue'
import { mapGetters } from 'vuex'

export default {
  components: { NavBar, CartList },
    name:'cart',
    computed:{
      // cartlength(){
      //   // 从getters中获取购物车产品数量
      //   // 因为很多地方都可以用到这个getters
      //   return this.$store.getters.cartlength
      // }
      ...mapGetters([
        'cartlength'
      ])
    }
}
</script>

<style scoped>
.cart{

}
.cart .nav{
  background:#dd6060;
  position:fixed;
  width:100%;
  z-index: 9;
  margin-top:-44px;
}
.cart .list{
  margin:44px 0;
}
</style>