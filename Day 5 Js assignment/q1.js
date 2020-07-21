console.log("Higher order functions");

//Input from user
let num=prompt("enter the lengrth of array")
let arr= [];

for (var i=0;i<num;i++){
    arr.push(prompt("Enter number"));

}
console.log(arr)

//Filter
let odd = arr.filter(el=>el%2!=0);
console.log(odd);

//let oddCube = arr.filter(el=>el%2!=0).map(el=>el**3);
let oddCube=odd.map(el=>el**3);

console.log(oddCube);