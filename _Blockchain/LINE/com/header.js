import axios from "axios";
import { generateRandomString } from './randomStr.js';
import Dotenv from 'dotenv';

// Header 정보
const apiKey = Dotenv.config().parsed.SERVICE_API_KEY;
const apiSecret = Dotenv.config().parsed.SERVICE_API_SECRET;
const walletAddress = Dotenv.config().parsed.WALLET_ADDRESS;
const walletSecret = Dotenv.config().parsed.WALLET_ADDRESS_SECRET;
const response = await axios.get(`https://test-api.blockchain.line.me/v1/time`, { headers: { 'service-api-key': apiKey } })
const timeStamp = response.data.responseTime;
const nonce = generateRandomString(8);

export { walletAddress, walletSecret, apiKey, apiSecret, timeStamp, nonce }