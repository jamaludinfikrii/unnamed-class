function findAverage(inputArr) {
  if (inputArr.length === 0) {
    return 0;
  }

  var total = 0;
  for (var i = 0; i < inputArr.length; i++) {
    total += inputArr[i];
  }

  var average = total / inputArr.length;
  return average;
}


function isIsogram(str) {
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true
}
