import Axios from "axios";
import { API_URL } from "../utils/api"
import ErrorHandler from "../utils/ErrorHandler";
export default class CompanyService {
    static async getCompaines() {
        try {
            let response = await Axios(
                `${[API_URL]}company/read.php`,
                {
                    method: 'GET',
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

    static async getSingle(id) {
        try {
            let response = await Axios(
                `${[API_URL]}company/single_read.php`,
                {
                    method: 'GET',
                    params: {
                        id: id
                    }
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

    static async isSync(id, is_sync) {
        try {
            let response = await Axios(
                `${[API_URL]}company/is_sync.php`,
                {
                    method: 'POST',
                    // headers: {
                    //     Authorization: "Bearer " + store.getters.access_token
                    // }
                    data: {
                        id: id,
                        is_sync: is_sync ? 1 : 0
                    }
                }
            );
            return response.data;
        } catch (error) {
            (new ErrorHandler(error)).init();
            return false;
        }
    }

    static async uploadLogo(id, logo) {
        const formData = new FormData();
        formData.append('id', id)
        formData.append('logo', logo, logo.name)
        try {
            let response = await Axios({
                url: `${[API_URL]}company/logo.php`,
                method: 'POST',
                // headers: {
                //     Authorization: "Bearer " + store.getters.access_token
                // },
                data: formData
            });
            return response.data;

        } catch (error) {
            (new ErrorHandler(error)).init();
            return false;
        }
    }

    static async getCarByCompanyId(id, page) {
        try {
            let response = await Axios(
                `${[API_URL]}car/read.php`,
                {
                    method: 'GET',
                    // headers: {
                    //     Authorization: "Bearer " + store.getters.access_token
                    // }
                    params: {
                        company_id: id,
                        page: page
                    }
                }
            );
            return response.data;
        } catch (error) {
            (new ErrorHandler(error)).init();
            return false;
        }
    }

    static async getAddress(id){
        try {
            let response = await Axios(
                `${[API_URL]}company/address.php`,
                {
                    method: 'GET',
                    params: {
                        company_id: id
                    }
                }
            );
            return response.data;
        } catch (error) {
            (new ErrorHandler(error)).init();
            return false;
        }
    }
}