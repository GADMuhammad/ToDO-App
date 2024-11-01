let obj = {
  oldKey: "value",
  anotherKey: "anotherValue",
};

// console.log(obj);

obj.newKey = obj.oldKey;

delete obj.oldKey;

// console.log(obj);
