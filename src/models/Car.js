export default class Car {
    constructor(item) {
        return {
            vehicle_id:item.vehicle_id,
            company_id:item.company_id,
            make:item.make,
            model_name:item.model_name,
            year:item.year,        
            image:item.filename            
        }
    }
}