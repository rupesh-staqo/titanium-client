// import { NA } from '@/utils/Constant'
export default class Associates {
    constructor(item) {
        return {
            id: item.id,
            name: item.name ? item.name : 'NA',
            company_id: item.company_id,
            is_sync: item.is_sync,
            logo: item.logo,
            created_at: item.created_at
        }
    }
}