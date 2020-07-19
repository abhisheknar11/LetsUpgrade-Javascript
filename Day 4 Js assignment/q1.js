console.log("For loop");

for (let i=0,j=0,k=0; i,j,k<=100; i++,j++,k++){
    if(i%3===0)
        console.log('fizz',i);
    if(j%5===0)
        console.log('buzz',j);
    if(k%3===0&&k%5===0)
        console.log('buzzfizz',k)
}