<template>
    <div class="siderbar">
        <div class="list" v-for="(item, index) of navData" :key="index" :class="{active:currentindex === index}">
            <div :class="{item,active:currentindex === index}" @click="show(index)" ><span class="subitem">{{ item }}</span></div>
        </div>
    </div>
</template>

<script>
import { getCateNav } from 'network/catenav'
export default {
    name: 'SiderNav',
    data() {
        return {
            navData: [],
            currentindex:0
        }
    },
    created() {
        getCateNav().then(res => {
            console.log(res)
            this.navData = res.data.list
        })
    },
    methods: {
        show(c){
            this.$emit('cs',c)
            console.log(c)
            this.currentindex = c
        }
    }
}

</script>

<style scoped>
.siderbar{
    width:20%;
    height:calc(100vh - 49px);
    /* border:.1px solid black; */
    background-color:#f0f0f0;
}
.siderbar .list{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    /* margin:.8em 0; */
    /* border:.1px solid red; */
    padding:.79em 0;
}
.siderbar > div.active{
    background:#fff; 
    font-weight: 600;
    padding-left:.23em #ff869a;
    color:#ff869a;
}
.list  .subitem{
    font-size:1.05em;
}
.list .item{
    width:100%;
    text-align: center;
}
.list >div.active{
    border-left:.22em solid #ff869a;
    padding-right:.22em;
}
</style>