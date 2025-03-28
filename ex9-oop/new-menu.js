import Menu from './menu.js'; // Import the Menu class

export default function NewMenu(){
    
}

NewMenu.prototype = new Menu(); // Create a new object that inherits from Menu
//NewMenu.prototype = Object.create(Menu.prototype);
//NewMenu.prototype.constructor = NewMenu; // Set the constructor property to NewMenu
let m1 = new NewMenu();
console.log(m1.toJSON()); // Call the inherited method

export function test1(){
    console.log("test1() called");
}

export function test2(){
    console.log("test2() called");
}

//export { test1, test2 };