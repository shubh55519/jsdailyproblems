const arr = [2,5,7,8,5,6,8,6,"yhfd","ru",0,"8"];
// 1-reqarr to put value
// 2-for loop on give arr
// 3-for every i of arr, be have to loop on reqarr
// 4- cond to compare every index of reqarr with each index(i) of given arr.
// 5- if equals then put (break); 
// 6- if not first push in reqarr then
function distinctArr(arr){
let reqarr = [];
  let x = arr.length-1;

  for(let i=0; i<=x ;i++){

    let flagvar = false;
    for(let j=0;j<reqarr.length;j++){
        if(arr[i] == reqarr[j]){
          flagvar = true;
          break;
        }
    }
  if(flagvar==false){
    reqarr.push(arr[i]);
  } 
  }

  return reqarr;
}
console.log(distinctArr(arr));

// const arr2 = [...new Set(arr)];