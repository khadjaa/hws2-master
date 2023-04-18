const initState = {
    isLoading: false,
}

type ActionsTypes = LoadingACType

type StateType = {
    isLoading: boolean
}


export const loadingReducer = (state:StateType = initState, action: ActionsTypes): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":{
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
