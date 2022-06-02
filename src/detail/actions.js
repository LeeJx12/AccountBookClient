import { SET_DEPOSITS } from "./actionTypes";


export function setDeposits(deposits) {
    return {
        type: SET_DEPOSITS,
        deposits: deposits
    }
}