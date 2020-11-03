import { getField, updateField } from 'vuex-map-fields';

const state = {
    company_id : "",
    addr1 : "",
    city : "",
    region : "",
    postal_code : "",
    country : "",
    longitude : "",
    latitude : "",
}

const mutations = {
    updateField,

    SET_COMPANY_ID(state,company_id){
        state.company_id = company_id
    },

    SET_ADDRESS(state, payload){
        state.company_id = payload.company_id
        state.addr1 = payload.addr1
        state.city = payload.city
        state.region = payload.region
        state.postal_code = payload.postal_code
        state.country = payload.country
        state.longitude = payload.longitude
        state.latitude = payload.latitude
    }
}

const getters = {
    getField,
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
}