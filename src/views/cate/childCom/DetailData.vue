<template>
    <div class="list" v-infinite-scroll="loadmore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "DetailData",
    data() {
        return {
            count:0,
            data:[],
            busy:false
        }
    },
    props: {
        ppp: {
            type: Number,
            default: 0
        }
    },
    methods: {
        loadmore(){
            this.busy = true
            // setTimeout(()=>{
            //     for(let i = 0, j = 10; i < j; i++){
            //         this.data.push({name:this.count++})
            //     }
            //     console.log(this.data)
            //     this.busy = false
            // }, 1000)
        }
    }
}

</script>

<style scoped>
.list{
    /* height:200px; */
    width:100px;
}
</style>