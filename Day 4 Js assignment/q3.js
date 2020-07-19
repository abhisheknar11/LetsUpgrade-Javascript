console.log("Spread operator in array");

let shoppingList = ['Milk', 'Eggs','Ketchup'];

let shoppingBasket = [...shoppingList,"Fruits","Vegetables"];
shoppingList.push('and some more');
console.log(shoppingList);
console.log(shoppingBasket);