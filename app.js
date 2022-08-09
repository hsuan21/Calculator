// 畫面輸出
let pictop = document.querySelector(".picTop");
let picbottom = document.querySelector(".picbottom");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");

let acc = document.querySelector(".acc");
let del = document.querySelector(".del");

let remove = document.querySelector(".remove");
let take = document.querySelector(".take");
let plus = document.querySelector(".plus");
let reduce = document.querySelector(".reduce");

let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");

one.addEventListener("click", update);
two.addEventListener("click", update);
three.addEventListener("click", update);
four.addEventListener("click", update);
five.addEventListener("click", update);
six.addEventListener("click", update);
seven.addEventListener("click", update);
eight.addEventListener("click", update);
nine.addEventListener("click", update);
zero.addEventListener("click", update);

// 輸入數字暫存
let display = "";

// 第一個值
let num = 0;

// 第二個值
let num2 = 0;

// 運算子
let cal = "";

// 計算總和
let calculate = num + cal + num2;

// 總和
let total = 0;

// console.log(total);

// +,-,*,/時顯示在螢幕
function numCal(e) {
    
  if (cal == "") {
    if(total != 0){
        num = total;
        cal = e.target.innerHTML;
        calculate = num + cal;
        pictop.innerHTML = calculate;
        picbottom.innerHTML = num;
        display = "";
    }else{
        num = Number(display);
        cal = e.target.innerHTML;
        calculate = num + cal;
        pictop.innerHTML = calculate;
        picbottom.innerHTML = num;
        display = "";
    }

  }
}

// 加法
plus.addEventListener("click", numCal);

// 減法
reduce.addEventListener("click", numCal);

// 乘法
take.addEventListener("click", numCal);

// 除法
remove.addEventListener("click", numCal);

// 等於
equal.addEventListener("click", (e) => {
  if (total == 0) {
    num2 = Number(display);
    total = eval(num + cal + num2);
    picbottom.innerHTML = total;
    // num = num2;
    // num2 = 0;
    cal = "";
    calculate = "";
    display = "";
    // total = 0
    pictop.innerHTML = calculate;
  }
  console.log(display);
});

// 初始畫面顯示0
init();
function init() {
  picbottom.innerHTML = total;
}

// 按下AC時清除數字
acc.addEventListener("click", (e) => {
  display = "";
  num = 0;
  num2 = 0;
  cal = "";
  calculate = "";
  total = 0;
  pictop.innerHTML = calculate;
  picbottom.innerHTML = total;
});

// 按下DEL去掉一個數字
del.addEventListener("click", () => {
  if (display != "") {
    display = display.slice(0, -1);
    if (display.length == 0) {
      picbottom.innerHTML = num;
    } else {
      picbottom.innerHTML = display;
    }
  }
});

// 輸入數字時執行的函式
function update(e) {
  if (display == "") {
    if (e.target.innerHTML != "0") {
      if (display.length < 12) {
        display += e.target.innerText;
        picbottom.innerText = display;
      }
    }
  } else {
    if (display.length < 12) {
      display += e.target.innerText;
      picbottom.innerText = display;
    }
  }
}

dot.addEventListener("click", (e) => {
  if (display == "") {
    display = 0;
    display += e.target.innerText;
  }

  if (!display.includes(".")) {
    display += e.target.innerText;
  }
  picbottom.innerText = display;
});
