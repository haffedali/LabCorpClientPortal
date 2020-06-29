import  {adalApiFetch} from '../adalConfig';
import {getConfig, apiRoute } from './APIHeaders';

const getConfig = {
    method: 'post',
    'OData-MaxVersion': 4.0,
    'OData-Version': 4.0,
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    headers: {
        'Prefer': "odata.include-annotations=*"
    },
    data: data
};