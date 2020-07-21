console.log('Fetch API');

// https://jsonplaceholder.typicode.com/comments

// Making a get request
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:254,
    title:"Some Title",
    body:'lorem ipsum',
}

// Make a post Request
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))


//promises
console.log("promises");
const userData = new Promise((resolve,reject)=>{
        const error = false;
    
         if(error){
             reject("an error occured");
         }
         else{
             resolve({
                // firstname:"Sachin",
                // age:24,
                // class:'12th',
                
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": true
                  
             })
         }
    
     });
    
     userData
         .then(data=>console.log(data))
         .catch(error=>console.log(error))
    

//async await
console.log("async await");
/*const photos = [];
async function photoUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        },3000)
    })

    let result = await status;
    console.log(photos.length);
}

photoUpload();
photoUpload();
*/

async function fetchran(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchran();


let obj1 = {
    name:'Tony',
    age:44,
    canDrive:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)


     