import {MENUINFO_CHANGE} from '../actionTypes';
// 记录当前展开菜单
const menuState = {
    openMenu: [],
}
export default function menuInfo(state = menuState, action) {
    switch (action.type) {
        case MENUINFO_CHANGE:
            return {
                openMenu: action.value ? action.value.openMenu : state.openMenu,
            };
        default:
            return state;
    }
}