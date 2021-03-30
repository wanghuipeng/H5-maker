import diyComponent from './diyComponent'
const home = {
    state: {},
    mutations: {},
    actions: {}
}
Object.assign(home.state, diyComponent.state)
Object.assign(home.mutations, diyComponent.mutations)
Object.assign(home.actions, diyComponent.actions)
export default home