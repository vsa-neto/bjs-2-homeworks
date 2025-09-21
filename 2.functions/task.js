function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Infinity;
	let max = -Infinity;

	let sum = 0;

	for (i = 0; i < arr.length; ++i) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
  let avg = +(sum / arr.length).toFixed(2);
	return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let nozzleSum = arr.reduce(
    (currentSum, currentValue) => currentSum + currentValue
  );
  return nozzleSum;
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr),
    max = Math.max(...arr),
    nozzleMaxMin = max - min;

  return nozzleMaxMin;
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let evenSum = 0,
    oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return evenSum - oddSum;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0,
    countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    let ResultCurrentArr = func(...arrOfArr[i]);
    if (ResultCurrentArr > maxWorkerResult) {
      maxWorkerResult = ResultCurrentArr;
    }
  }
  return maxWorkerResult;
}