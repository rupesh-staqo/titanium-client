import { API_URL } from "../utils/api";
import Axios from "axios";
import ErrorHandler from "../utils/ErrorHandler";

export default class LoginService{
    static async login(data) {
        let postData = {
          "user_email" : data.user_email,
          "password" : data.password,
        }
        try {
            let response = await Axios({
                url: `${[API_URL]}user/login.php`,
                method: 'post',
                data: postData,
            });
            return response.data;

        }catch (error){
            (new ErrorHandler(error)).init();
            return false;
        }
    }
}