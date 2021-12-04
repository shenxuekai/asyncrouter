import {createStore} from 'vuex'
const  state = {
    allRoutes:[],
    name:'shenxk'
};
const mutations = {
    set_allRoutes(state:any,payload:any){
        state.allRoutes = payload
    }
}
const options = {
    state,
    mutations
}
const  store = createStore(options)
export default store