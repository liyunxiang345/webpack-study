const addNum = (x, y) => x + y
const minNum = (x, y) => {
  console.log(x,y);
  if (x > y) {
    return x - y
  } else {
    return y - x
  }
}
export {
  addNum,
  minNum
}