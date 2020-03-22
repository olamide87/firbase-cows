import axios from 'axios';
import apiKeys from '../apikeys.json';

//https://fir-cows-df2a4.firebaseio.com.cows.json
const baseUrl = apiKeys.firebaseKeys.databaseURL;


const getCows = () => axios.get(`${baseUrl}/cows.json`);


export default { getCows };
