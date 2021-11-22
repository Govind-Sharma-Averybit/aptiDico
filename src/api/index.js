import axios from 'axios';
import { BASE_URL, } from './apiconstants'

export default function Api(path, params, method, data = null, headers = null) {

  return axios({
    url: path,
    method: method,
    baseURL: BASE_URL,
    params: params,
    data: data,
    headers: headers
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
      // if (error.response.data !== null && error.response.data !== undefined) {
      //   throw error.response.data
      // } else {
      //   throw error;
      // }
    });





}



