let x = parseInt(prompt('年を入れてください'));
let y = parseInt(prompt('月を入れてください'));
let z = parseInt(prompt('日を入れてください'));
let total = 0;
// parseInt(prompt("日を入力してください"));
// 年
for (let i = 1990; i < x; i++) {
  if (i % 4 == 0 && !i % 100 == 0 || i % 400 == 0) {
    total += 366;
  } else {
    total += 365;
  }console.log(total)
}
// // 月

var month = [31,28,31,30,31,30,31,31,30,31,30,31]
// 配列作成
for(let i = 1; i < y; i++){
  if(i == 1){
      if( x % 4 == 0&& !x % 100 == 0||x % 400 == 0){
      total+=month[i]+1;
    }else{
        total+=month[i];
    }// 2月の時
  }else{
      total+=month[i];
  }
  //それ以外
}
console.log(total);

// 日
total+=z;
console.log(total)
// 曜日
var week = ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日']
for(let i = 0; i<= week.length; i++){
  if(total % 7==0){
    console.log('日曜日');
  }else if(total % 7 ==1){
    console.log('月曜日');
  }else if(total % 7 ==2){
    console.log('火曜日');
  }else if(total % 7 == 3){
    console.log('水曜日');
  }else if(total % 7 == 4){
    console.log('木曜日');
  }else if(total % 7 == 5){
    console.log('金曜日');
  }else{
    console.log('土曜日');
  }
}
