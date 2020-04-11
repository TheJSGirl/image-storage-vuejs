import axios from 'axios';
import qs from 'qs';
const CLIENT_ID = 'fcf7cbb963fe02f';
const BASE_URL = 'https://api.imgur.com';
export default {
  login(){
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(querystring)}`;

  },
  fetchImages(token) {
    return axios.get(`${BASE_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}