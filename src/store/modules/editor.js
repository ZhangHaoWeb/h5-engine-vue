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
    },
    editComponentStyle: (state, payload) => {
        const idx = payload.idx
        state.editComponentList[idx].style = {
            ...state.editComponentList[idx].style,
            ...payload.style
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations
}