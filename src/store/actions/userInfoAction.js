import { USERINFO_CHANGE } from '../actionTypes'

export function userInfoChange(value) {
    return {
        type: USERINFO_CHANGE,
        value
    }
}