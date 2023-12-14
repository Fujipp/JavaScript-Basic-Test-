// External
document.write("Hello");
document.write("World");

// alert("Good Day")
console.log("Hello world");
console.error("error");
console.warn("please get out");

// Never give up
// let name
// name = " Fuji 1"
// name = " Fuji 2"
// let age = 20
let $for = "for",
  _for = "for";
console.log("before", _for);
_for = "for 2";
console.log("after", _for);

let name = " Fuji n",
  age = 19,
  Name = " Fuji N";
console.log(name);
document.write(name);
console.log("Age = ", age);
document.write(" Age = ", age);
console.log(Name);
document.write(Name);

const vat = 0.02;
console.log("Before", vat);

// const ค่าคงที่เปลี่ยนค่าไมไ่ด้
// vat = 0.05
// console.log("after" ,vat)

// ######### string , number
let money = 200 + 200; //integer
let price = 99.99; //float
let message = "Text";

let checkName = false,
  checkProduct = true;

console.log(typeof money);
console.log(typeof price);

console.log(checkName);
console.log(typeof checkName);
console.log(checkProduct);
console.log(typeof checkProduct);
console.log(money * price); //+ - * /

let msg1 = "msg" + 10;
console.log(msg1);

// การแปลง string เป็น Number
// let nmb1 = parseInt("20.99")
let nmb1 = +"20.99";
console.log(typeof nmb1);

// การแปลง Number เป็น string
// let nmb2 = 99.99+""
let nmb2 = (99.99).toString();
console.log(typeof nmb2);

// ######### Array
let number1 = 1,
  number2 = 2,
  number3 = 3;
console.log(number2);
let myArray = Array(10, 20, 30, 40, 50, 60, "text", true, false);
myArray[1] = 21; //edit value
console.log(myArray);
console.log(myArray[4]);

let colors = ["red", "blue", "pink", "black"];
console.log(colors[3]);

let days = ["s", "m", "t", "w", "t", "f", "s"];
console.log(days);

// ######### Operator
let a = 20,
  b = 20;
console.log("บวก = ", a + b);
console.log("ลบ = ", a - b);
console.log("คูณ = ", a * b);
console.log("หาร = ", a / b);
console.log("เศษ = ", a % b);
console.log("ยกกำลัง = ", a ** b);

// let check = a == b;
// console.log(check)
console.log(a == b)
console.log(a != b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

let check = true
console.log(!check) // return false

// and => และ
// or => หรือ

//ซื้อมะม่วงและเงาะหรือไม่ => ได้กลับบ้าน (true)
// a = ซื้อมะม่วงหรือป่าว and b = ซื้อเงาะมั้ย ?
// a = true and b = true => a && b => true
// a = true and b = false => a && b => false

//ซื้อมะม่วงหรือเงาะ
// a = ซื้อมะม่วง or b = ซื้อเงาะ?
// a = false or b = false => a || b => false
// a = true or b = true => a || b => true
// a = true or b = false => a || b => true

//ตัดเกรด

// 70 - 80 => A
// 50 - 60 => B
// <49 => F

let score = 75
let score1 = 100
// console.log(score >= 70 && score <= 80)
// console.log(score1 >= 70 || score1 <= 80)

console.log(score >= 70 && score <= 80, "A")
console.log(score >= 60 && score <= 69, "B")
console.log(score >= 50 && score <= 59, "C")
console.log(score <= 49, "F")

// เพิ่มค่า
let A = 5 , B = 2
console.log(A)
console.log(++A) //prefix ++a
console.log(++A)
console.log(A)

console.log(B)
console.log(B++) //postfix ++a
console.log(B)

//Compound Assignment
let X = 10, Y = 20
console.log("ก่อน" ,X)
X = X + Y // X+==Y
// X-=Y
// X*=Y = X = X * Y
// X/=Y
// X%=Y
console.log("หลัง" ,X)

// IF
age = 10;
let result = (age >= 15)
if(result){
    console.log(true)
}

//if else
let f = false
let balance = 1000
let withdraw = 500
if (withdraw<=balance){
    console.log(withdraw)
    balance = balance - withdraw
    console.log("คงเหลือ" ,balance)
}else{
    console
}

let sc = 7

if(sc > 70){
    console.log("A")
}if(sc > 60){
    console.log("B")
}if(sc > 50){
    console.log("C")
}if(sc > 40){
    console.log("D")
}

//if else if
if(sc > 70){
    console.log("A")
}else if(sc > 60){
    console.log("B")
}else if(sc > 50){
    console.log("C")
}else if(sc > 40){
    console.log("D")
}else {
    console.log("F")
}

let sc1 = 40
let pass
// if (sc1>30) {
//     pass = "ผ่านแกณฑ์"
// }else{
//     pass = "ไม่ผ่านเกณฑ์"
// }
pass = sc1>=60 ? "ผ่านเกณฑ์" : "ไม่ผ่านเกณฑ์"
console.log(pass)


let age1 = 13

if(age1<=15){
    if(age1 == 15){
        console.log("ม.3")
    }else if(age1 == 14){
        console.log("ม.2")
    }else if(age1 == 13){
        console.log("ม.1")
    }else{
        console.log("ประถมศึกษา")
    }
}

let status1 = 0
let light
// if(status1 == 0){
//     light="ปิดไฟ"
// }else if(status1 == 1){
//     light="เปิดไฟ"
// }else{
//     light="ไฟฟ้าขาด"
// }
switch(status1){
    case 0 : light = "ปิดไฟ"
        break
    case 1 : light = "เปิดไฟ"
        break
}
console.log(light)


let mt = 0
let nme
switch(mt){
    case 0 : nme = "มกราคม"
        break
    case 1 : nme = "กุมภาพัน"
        break
    case 2 : nme = "มีนา"
        break
    case 3 : nme = "เมษา"
}
console.log(nme)

//This is Program compare  number
let i = 50, o = 50
if(i>o){
    console.log("i มีค่ามากสุด")
}else if(i<o){
    console.log("o มีค่ามากที่สุด")
}else{
    console.log("มีค่าเท่ากัน")
}


//while
let count1 = 1;
while(count1 <= 4){
    console.log("number" , count1)// 1,2,3
    if(count1==2){
        break //continue
    }
    count1++ //1=>2=>3=>4
}

//for loop
// for(let mg = 1;mg <=6;mg++){
//     console.log("Hello World")
// }
for(let mg = 1;mg <= 5;mg+=2){
    console.log(mg)
}

// do while
let count2 = 1
do{
    console.log(count2)
}while(count2>5)

