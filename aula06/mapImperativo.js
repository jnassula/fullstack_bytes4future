const doubleMap = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
    return doubled;
  };
  
  console.log(doubleMap([2, 3, 4])); // [4, 6, 8]

  