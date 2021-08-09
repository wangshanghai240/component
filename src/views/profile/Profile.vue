<template>
  <div class="pro">
      <h2>我是个人</h2>
      <button @click="add">+</button>
      <button @click="update">修改信息</button>
      <h2>{{adda}}</h2>
      <h4>{{ccc}}</h4>
      <h3>{{updates}}</h3>
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
      },
      updates(){
        return this.$store.state.student[0]
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
      },
      update(){
        // this.$store.commit('update')
        this.$store.dispatch('aupdate')
      }
    }
}
</script>

<style>

</style>