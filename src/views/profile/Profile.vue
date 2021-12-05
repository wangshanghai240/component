<template>
  <div class="profile">
    <login/>
  </div>
</template>

<script>
// import { ADD } from 'store/mutations-types'
import login from 'views/login/Login.vue'
export default {
    components:{login},
    name:'profile',
    data(){
      return{
        
      }
    },
   
    methods:{
      
    }
}
</script>

<style scoped>
html{
  background:#551d1d;
}
</style>