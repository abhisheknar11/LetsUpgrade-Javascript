
let marks =Number(prompt('Enter your marks',75));

//Conditional Statement


if(marks>=75)
    console.log(`Marks are ${marks} and grade is A`);

else if(marks>=60 && marks<75)
    console.log(`Marks are ${marks} and grade is B`);

else if(marks>=45 && marks<60)
    console.log(`Marks are ${marks} and grade is C`);

else if(marks>=35 && marks<45)
    console.log(`Marks are ${marks} and grade is D`);

else if(marks<35)
    console.log(`Marks are ${marks} and grade is E`);


//SWITCH Case

    switch (true)   
    {  
       case marks>75:  
           console.log(`Marks are ${marks} and grade is A`);  
           break;  
       case marks>=60 && marks<75:  
           console.log(`Marks are ${marks} and grade is B`);  
           break;  
       case marks>=45 && marks<60:  
           console.log(`Marks are ${marks} and grade is C`);  
           break; 
        case marks>=35 && marks<45:
            console.log(`Marks are ${marks} and grade is D`) 
       default:  
           console.log(`Marks are ${marks} and grade is E`);  
    } 




