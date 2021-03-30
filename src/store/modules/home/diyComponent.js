const diyComponent = {
    state: {
        componentsArr: null // 所选的组件数组
    },
    mutations: {
        setComponentsArr(state, data) { // 存储选择的组件
            state.componentsArr = data
        }
    }
}
export default diyComponent