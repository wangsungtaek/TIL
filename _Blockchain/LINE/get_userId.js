import axios from "axios";
import SignatureGenerator from "./com/signature.js";
import { walletAddress, apiKey, apiSecret, nonce, timeStamp } from './com/header.js';

const userId = 'U556719f559479aab8b8f74c488bf6317'
const path = `/v1/users/${userId}`;
const query_params = {}

// Signature 생성
const signature = SignatureGenerator.signature(
    apiSecret
  , 'GET'
  , path
  , timeStamp
  , nonce
  , query_params
);

// api header 정보
const config = {
  headers: {
    'service-api-key': apiKey,
    'nonce': nonce,
    'timestamp': timeStamp,
    'signature': signature
  },
  params: {
    ...query_params
  }
}

axios.get(`https://test-api.blockchain.line.me${path}`, config)
  
  .then((res) => {
    console.log(res.data);
  }).catch((error) => {
    console.log('Error', error.response.data);
  })


