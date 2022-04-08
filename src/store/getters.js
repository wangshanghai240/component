export default {
    // 类似于计算属性
    // more20stu(state) {
    //     return state.student.filter((item) => {
    //         return item.age > 18
    //     })
    // },
    // more20stulength(state, getters) {
    //     return getters.more20stu.length
    // },
    // moreagestu(state) {
    //     return function(age) {
    //         return state.student.filter(item => item.age > age)
    //     }
    // }
    // 购物车产品数量区别于同款产品个数
    cartlength(state){
        return state.cart.length
    }
}