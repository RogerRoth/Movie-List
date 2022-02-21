import axios from "axios";
import * as config from '../../config.json';

export const api = axios.create();

export const apiClean = axios.create()

export const params = {
    'api-key': config.api_key,
    'language': 'en-US',
    'page': '1',
}
