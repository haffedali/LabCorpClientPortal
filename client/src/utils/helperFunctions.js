
export const camelCaseToDynamics = (camelCaseObject) => {
    const dynamicsObject = {}
    for (let x in camelCaseObject){
        let dynamicsField = camelToDynamicsValueMatrix(x)
        dynamicsObject[dynamicsField] = camelCaseObject[x];
    }
    return dynamicsObject
}

const camelToDynamicsValueMatrix = (camelCaseValue) => {
    switch(camelCaseValue){
        case "name": 
            return "new_name"
        case "address":
            return "address1_line1"
        case "city":
            return "address1_city"
        case "state":
            return "address1_stateorprovince"
        case "zipCode":
            return "address1_postalcode"
        case "phone":
            return "mobilephone"
        case "email":
            return "emailaddress1"
        case "firstName":
            return "firstname"
        case "lastName":
            return "lastname"
        case "country":
            return "address1_country"
        default:
            return "Not mapped yet"
    }
}


