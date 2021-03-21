// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        // Swap!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    console.log("ONE PASS COMPLETED!!");
  }

  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// ES2015 Version
function bubbleSortES2015(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSortES2015([8, 1, 2, 3, 4, 5, 6, 7]);
