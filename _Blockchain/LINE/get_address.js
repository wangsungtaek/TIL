import axios from "axios";

const lbw = 'tlink1w0wn9ryg2rnj7djqu0zlvxkjpdnqxcnzh8gm05'
const path = `/v1/4380401001/accounts/${lbw}`;

axios.get(`https://explorer.blockchain.line.me${path}`)
  
  .then((res) => {
    console.log(res.data);
  }).catch((error) => {
    console.log('Error', error.response.data);
  })


