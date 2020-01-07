import {USERINFO_CHANGE} from '../actionTypes';
// 记录当前用户登录信息
const userState = {
    name: '',
    phone: '',
    address: '',
    company: '',
    avatar: '',
}
export default function userInfo(state = userState, action) {
    switch (action.type) {
        case USERINFO_CHANGE:
            return {
                name: action.value ? action.value.name : state.name,
                phone: action.value ? action.value.phone : state.phone,
                address: action.value ? action.value.address : state.address,
                company: action.value ? action.value.company : state.company,
                avatar: action.value ? action.value.avatar : state.avatar
            };
        default:
            return state;
    }
}