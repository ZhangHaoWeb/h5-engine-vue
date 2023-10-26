const state = () => ({
    editSize: {
        width: 375,
        height: 750
    },
    currentComponent: -1,
    editComponentList: []
})

const mutations = {
    changeEditSize(state, { width, height }) {
        state.editSize.width = width
        state.editSize.height = height
    },
    editAddComponent(state, payload) {
        state.editComponentList.push(payload)
        state.currentComponent = state.editComponentList.length - 1
    },
    changeCurrentComponent: (state, payload) => {
        state.currentComponent = payload
    }
}

export default {
    namespaced: true,
    state,
    mutations
}