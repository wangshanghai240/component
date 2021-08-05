<template>
  <div class="recommend">
      <div>
          <ul>
              <li v-for="(item,index) in recommend" :key="index">
                  <a :href="item.link">
                      <img :src="item.image" alt="">
                  </a>
                  <div class="title">{{item.title}}</div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    margin-top:15px;
    box-shadow: 0 2px 2px 1px #d0d0d0;
    margin-bottom:20px;
}
.recommend ul{
    display: flex;
    justify-content: center;
    text-align: center;
}
.recommend ul li{
    flex:1;
    list-style: none;
    padding-bottom:8px;
}
.recommend ul li img{
    width:70%;
    max-width:100%;
}
</style>