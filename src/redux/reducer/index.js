import {SWITCH_MENU} from '../actionTypes'

const initialState = {
    menuName: '首页'
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            }
            break;
        default:
            return {
                ...state
            }
    }
}

export default reducer
