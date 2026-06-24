console.clear();

const createArrayOfObjects = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arr = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
      ];
      resolve(arr);
    }, 3000);
  });
};


createArrayOfObjects()
.then((arr) => {
  console.log(arr); // [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' } ]
})
.catch((error) => {
  console.error(error);
});
