/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

var factorial = function(n) {
  if(n < 0){
    return null;
  }

  if(n === 0){
    return 1;
  }

  return (n * factorial(n - 1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if(array.length < 1){
    return 0;
  }
  return (array[0] + sum(array.slice(1)))
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var flatArray = array.flat(2); // flatten array [1,2,3,4,5]
  if(flatArray.length < 1){ //base case: array length
    return 0;
  }
  return (flatArray[0] + arraySum(flatArray.slice(1))); //recursive: first index + arraySum(flattenedArray.slice(1)
};

// 4. Check if a number is even.
var isEven = function(n){
  //if n divided by 2
  // console.log(Math.floor(n / 2) / 2);
  if (n === 1 || n === -1){
    return false;
  } else if(n === 0){
    return true;
  }
  if(n < 0){ //if the number is a negative number add n++
    n += 2
  } else {//if the number is a positive number subtract
    n -= 2
  }
  return isEven(n);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){
    return 0;
  }
  if(n < 0){ // if negative number, add 1 and add to sum
    return ((n + 1) + sumBelow(n + 1));
  } else{ // if positive number, subtract 1 + recursve
    return ((n - 1) + sumBelow(n - 1));
    // 9 + sumBelow(9)
    // 8 + sumBelow(8)
    // 7 + sumBelow(7)
    // 1 + sumBelow(1)
    // 0 + sumbelow(0)
  }

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  //each iteration increase x
  var arr = [];
  if (x === y || x+1 === y || x-1 === y){
    return arr;
  }

  if (x > y){
    arr.push(--x);
    return arr.concat(range(x--,y));
  }else{
    arr.push(++x);
    return arr.concat(range(x++,y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0){
    return 1;
  }
  if (exp > 0){
    return base * exponent(base, exp - 1);
  }
  if (exp < 0){
      return 1 / (base / exponent(base, exp + 1));     
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true 2^4 2*2*2*2
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 1) {
    return true;
  }
  if(n === 0 || n%2 !== 0){
    return false;
  }
  return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if(string.length === 1){
    return string;
  }
  return reverse(string.substring(1)) + string[0]

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.split('').join('').toLowerCase()
  if(string.length === 1 || string.length === 0){
    return true;
  }
  if(string[0] === string[string.length-1]){
    return palindrome(string.slice(1, string.length-1));
  }else{
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y=== 0){
    return NaN
  }
  if (x >= 0){
    if (x < y){
      return x;
    } else if (x === 0){
      return 0;
    } else if (y === 0){
      return NaN;
    }
  return modulo(x-y,y) 
  }
 

  if (x < 0){
    if(x > -y || x > 0 || (x-y) > 0){
      return x;
    }else if(x === 0){
      return 0
    }else if((x-y) != 0 && y < 0){
      return modulo(x-y,y)
    }else{
      return modulo(x+y, y)
    }
  }
  
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if((x < 0 && y < 0) || (x > 0 && y < 0)){
    return -x + multiply(x, y + 1);
  }
  if(x < 0 && y > 0){
    return -y + multiply(x+1, y);
  }
  if(x === 0 || y === 0){
      return 0;
  }
  return x + multiply(x, y - 1);

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y){
  if(y < 0 && x < 0 && y < x){
    return 0;
  }else if (y === 0) {
    return NaN;
  }else if (y === 1) {
    return x;
  }else if (x === y) {
    return 1;
  }else if (x < y) {
    return 0;
  }else if(x === 0){
    return 0
  }else if (x > 0&& y>0){
    return 1 + divide(x - y, y);
  }
};


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x < 0 || y < 0){
    return null;
  }
  if(x === 0){
    return y;
  }
  if(y === 0){
    return x;
  }

  return gcd(y, x%y)
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1.length <1 && str2.length <1){
    return true;
  }
  if(str2.length === 1 && str1.length === 1){
    if (str1[0] === str2[0]){
      return true;
    }
  }

  if(str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1))
  }
  if(str1[0] !== str2[0]){
    return false;
  }
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if(str.length === 1){
    return [str];
  }

  var arr = [];
  arr.push(str[0])
  return arr.concat(createArray(str.slice(1)))
  
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length < 1){
    return [];
  }
  var arr = [];
  arr.push(array[array.length - 1]);
  return arr.concat(reverseArr(array.slice(0, array.length -1)))

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if(length === 1){
    return [value];
  }
  var arr = [];
  arr.push(value);
  return arr.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {

  var arr = [];
  if (n ===1){
    return ['1'];
  }else{
    if(n % 15 === 0){
    arr.push('FizzBuzz')
  }else if(n % 3 === 0){
    arr.push('Fizz')
  }else if(n % 5 === 0){
    arr.push('Buzz')
  }else{
    arr.push(`${n}`)
  }
  return fizzBuzz(n-1).concat(arr)
  }
  
};


// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(array.length === 0){
    return 0;
  }
  if(array[0] === value){
    return 1 + countOccurrence(array.slice(1), value)
  }
  if(array[0] !== value){
    return countOccurrence(array.slice(1), value)
  }
  
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {

  if(array.length < 1){
    return [];
  }
  var arr = [];
  arr.push(callback(array[0]));


  return arr.concat(rMap(array.slice(1), callback))
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0
  for (var k in obj){

    if(typeof obj[k] === 'object'){
      count += countKeysInObj(obj[k], key)
    }
    if(k === key){
      count++; 
    }
  }
  return count;
};


// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0
  for (var k in obj){

    if(typeof obj[k] === 'object'){
      count += countValuesInObj(obj[k], value)
    }
    if(obj[k] === value){
      count++; 
    }
  }
  return count; 
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var k in obj){

    if(typeof obj[k] === 'object'){
      replaceKeysInObj(obj[k], oldKey, newKey)
    }
    if(k === oldKey){
      obj[newKey] = obj[k]; 
      delete obj[oldKey];
    }
  }
  return obj; 
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if(n <= 0){
    return null;
  }
  if(n === 1){
    return [0,1];
  }
  var a = fibonacci(n-1);
  a.push(a[a.length-1]+a[a.length-2]);
  return a;
};


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0){
    return null;
  }else if (n === 0){
    return 0;
  }else if(n === 2 || n === 1){
    return 1;
  }
  return nthFibo(n - 1) + nthFibo(n - 2)
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var arr = [];
  if(array.length < 1){
    return [];
  }
  arr.push(array[0].toUpperCase())
  return arr.concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var arr = [];
  if(array.length < 1){
    return [];
  }
  arr.push(array[0][0].toUpperCase() + array[0].slice(1,array[0].length))
  return arr.concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var count = 0;
  for(var k in obj){
    if(typeof obj[k] === 'object'){
      count += nestedEvenSum(obj[k]);
    }
    if(obj[k] % 2 === 0){
      count += obj[k]
    }
  }
  return count;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var arr = [];
  array.forEach(function(narr){
    if(Array.isArray(narr)){
      arr = arr.concat(flatten(narr));
    } else {
      arr.push(narr);
    }
  })
  return arr;
};



// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (!obj){
    var obj = {};
  }
  if(str.length === 0){
    return obj;
  }
  if (str[0] in obj){
    obj[str[0]]++
  }else{
    obj[str[0]] = 1;
  }
    return letterTally(str.slice(1),obj)
 
};



// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var arr = [];
  if (list.length < 1){
    return [];
  } 

  if (list[0] === list[1]){
    return arr.concat(compress(list.slice(1,list.length)))
  }else{
    arr.push(list[0]);
    return arr.concat(compress(list.slice(1,list.length)))
  }
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var arr = [];
  if(array.length < 1){
    return [];
  }
  array[0].push(aug)
  arr.push(array[0]);
  return arr.concat(augmentElements(array.slice(1, array.length), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var arr = [];
  if(array.length <1){
    return [];
  }

  if(array[0] === 0 && array[1] === 0){
    return arr.concat(minimizeZeroes(array.slice(1,array.length)))
  }else{
    arr.push(array[0])
    return arr.concat(minimizeZeroes(array.slice(1,array.length)))
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var arr = [];
  if(array.length < 1){
    return [];
  }
  if(array.length === 1){
    Math.abs(array[0]);
    arr.push(array[0]);
    return arr;
  }
  array[0] = Math.abs(array[0]);
  arr.push(array[0]);
  array[1] = Math.abs(array[1]) * -1;
  arr.push(array[1]);

  return arr.concat(alternateSign(array.slice(2, array.length)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if(str.length < 1){
    return ''
  }
  var rtnStr = '';
  var wordObj = {'0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8':'eight', '9': 'nine'};
  var curVal = str[0];
  if(curVal in wordObj){
    rtnStr += wordObj[curVal];
  }else{
    rtnStr += curVal;
  }

  return rtnStr + numToText(str.slice(1, str.length));

};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  var count = 0
  if(!node){
    var node = document.body;
  }

  if(node.childNodes.length > 0){
    node.childNodes.forEach((child)=>{
      if(child.tagName === tag.toUpperCase()){
        count++;
      }
      if(child.childNodes){
        count += tagCount(tag, child);
      }
    }); 
  }

  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if(arguments.length < 3){
    var min = 0;
    var max = array.length - 1;
  };

  if(max < min){
    return null;
  }
  var guess = Math.floor((min+max)/2);

  if (array[guess] === target){
    return guess;
  }
  if (array[guess] < target){
    min = guess + 1;
    return binarySearch(array,target, min, max)
  }
  if (array[guess] > target){
    max = guess - 1;
    return binarySearch(array,target, min, max)
  }

  return -1;

};



// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  //divide
  var mid = Math.floor((array.length)/2)

  //conquer
  var arr1 = array.slice(0,mid)
  var arr2 = array.slice(mid,array.length)

  //combine

  function merge(left, right){
    var result = [];
    var iLeft = 0;
    var iRight = 0;

    while(iLeft < left.length && iRight < right.length){
      if(left[iLeft] < right[iRight]){
        result.push(left[iLeft++])
      }else{
        result.push(right[iRight++])
      }
    }
    return result.concat(left.slice(iLeft)).concat(right.slice(iRight));
  }
  
  if(array.length < 2){
    return array;
  }

  return merge(mergeSort(arr1), mergeSort(arr2));

};



// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if(Array.isArray(input)){
    var copy = [];
    if(input.length < 1){
      return copy;
    }
    if (typeof input[0] === "object" && !Array.isArray(input)){
      return clone(input[0]).concat(clone(input.slice(1,input.length)))
    }
    copy.push(input[0]);
    return copy.concat(clone(input.slice(1,input.length)));
  }else{
    var copy = {};
   for(var key in input){
    if(typeof input[key] === 'object'){
      copy[key] = clone(input[key]);
    } else {
      copy[key] = input[key];
    }
   }
    
   return copy;
  }
};

// var obj1 = {a:1,b:['bb',{bbb:[2]}],c:{cc:[3,{ccc:4},5]}};
// var obj2 = clone(obj1);
// console.log(obj1.b[1]);// 1 [ 'bb', { bbb: [ 2 ] } ]
// console.log(obj1.b[1] === obj2.b[1]);


