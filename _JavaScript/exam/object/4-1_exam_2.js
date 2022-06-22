function isEmpty(obj) {
  let result = true;
  for(let key in obj) {
    result = false;
  }
  return result;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));