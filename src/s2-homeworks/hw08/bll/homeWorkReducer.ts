import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up'){
                return state.map(el => el).sort((a, b)=> b.age - a.age) // need to fix
            } else if (action.payload === 'down'){
                return state.map(el => el).sort((a, b)=> a.age - b.age) // need to fix
            }
            return state
        }
        case 'check': {
            return state.filter(el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
