import {
    ADD, UPDATE
} from 'store/mutations-types'

export default {
    // 同步操纵，在其他组件中使用this.$store.commit('方法名')来改变我们的状态
    [ADD](state, payload) {
        return state.counter += payload.mount
    },
    [UPDATE](state,payload) {
        state.student[0].id = payload
    }
}