import Car from "../models/Car";

export default class CarFactory {
    static createFromJson(json) {
        return new Car(json);
    }

    static createFromJsonArray(jsonArray) {
        var jsonData = [];
        jsonArray.forEach(function(item){
            jsonData.push(CarFactory.createFromJson(item));
        })

        return jsonData;
    }
}
