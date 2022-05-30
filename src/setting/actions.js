import { ACTION_SAVE_SETTING } from "./actionTypes";

/**
 * 개인설정 저장
 * @param {*} targetAmount 
 * @param {*} monthLife 
 * @param {*} dayLife 
 * @param {*} livExpDepositId 
 * @returns 
 */
export function saveSetting(targetAmount, monthLife, dayLife, livExpDepositId) {
    return {
        type: ACTION_SAVE_SETTING,
        targetAmount: targetAmount,
        monthLife: monthLife,
        dayLife: dayLife,
        livExpDepositId: livExpDepositId
    }
}