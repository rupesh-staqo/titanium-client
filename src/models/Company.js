export default class Company {
    constructor(item) {
        return {
            id: item.id,
            name: item.name ? item.name : 'NA',
            company_id: item.company_id,
            total_car: item.total_car,
            is_sync: item.is_sync,
            logo: item.logo?item.logo:require("@/assets/images/car.png"),
            created_at: item.created_at
        }
    }
}