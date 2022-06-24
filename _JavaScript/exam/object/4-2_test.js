let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true, 같은 객체입니다.

// user와 clone은 sizes를 공유한다.
user.sizes.width++;
console.log(clone.sizes.width); // 51

user.name = "JohnEidt";
console.log("user name = ", user.name);
console.log("clone name = ", clone.name);