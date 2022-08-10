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

// 加法
plus.addEventListener("click", numCal);

// 減法
reduce.addEventListener("click", numCal);

// 乘法
take.addEventListener("click", numCal);

// 除法
remove.addEventListener("click", numCal);

// 數字顯示區
let display = "0";

// 計算總和
let calculate = "";

// 計算過程是否完成
let state = true;

// 輸入數字時執行的函式
function update(e) {
  // 1.判斷是否有超過長度
  if (display.length < 12) {
    // 2.判斷數字顯示區是否為0
    if (display == "0") {
      // 3.為0先清空顯示輸入的數字
      if (e.target.innerHTML != 0) {
        display = "";
        display += e.target.innerHTML;
        picbottom.innerHTML = display;
      }
    } else {
      // 4.不為0檢查計算過程是否完成
      if (state) {
        display += e.target.innerHTML;
        picbottom.innerHTML = display;
      }else{
        state = true
        display = ""
        display += e.target.innerHTML;
        picbottom.innerHTML = display;
      }
    }
  }
}

// +,-,*,/時執行的函式
function numCal(e) {
  if (calculate != "") {
    calculate = calculate + display;
    display = eval(calculate);
    picbottom.innerHTML = display;
    calculate = eval(calculate) + e.target.innerHTML;
    pictop.innerHTML = calculate;
    // 按下運算子會先顯示完再清空display的值，所以實際上display為空字串
    display = "";
  } else {
    calculate = display + e.target.innerHTML;
    pictop.innerHTML = calculate;
    // 按下運算子會先顯示完再清空display的值，所以實際上display為空字串
    display = "";
  }
}

// 初始畫面顯示0
init();
function init() {
  picbottom.innerHTML = display;
}

// 等於
equal.addEventListener("click", (e) => {
  if (calculate != "") {
    calculate = calculate + display;
    display = eval(calculate).toString();
    picbottom.innerHTML = display;
    calculate = "";
    pictop.innerHTML = "";
    state = false
  }
});

// 按下AC時清除數字
acc.addEventListener("click", (e) => {
  display = "0";
  calculate = "";
  pictop.innerHTML = calculate;
  picbottom.innerHTML = display;
});

// 按下DEL去掉一個數字
del.addEventListener("click", () => {
  if (display != "") {
    if (display.length == 1) {
      display = 0;
      picbottom.innerHTML = display;
    } else {
      display = display.slice(0, -1);
      picbottom.innerHTML = display;
    }
  }
});

// 按下.的時候
dot.addEventListener("click", (e) => {
  if (!display.includes(".")) {
    if (display == "") {
      display = 0 + e.target.innerHTML;
    } else {
      if(state){
        display += e.target.innerHTML;
      }else{
        state = true
        display = 0 + e.target.innerHTML;
      }
    }
  }
  picbottom.innerHTML = display;
});
