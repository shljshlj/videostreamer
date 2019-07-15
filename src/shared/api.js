import axios from 'axios';
import { YT_API_KEY, BASE_API_ENDPOINT } from './constants';

console.log(YT_API_KEY)

export default axios.create({
    baseURL: BASE_API_ENDPOINT,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: YT_API_KEY
    }
});