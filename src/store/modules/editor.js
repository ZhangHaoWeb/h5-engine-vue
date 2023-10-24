const state = () => ({
    editSize: {
        width: 350,
        height: 750
    }
})

const actions = {

}

const mutations = {
    changeEditSize(state, {width, height}) {
        state.editSize.width = width
        state.editSize.height = height
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}