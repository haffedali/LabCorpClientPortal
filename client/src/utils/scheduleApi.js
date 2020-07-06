import axios from 'axios';
import  {adalApiFetch} from '../adalConfig';
import { apiRoute } from './APIHeaders';



export const scheduleApi = (date) => {
    let config = {
        method: 'post',
        'OData-MaxVersion': 4.0,
        'OData-Version': 4.0,
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        headers: {
            'Prefer': 'return=representation'
        },
        data: date
    };
    console.log(date)

         const createCall = apiRoute + 'appointments'
         return adalApiFetch(axios, createCall, config)

}