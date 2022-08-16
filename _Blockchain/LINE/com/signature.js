import CryptoJs from "crypto-js";
import _ from "lodash";

export default class SignatureGenerator {
    
    static signature(apiSecret, method, path, timestamp, nonce, parameters = {}, body = {}) {
        let obj = _.assignIn(parameters, body);
        function createSignTarget() {
          let signTarget = `${nonce}${timestamp}${method}${path}`;
          if (parameters && _.size(parameters) > 0) {
            if (signTarget.indexOf('?') < 0) {
              signTarget += '?'
            } else {
              signTarget += '&'
            }
          }
          return signTarget;
        }
        
        let signTarget = createSignTarget();

        if (obj && _.size(obj) > 0) {
            signTarget += this.flatten(obj);
            console.log('#### signTarget', signTarget);
            console.log('');
        }
        let hash = CryptoJs.HmacSHA512(signTarget, apiSecret);
        return CryptoJs.enc.Base64.stringify(hash);
    }

    static flatten(requestBody = {}) {
      const objBody = _.cloneDeep(requestBody)
      const flatPair = {}
      Object.keys(objBody).forEach(key => {
          const value = objBody[key]
          if(Array.isArray(value)) {
              let allSubKeys = []
              value.forEach(elem => {
                  allSubKeys = _.union(allSubKeys, Object.keys(elem))
              })
              console.log('#### value: ', value);
              value.forEach(elem => {
                allSubKeys.forEach(subKey => {
                  console.log('## subKey :', subKey);
                  const flatKey = `${key}.${subKey}`
                  const flatRawValue = elem[subKey] ? elem[subKey] : EMPTY
                  const prevFlatValue = flatPair[flatKey]
                  flatPair[flatKey] =
                      _.isUndefined(prevFlatValue) ? flatRawValue : `${prevFlatValue},${flatRawValue}`
                })
              })
          } else {
              flatPair[key] = objBody[key]
          }
      })

      return Object.keys(flatPair).sort().map(key => `${key}=${flatPair[key]}`).join('&');
  }
}