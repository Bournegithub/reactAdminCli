import { HttpGet, HttpPost_Body, HttpPost_Param} from './http';
import config from '../config';

const UserAuthServices = {
    userLogin(payload) {
        return HttpPost_Body(`${config.rootHost}/login`, payload);
    },
    sign(){

    }
};
const MoudleAServieces = {
    getList(){

    },
    addItem(){

    },
    delItem(){

    }
}
export { UserAuthServices, MoudleAServieces }