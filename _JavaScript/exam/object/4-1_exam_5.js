let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

function multiplyNumberic(obj) {
  for(let key in obj) {
    if((typeof obj[key]) == 'number') {
      obj[key] *= 2;
    }
  }
  return obj
}

console.log(multiplyNumberic(menu));