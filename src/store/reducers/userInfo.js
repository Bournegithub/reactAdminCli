import {USERINFO_CHANGE} from '../actionTypes';

const userState = {
    name: '1',
    phone: '2',
    address: '3',
    company: '4'
}
export default function userInfo(state = userState, action) {
    console.log(action,'user-reducer');
    switch (action.type) {
        case USERINFO_CHANGE:
            return {
                name: action.value ? action.value.name : state.name,
                phone: action.value ? action.value.phone : state.phone,
                address: action.value ? action.value.address : state.address,
                company: action.value ? action.value.company : state.company
            };
        default:
            return state;
    }
}