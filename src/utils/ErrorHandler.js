// import store from "../store";
// import ValidationErrorHandler from "./ValidationErrorHandler";
import Vue from 'vue';

export default class ErrorHandler {
    error;
    constructor(error) {
        this.error = error;
    }

    init() {
        if (this.error.response) {
            switch (this.error.response.status) {
                case 401: {
                    this.error401(this.error.response);
                    break;
                }
                case 404: {
                    this.error404(this.error.response);
                    break;
                }
                case 411: {
                    this.error411(this.error.response);
                    break;
                }
                case 422: {
                    this.error422();
                    break;
                }
                case 500: {
                    this.error500(this.error.response);
                    break;
                }
            }
        } else {
            console.log(this.error);
            this.networkError();
        }
    }

    error401(response) {
        Vue.swal({
            icon: 'error',
            title: 'Oops...',
            text: response.data.errors ? response.data.errors.message : response.data.message,
            timer: 1500,
        });
        // store.dispatch('AUTH_LOGOUT')
    }

    error404(response) {
        Vue.swal({
            icon: 'error',
            title: 'Oops...',
            text: response.data.errors.message,
            timer: 1500,
        });
    }

    error411(response) {
        Vue.swal({
            icon: 'error',
            title: 'Oops...',
            text: response.data.errors.message,
            timer: 1500,
        });
    }

    // error422() {
    //     new ValidationErrorHandler(this.error.response.data)
    // }    

    error500(response) {
        Vue.swal({
            icon: 'error',
            title: 'Oops...',
            text: response.data.errors.message,
            timer: 1500,
        });
    }    

    networkError() {
        Vue.swal('Internet?',
            'Please check your internet connection.',
            'question');
    }
}