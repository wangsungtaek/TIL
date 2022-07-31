import axios from "axios";
import SignatureGenerator from "./com/signature.js";
import { walletAddress, walletSecret, apiKey, apiSecret, nonce, timeStamp } from './com/header.js';

const path = `/v1/item-tokens/5de7845d/non-fungibles/10000001/mint`;

const data = {
  'ownerAddress': walletAddress,
  'ownerSecret': walletSecret,
  'toAddress': walletAddress,
  'name': 'Nnq8Eda',
};

// Signature 생성
const signature = SignatureGenerator.signature(
    apiSecret
  , 'POST'
  , path
  , timeStamp
  , nonce
  , {}
  , data
);

// api header 정보
const config = {
  headers: {
    'service-api-key': apiKey,
    'nonce': nonce,
    'timestamp': timeStamp,
    'signature': signature,
    'Content-Type': 'application/json'
  },
}

axios.post(`https://test-api.blockchain.line.me${path}`, data, config)
  
  .then((res) => {
    console.log(res.data);
  }).catch((error) => {
    console.log('Error', error.response.data);
  });


