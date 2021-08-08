<template>
  <div class="pro">
      <h2>我是个人</h2>
      <button @click="add">+</button>
      <h2>{{adda}}</h2>
      <h4>{{ccc}}</h4>
      <li v-for="(item, index) in student" :key="index"></li>
  </div>
</template>

<script>
import { ADD } from 'store/mutations-types'
export default {
    name:'profile',
    data(){
      return{
        student:[]
      }
    },
    computed:{
      adda(){
        return this.$store.state.counter
      },
      ccc(){
        return this.$store.getters.more20stu
      }
    },
    methods:{
      add(){
        // 提交载荷
        this.$store.commit(ADD,{mount:10})
        // 对象方式
        // this.$store.commit({
        //   type:'add',
        //   mount:10
        // })
      }
    }
}
</script>

<style>

</style>