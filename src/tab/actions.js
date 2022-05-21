import { ACTION_CHANGE_TAB } from "./actionTypes";

export function changeTab(tab) {
    return {
        type: ACTION_CHANGE_TAB,
        tab: tab,
    }
}