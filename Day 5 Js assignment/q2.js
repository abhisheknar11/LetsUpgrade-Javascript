console.log("OOPS")


class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    
    

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    /*
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has removed ${this.luCoins} coins from ${users}`);
        return this;
    }
    */
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email){
        super(name,age,email);
    }
       
    addCoins(user){
            this.luCoins++;
            console.log(`${this.name} has added ${this.luCoins} coins`);
            return this;
        }
        removeCoins(user){
            this.luCoins--;
            console.log(`${this.name} has removed ${this.luCoins} coins `);
            return this;
        }
        
    }

class Admin extends Moderator{
        addCourse(user,course){
            user.courses.push(course);
            console.log(user);
        }
        delCourse(user,course){
            user.courses=user.courses.filter(courses=>courses!==course);
            console.log(`deleted ${course}`);
            console.log(user);
            return this;
            
        }
     }


let user1 = new User('Dilip',25,'dilip@gmail.com');
let user2 = new User('Krishnan',24,'k@gmai.com');
let mod = new Moderator('Berlin',24,'b@gmail.com');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});


user1.login()
user2.login()
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.delCourse(user1,'Javascript');

mod.addCoins().addCoins().logout().removeCoins()
admin.addCoins().addCoins()
user2.logout()
user1.logout()
user1.addCoins() //user cannot add coins