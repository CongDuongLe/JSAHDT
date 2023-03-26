// kiến thức đã được học trong JSB 

// số : numberic : số âm,số dương, số thập phân , ....
// chuỗi : string : ''. " ", ``,..
// boolean : true , false,
// null : không có giá trị đc gán cho biến
// undefined : biến chưa được gán giá trị
// obj : {}, array : [], function : ()=>{}


// học nhiều : alert(), promp(), =>, 


// JSB : 
// 1, Biến và kiểu dữ liệu
// Biến : có 3 cách khai báo 1 biến bằng từ khoá : var, let, const

// giống nhau : đều dùng để khai báo 1 biến nhưng giữa chúng luôn có sự khác nhau cơ bản

// var : có thể khai báo lại 1 biến đã được khai báo trước đó và có khả năng thay đổi giá trị của biến đó
// let : không thể khai báo báo 1 biến đã được khai báo trước đó nhưng có khả năng thay đổi giá trị của biến
// const : không thể khai báo lại và không thế thay đổi giá trị của biến đó

// ví dụ :

var a = 3
var a = 5  // đây là thao tác khai báo biến a với giá trị mới bằng 5 ( trong phạm vi của var thì cách khai báo này là hợp lệ)

// var a ='abc'

console.log(a)  // 'abc'

// let 
 let b = 3 // khai báo biến b lần 1
    // let b = 10  // khai báo biến b lần 2 : lỗi vì let không cho phép khai báo lại biến b

b = 10
b = 'xyz'

 // với let thì chỉ có thể khai báo biến 1 lần DUY NHẤT

 console.log(b)  // 10

 // const 
 const c =1 // khi đã khai báo bằng const thì biến đó mãi mãi chỉ có 1 giá trị và không thể bị thay đổi
//  c = 2
    console.log(c) // lỗi vì const không cho phép thay đổi giá trị của biến c
//  const c =2 // lỗi vì const không cho phép khai báo lại biến c
// c=2 // lỗi vì const không cho phép thay đổi giá trị của biến c

    const m = '123'
    const n = 123
    // = là phép gán :

    // n và m có giống nhau hay không ?
        console.log(m ==n) // true
        console.log(m ===n) // false

    // so sánh 2 == thì nó sẽ ép kiểu dữ liệu về 1 kiểu chung duy nhất rồi mới tiến hành so sánh
    // b1 : ép biến m có giá trị là chuỗi '123' về kiểu số 123
    // b2 : so sánh với biến n có giá trị là 123 kiểu số
    // true => hạn chế :không thật sự tường minh khi cần so sánh chặt chẽ các điều kiện đi kèm
    // hạn chế dùng ==

    // === :nó so sánh kiểu dữ liệu trước rồi mới so sanh giá trị 
    // m : kiểu string
    // n : kiểu number 
    // 2 biến khác kiểu dữ liệu => false  ( nên dùng trong các trường hợp cần so sánh chặt chẽ hay so sánh thông thường để đảm bảo tính toàn vẹn của kiểu dữ liệu)




// 2, các toán tử : so sánh, gán , truy vấn điều kiện , logic

// giữa 1 dấu = và 2 == có giống nhau không ?
// khác nhau 
// 1 dấu = là toán tử gán
// 2 dấu == là toán tử so sánh (không chặt chẽ như === vì đã có bước trung gian là ép kiểu dữ liệu về 1 kiểu duy nhất)
// 3 === : là toán sử so sánh (chặt chẽ vì cần so sánh kiểu dữ liệu rồi mới đến giá trị)

// 1 =='1' : true ( bới vì == sẽ ép 1 trong 2 kiểu dữ liệu về 1 kiểu duy nhất rồi so sánh nên kết quả sẽ là true)
// 1 ==='1' : false ( bỏi vì string !== number nên kết quả trả về là false)

// >=,=<, ?, &&, ||, %, ++variable, --variable, +=, -=, *=, /=

// !== : khác

