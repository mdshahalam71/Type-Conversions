 let value = true;
 console.log(typeof value); // boolean
  
 value = String(value);  //string

//  Numeric Conversion

console.log("4"/"2");  //2
 
let str="123";
console.log(typeof str);  //string
let num = Number(str);   //becomes a number 123
console.log(typeof num);  // number

let age = Number("an abritrary string instead of a number");
console.log(age);  //NaN,conversion failed

let x = Number("  123  ");
console.log(x);  //123
let y= Number("1234b");
console.log(y);  //NaN
let z=Number(true);
console.log(z);     //1
let a = Number(false);
console.log(a)     //0

// Boolean Conversion

let ab = Boolean(1); 
console.log(ab);   //true
let ac = Boolean(0);
console.log(ac);   //false
let ad = Boolean("hello");
console.log(ad);   //true
let ae= Boolean("");
console.log(ae);   //false