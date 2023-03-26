// các kiến thức chính được học trong JSB
//1 , các kiểu dữ liệu và các phép toán với kiểu dữ liệu trong JS
// các kiểu dữ liệu : string- chuỗi ("chúc mừng năm mới ABC") (''; ""; ``)
// number : số ( bao gồm số âm, số dương và số 0) : -100, -524.34, 0, 1, 15.4 , ...
// boolean : true, false ( bóng đèn - trời tối ( bật : true, tắt : false))
// undefined : không xác định ( chưa được gán giá trị)
// null : không có gì ( không có giá trị)
// mảng : [] thuộc kiễu dự liệu là object
// object : đối tượng ( bao gồm các kiểu dữ liệu khác), mỗi obj có thể chứa nhiều trường thuộc tính, mỗi trường sẽ có chứa 
// các kiểu dữ liệu bên trên


// 2, từ khoá khai báo biến (var, let, const)
// trong chương trình của JSB : var ( let, const)

// cú pháp : var + tên biến = giá trị của kiểu dữ liệu

var personName = 'Long' // kiểu dữ liệu string có value là mindX
var personAge = 16 // kiểu dữ liệu number có value là 15
// xong phần khai báo biến

// cú pháp in ra màn hình console : console.log(content)

console.log(` xin chào ${personName}, năm nay ${personName} ${personAge} tuổi`)  // kết quả trả về

// kết quả : xin chào Long, năm nay Long 16 tuổi => kết quả của màn hình console


var a = 3
var b = 5
var c = a + b - 1 +4

console.log(c) // 1



// cho cạnh huyền h = 5, cạnh góc vuông x = 3, viết công thức để tìm cạnh góc vuông y còn lại  


var h = 5;
var x = 3;
var y 

// viết công thức để tìm y

y = Math.sqrt(h*h - x*x)

console.log(y)

// những phép tính : cộng, trừ, nhân, chia , chia lấy phần dư, tính căn, sin, cos, tan, cot, logarith, ln, log10, log..
// được gọi là các toán tử trong js 




const m = 6
const n = 7


console.log(n%2) 


// phép chia m cho 3 
console.log(m/3)

// chia lấy phần dư

console.log(m%5)  // 6 chia 5 dư 1 

// ứng dụng: tìm số chẵn lẻ theo đề bài yêu cầu 

// tìm số chẵn (%): số chia cho 2 dư 0
// số lẻ : %2 !==0 

// kí hiệu !== : có ý nghĩa là " KHÁC"


//  '1' !== 1 ( 1 cái là string, 1 cái number nên sẽ khác nhau)


// gợi ý : trong js : với các công thức toán học : Math.phương thức
// tìm căn : Math.sqrt(công thức)


// trong js sẽ có 1 vài trường hợp có các phép toán ngắn như sau


var j = 1

j++ // j = j + 1  
++j // j = j + 1

// giữa ++j và j++ tuy cho ra cùng 1 kết quả nhưng chúng sẽ khác nhau 1 chút trong logic thực hiện
j-- // j = j - 1
--j // j = j - 1

// +=, -=, *=, /=, %=

var k =10
k+=2 // k =  k + 2 // 12
k-=2 // k = k - 2 // 10
k*=2 // k = k * 2 // 20
k/=2 // k = k/2 => 10

k%=2 // 10 %2 = 0 ( 10 chia 2 = 5 dư 0)


// write function to check the missing number in the array

// input : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20]
// output : 15


// 1, tìm số lượng phần tử trong mảng
// 2, tìm tổng các phần tử trong mảng
// 3, tìm tổng các phần tử trong mảng theo công thức : n(n+1)/2
// 4, so sánh 2 kết quả, nếu 2 kết quả khác nhau thì số còn thiếu là kết quả trừ 2 kết quả trên

// 1, tìm số lượng phần tử trong mảng

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20]

var length = arr.length

console.log(length) // 19

// 2, tìm tổng các phần tử trong mảng

var sum = 0

for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log(sum) // 190


// 3, tìm tổng các phần tử trong mảng theo công thức : n(n+1)/2

var sum2 = 0

for (var i = 1; i <= arr.length + 1; i++) {
    sum2 += i
}

console.log(sum2) // 210


// 4, so sánh 2 kết quả, nếu 2 kết quả khác nhau thì số còn thiếu là kết quả trừ 2 kết quả trên

console.log(sum2 - sum) // 20

// 5, tìm số còn thiếu trong mảng

var missingNumber = sum2 - sum

console.log(missingNumber) // 20