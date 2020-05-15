import {SWITCH_MENU} from '../actionTypes'

export function switchMenu(menuName){
    return{
        type: SWITCH_MENU,
        menuName
    }
}