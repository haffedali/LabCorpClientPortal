import {apiRoute} from './APIHeaders';

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

/**
 * @param {string} obj.entity - The entity you wish to search
 * @param {string[]} obj.select - Array of fields you want returned
 * @param {object[]} obj.filter - Array of filters you want to run on your call
 * @param {string} obj.id - Id of the entity you are searching for 
 * @param {string} obj.relatedEntity - Relationship name of related entity you want to return
 * @param {string[]} obj.relatedSelect - Array of fields you want returned from related entity
 * 
 * -NOTE-
 * filter object should be shaped as follows
 * {field: string, value :string}
 */
export const buildApiCall = ({entity, select, filter, id, relatedEntity, relatedSelect})=>{
    let string = apiRoute + entity;
    if (id){
        string += `(${id})/`
    }
    if (select){
        string += buildSelectString(select)
    }
    if (filter){
        string += buildFilterString(filter)
    }
    if (relatedEntity){
        string += buildRelatedString(relatedEntity, relatedSelect)
    }
    return string
}

/**
 * @param {object[]} filterArray - Array of filter
 * In the array the object should looks like 
 * {field: string, value: string}
 * Field being the field to filter on, value being what you are looking for
 */

const buildFilterString = (filterArray) => {
    let first = true
    let string = `&$filter=`
    filterArray.forEach((filterItem)=>{
        if (!first){
            string += ' and '
        }
        string += `contains(${filterItem.field}, '${filterItem.value}')`
        first = false
    })
    return string
}

/**
 * @param {string[]} selectArray - array of strings to be parsed and returned
 * @param {boolean} isRelatedSelect - Flag for modified string for use in related entity select 
 */
const buildSelectString = (selectArray, isRelatedSelect) => {
    let string
    if (isRelatedSelect){
        string = "$select=";
    }else {
        string = "?$select=";
    }
    let first = true;
    selectArray.forEach((option)=>{
        if (first){
            string += option
            first = false
        }
        else {
            string += "," + option
        }
    })
    return string
}

/**
 * 
 * @param {string} relatedEntity 
 * @param {string[]} relatedSelect 
 */
const buildRelatedString = (relatedEntity, relatedSelect) => {
    let string = '&$expand=';
    string += relatedEntity;
    if (relatedSelect){
        string += `(${buildSelectString(relatedSelect, true)})`
    }
    return string
}


/**
 * 
 * @param {string} entityName - Entity of record you wish to create
 */
export const buildApiPost = (entityName) => {
    return apiRoute + entityName
}











