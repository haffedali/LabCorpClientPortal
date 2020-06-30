export const apiRoute = 'https://sswilbobraggins.api.crm.dynamics.com/api/data/v9.1/';

// TIMER header
export const getConfig = {
    method: 'get',
    'OData-MaxVersion': 4.0,
    'OData-Version': 4.0,
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    headers: {
        'Prefer': "odata.include-annotations=*"
    }
};

/**
 * 
 * @param {object} data - Fieldname and value pairs of record you wish to create 
 */
export const postConfigGenerator = (data) => {
    return {
        method: 'post',
        'OData-MaxVersion': 4.0,
        'OData-Version': 4.0,
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        headers: {
            'Prefer': "return=representation"
        },
        data: data
    }
}

export const updateConfigGenerator = (data) => {
    return {
        method: 'patch',
        'OData-MaxVersion': 4.0,
        'OData-Version': 4.0,
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        headers: {
            'Prefer': "return=representation"
        },
        data: data
    }
}