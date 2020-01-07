import { MENUINFO_CHANGE } from '../actionTypes'

export function menuInfoChange(value) {
    return {
        type: MENUINFO_CHANGE,
        value
    }
}