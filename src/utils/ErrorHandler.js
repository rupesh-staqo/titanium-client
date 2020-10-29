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
                    console.log(JSON.stringify(this.error.response));
                    break;
                }
                case 411: {
                    console.log(JSON.stringify(this.error.response));
                    break;
                }
                case 422: {
                    this.error422(this.error.response);
                    break;
                }
                case 500: {
                    console.log(JSON.stringify(this.error.response));
                    break;
                }
            }
        } else {
            console.log(this.error);
        }        
    }

    error401(response) {
        Vue.swal({
            icon: 'error',
            title: 'Oops...',
            text: response.data.error['image'] ? response.data.error['image'] : JSON.stringify(response.data.error),
        });
    }
    
    error422(response) {
        Vue.swal({
            icon: 'error',
            title: 'Oops...',
            text: response.data.message,
        });
    } 
}