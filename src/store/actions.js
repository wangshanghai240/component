export default {
     // 异步操作
    //  aupdate(context) {
    //     setTimeout(() => {
    //         context.commit('update',139)
    //     }, 1000);
    // }
    cartadd(context,payload){
        let product = context.state.cart.find(item => item.iid === payload.iid)
        if(product){
            context.commit('addCounter',product)
        }else{
            payload.count = 1
            context.commit('addcart',payload)
        }
    }
}