// a+=1 tương tự như a =a + 1
// a-- , a++ tương tự như a = a - 1, a = a + 1
// || hoặc 
// ?  : tương tự như if else a> 1 ? 'a lớn hơn 1' : ' a nhỏ hơn 1'

// a đang bằng 0

a > 1 && console.log('a là số lớn hơn 1')

// ví dụ x = -10

// && : và (kiếm tra điều kiện đúng rồi mới thực hiện câu lệnh tiếp theo)

// x > 1 ? console.log('x lớn hơn 1') : console.log('x nhỏ hơn 1')

if(a>1){
    console.log('a lớn hơn 1')
} else {
    console.log('a nhỏ hơn 1')
}


const h =10
const k = 2

h>5 && k > 10 ? console.log('h lớn hơn 5 hoặc k lớn hơn 10') : null

// ++, --
// h++ // 11 - tương tự h = h+1
// k-- // 1 - tuong tự k = k-1


const arr = [1,2,3,4,5,6,7,8,9,10]

// b1 : lấy chiều dài của mảng arr.length : chiều dài của mảng : 10


// in từng phần tử trong array ?
// i ban đầu = 0 , so sánh với 10 : nhỏ hơn, thực hiện logic i++ :( i =1)
// i =1 , 1<10, i =2
// i = n, n=10, 10 không nhỏ hơn 10 , dừng vòng lặp

for(var i = 0; i < arr.length; i++ ){ 
    console.log(arr[i])
}



// ++ tăng 1 đơn vị vào biến đó
// -- giảm 1 đơn vị vào biến đó





// &&: và a > 0 && b >0 => a, b đều là số dương
// DOM event và function xử lí tương tác với DOM
// 1 , khái niệm DOM :
// DOM là viết tắt của Document Object Model
// DOM là 1 cây DOM tree ( cây DOM) được tạo ra từ 1 file HTML


// 2, DOM event : trong JSB thì chủ yếu học về các event sau 
// click chuột trái 1 lần : onclick
// click chuột trái 2 lần : ondblclick
// di cuộn chuột : onmousewheel
// kéo chuột : onmousedown, onmouseup
// di chuyển chuột : onmousemove
// hover chuột : onmouseover, onmouseout
// nhấn phím : onkeydown, onkeyup


// => cách để nhớ DOM event : on + tên event :
// ví dụ : on + click, on + mouseover, on + mousewheel, on + keydown, on + keyup, on + mousemove, on + mousedown, on + mouseup, on + dblclick

//3, thao tac với DOM event : mặc định sẽ phải viết fnc thì mới có thể xử lí DOM event
// cách 1 : viết 1 function rồi gán cho DOM event = fnc() này 
// cách 2 :QueryTag.addEventListener('event', fnc)

// b1 : lấy thẻ h1 trong DOM tree

const h1Query = document.querySelector('#h1')




const h1OnmouseOver = () => {
    h1Query.style = 'color: red; font-size: 50px; background-color: yellow'
}


h1Query.addEventListener('mouseover', h1OnmouseOver)

const h1OnmouseOut = () => {
    h1Query.style = 'color: black; font-size: 30px; background-color: white'

 }


const divQuery = document.querySelector('#div')

// id : querySelector('#idName') hoặc getElementById('idName')
// class : querySelector('.className') hoặc getElementsByClassName('className')




 const handleOnclick = () => {
    alert('Hello buổi 1 bằng click chuột trái')
 }


// divQuery.addEventListener('click', handleOnclick)


 const handleDbClick =() => {
    alert('Hello buổi 1 bằng double click chuột trái')
 }


 const inputQuery = document.querySelector('#input')

 // b2 : lấy giá trị hiện tại của thẻ input
 // b3 : show giá trị hiện tại của thẻ input bằng alert

 const handleOnKeyUp = () => {
    // alert(inputQuery.value)
    const value = inputQuery.value
    console.log(value)
 }


 // Buôi1 : git và các thao tác cơ bản với git


// từ giớ về sau :

// b1 : git add .
// b2 : git commit -m 'message'
// b3 : git push -u origin branchName


// update file js của buổi 1