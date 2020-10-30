import Address from "../models/Address";

export default class AddressFactory {
    static createFromJson(json) {
        console.log("i am gere")
        return new Address(json);
    }

    static createFromJsonArray(jsonArray) {
        var jsonData = [];
        jsonArray.forEach(function(item){
            jsonData.push(AddressFactory.createFromJson(item));
        })

        return jsonData;
    }
}
