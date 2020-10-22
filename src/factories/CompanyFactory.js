import Company from "../models/Company";

export default class CompanyFactory {
    static createFromJson(json) {
        return new Company(json);
    }

    static createFromJsonArray(jsonArray) {
        var jsonData = [];
        jsonArray.forEach(function(item){
            jsonData.push(CompanyFactory.createFromJson(item));
        })

        return jsonData;
    }
}
