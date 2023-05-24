const randomElement = (arr) => (arr[Math.floor(Math.random() * arr.length)]);

const statusCode = (count, status = [200]) => {
  const test429 = false;
  if (test429 && count % 2 === 0) {
    return 429;
  }
  return 200; //andomElement(status);
}

module.exports = {
  statusCode  
}