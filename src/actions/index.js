import * as actionType from './actionTypes'
import {SAVE_COMMENT} from './types'

export const addCounter=(newvalue)=>({
    type:actionType.ADD_COUNTER,
    payload:newvalue
})
export const removeCounter=(newvalue)=>({
    type:actionType.REMOVE_COUNTER,
    payload:newvalue
})
export function saveComment(comment){
    return{
        type:SAVE_COMMENT,
        payload:comment
    }
}