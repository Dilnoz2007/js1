let num;
let i = 0;
while(i == 0){
  num = +prompt('son kiriting')
  if(num == 0 || num == NaN){
  }else{
    let result = num * num * num;
    console.log(result);
    i++
  }
}