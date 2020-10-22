import Axios from "axios";
import { API_URL } from "../utils/api"
import ErrorHandler from "../utils/ErrorHandler";
export default class CompanyService{
    static async getCompaines(){
        try {
            let response = await Axios(
                `${[API_URL]}company/read.php`,
                {
                    method: 'get',
                    // headers: {
                    //     Authorization: "Bearer " + store.getters.access_token
                    // }
                }
            );
            return response.data;
        } catch (error) {
            (new ErrorHandler(error)).init();
            return false;
        }
    }
}