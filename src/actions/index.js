import * as actionType from './actionTypes'

export const addCounter=(newvalue)=>({
    type:actionType.ADD_COUNTER,
    payload:newvalue
})
export const removeCounter=(newvalue)=>({
    type:actionType.REMOVE_COUNTER,
    payload:newvalue
})