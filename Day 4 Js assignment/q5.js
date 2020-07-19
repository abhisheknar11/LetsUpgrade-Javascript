console.log("Commission");

let sales = prompt("Enter total sales");
let com;
if(sales>=0 && sales<=5000){
    com = sales*0.02
    console.log(`Total commission earned by him is ${com}`);
}

else if(sales>5000 && sales<=10000){
    com = (5000*0.02)+((sales-5000)*0.05)
    console.log(`Total commission earned by him is ${com}`);
}

else if(sales>10000 && sales<=20000){
    com = (5000*0.02)+(5000*0.05)+((sales-10000)*0.07)
    console.log(`Total commission earned by him is ${com}`);
}

else if(sales>20000){
    com = (5000*0.02)+(5000*0.05)+(10000*0.07)+((sales-20000)*0.1)
    console.log(`Total commission earned by him is ${com}`);
}