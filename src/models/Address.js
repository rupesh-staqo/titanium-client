export default class Address {
    constructor(item) {
        return {
            addr1:item.addr1,
            city:item.city,
            company_id:item.company_id,
            country:item.country,
            id:item.id,
            latitude:item.latitude,
            longitude:item.longitude,
            postal_code:item.postal_code,
            region:item.region,
        }
    }
}