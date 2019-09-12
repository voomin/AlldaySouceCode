function solution(s) {
  let answer = s.length;
  const getArr = (string,count)=>{
    var arr = [];
    for(let i=0; i<string.length; i+=count){
      arr.push(string.slice(i,i+count));
    }
    return arr;
  }
  const getLength = (count) => {    
      const arr = getArr(s,count);
      let resultStr = '';
      let tempStr = arr[0];
      let tempNum = 0;
      arr.forEach(function(str){
        if(str === tempStr){tempNum++;}
        else{ resultStr += (tempNum>1?tempNum:'')+''+tempStr; tempStr = str; tempNum = 1;}
      })
      resultStr += (tempNum>1?tempNum:'')+''+tempStr;
      return resultStr.length;
  }
  for(let i=1;i<s.length;i++){
    const length = getLength(i);
    if(answer>length) answer = length;
  }
  return answer;
}

var testCase = [
  ["aabbaccc"],//7
  ["ababcdcdababcdcd"],//9
  ["abcabcdede"],//8
  ["abcabcabcabcdededededede"],//14
  ["xababcdcdababcdcd"],//17
];

//************************************************************************************
const StartTime = new Date();
const TimeOut = () => (new Date() - StartTime) / 1000 + " 초";
const MemOut = () => (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3) + " MB 사용"
const print = (fn,out) => fn(out);
testCase.forEach(function(e){
  print(console.log, solution(...e));
})
print(console.log, MemOut());
print(console.log, TimeOut());
//************************************************************************************