export default {
     // 异步操作
     aupdate(context) {
        setTimeout(() => {
            context.commit('update',139)
        }, 1000);
    }
}