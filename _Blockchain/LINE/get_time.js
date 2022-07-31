import axios from 'axios';
import { apiKey } from './com/header.js'

const headers1 = {
  headers: {
    'service-api-key': apiKey,
  }
}

// Time 조회
axios.get('https://test-api.blockchain.line.me/v1/time', headers1).then((res) => {
  console.log(res.data);
  console.log(Math.round((new Date()).getTime() / 1000));
})