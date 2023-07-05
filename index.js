// sample input and sample output of the code

let arr = [1, 3, 2, 2, -4, -6, -2, 8];
let value = 4;

//  return the values of 2D array

const firstvalue = (arr, value) => {
  let count = [];
  let firstarray = [...arr].sort((a, b) => a - b);
  let sortedarray = [...firstarray];
  let targetvalue = value * 2;
  let allvalue = [];

  for (let i = 0; i < firstarray.length; i++) {
    let count2 = [];

    for (let j = i + 1; j < firstarray.length; j++) {
      let count3 = firstarray[j];

      if (count2 + count3 === value) {
        count.push(count2, count3);
      }
      if (count2 + count3 === targetvalue) {
        allvalue.push([
          ...sortedarray.slice(0, i),
          num1,
          num2,
          ...sortedarray.slice(j + 1),
        ]);
      }
    }
  }

  // console.log(count,sortedarray,allvalue)
  return { count, sortedarray, allvalue };
};

const { count, sortedarray, allvalue } = firstvalue(arr, value);
// result
console.log("firstarray", count);
console.log("AfterSorting", sortedarray);
console.log("combinationsof All Arrays", allvalue);
