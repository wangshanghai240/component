import {
    ADD,
    UPDATE,
    ADDCART,
    ADDCOUNTER
} from 'store/mutations-types'
// mutation的唯一目的就是改变state的状态
// 而且mutation里面的方法要尽可能的单一
export default {
    // 同步操纵，在其他组件中使用this.$store.commit('方法名')来改变我们的状态
    [ADD](state, payload) {
        return state.counter += payload.mount
    },
    [UPDATE](state, payload) {
        state.student[0].id = payload
    },
    [ADDCART](state, payload) {
        // let oldproduct = null
        // if (state.cart !== []) {
        //     for (let item of state.cart) {
        //         // 说明之前添加过该产品了
        //         if (item.iid === payload.c.iid) {
        //             payload.c = item
        //             oldproduct.count++
        //         } else {
        //             oldproduct.count = 1
        //             state.cart.push(payload.c)
        //         }
        //     }
        // } else {
        //     state.cart.push(payload.c)
        // }
        // console.log(state.cart);
        // 查找是否添加过该产品
        // let oldproduct = state.cart.find(item => item.iid === payload.c.iid)
        // console.log(payload.c);
        // if (oldproduct) {
        //     oldproduct.count += 1
        // } else {
        //     oldproduct.count = 1
        //     state.cart.push(oldproduct)
        // }
        state.cart.push(payload)
        console.log(state.cart);
    },
    [ADDCOUNTER](state,payload){
        payload.count += 1
        console.log(payload);
    }
}