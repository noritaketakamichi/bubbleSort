// Generate a randon array

const genarateRandomArr = (num) => {
  let randomArr = [];
  while (num > 0) {
    let bar = Math.floor(Math.random() * 500 + 1);
    randomArr.push(bar);
    num--;
  }
  return randomArr;
};

const randomArr = genarateRandomArr(10);
console.log(randomArr);

// display on the screen

const container = document.querySelector('.container');

const populateWithBars = (arr) => {
  container.innerHTML = '';
  arr.forEach((bar) => {
    container.innerHTML += `<div class="graphbar" style="height:${bar}px"></div>`;
  });
};

populateWithBars(randomArr);

// create the algorithm
const bubbleSort = (array) => {
  const arr = [...array];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        result.push([...arr]);
      }
    }
  }

  console.log(result);
  return result;
};

bubbleSort(randomArr);

// display each step w/ a delay

const recurse = (arr) => {
  console.log(arr);
  if (arr.length === 0) return;

  populateWithBars(arr[0]);

  setTimeout(() => {
    recurse(arr.splice(1));
  }, 900);
};

document.querySelector('.sort').addEventListener('click', () => {
  console.log('click');
  console.log(bubbleSort(randomArr));
  recurse(bubbleSort(randomArr));
});
