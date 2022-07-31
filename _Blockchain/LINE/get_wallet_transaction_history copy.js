import axios from "axios";
import SignatureGenerator from "./com/signature.js";
import { walletAddress, apiKey, apiSecret, nonce, timeStamp } from './com/header.js';

const path = `/v1/wallets/${walletAddress}/transactions`;
const query_params = {
  'limit': 1,
  'orderBy': 'desc',
  'page': 1
}

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


