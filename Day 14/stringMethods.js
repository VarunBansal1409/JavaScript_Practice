
//create a string using literal way

let str = "hello"
console.log(str);

//create a string using new keyword

let a = new String("hello world")
console.log(a);

//string methods

let str1 = "hello";
console.log(str1); //hello

//find length of an string (length property)
console.log(str1.length); //5   (to find index --> length-1 )

//indexOf()  it will return index value of an particular characther
console.log(str1.indexOf('h')); //0
console.log(str1.indexOf('z')); //-1
console.log(str1.indexOf('l')); //2

//lastIndexOf()
console.log(str1.lastIndexOf("l")); //3

//toUpperCase() used to convert lowecase into upperCase
console.log(str1.toUpperCase());

//toLowerCase() used to convert uppercase into lowercase

let b = "HELLO"
console.log(b);
console.log(b.toLowerCase());

//charAt() it will return characther present in particular index value

console.log(str1.charAt(0)); //h
console.log(str1.charAt(3)); //l

//charCodeAt()
//it will return ASCII value of an characther present in particular index value.

console.log(str1.charCodeAt(0));
console.log(str1.charCodeAt(1));

//split() (imp)
//used to convert string into array data type.
let str2 = "hello world"
console.log(str2);
console.log(str2.split(""));['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

console.log(str2.split(" ")); //['hello', 'world']

console.log(str2.split(" |"));  //['hello world']

//slice()
//used to create a new string from the original string
//syntax : slice(start-index , end-index)
//slice() will accept both positive and negative value
let str3 = "hello"
console.log(str3);
console.log(str3.slice(0 , 4)); //hell
console.log(str3.slice(-5,-2));
console.log(str3.slice(0));

//sub-string()
//used to create a new string from the original string
//syntax :- subString(start-index , end-index)
//subSting will accept only postive values
let str4 = "hello"
console.log(str4);
console.log(str4.substring(0,4)); //hell
console.log(str4.substring(-5 ,-2));

//subStr()
//used to create a new string from the original string
//syntax :- subStr(start-index , end-index)
//subStr() will accept only postive value
//subStr() is deprecated

let str5 = "hello"
console.log(str5);
console.log(str5.substr(0,4)); //hell
console.log(str5.substr(-5,-2));

//includes()
//used to check wheather the characther is present or not and it returns boolean value.
console.log(str5.includes('h')); //true
console.log(str5.includes('H')); //

//startsWith()
//it will check weather particular characther is started withn or not and retrun 
// boolean value

let str6 = "ramu"
console.log(str6);
console.log(str6.startsWith('r')); //true
console.log(str6.startsWith('z')); //false

//endsWith()
//it will check weather particular charatcher is ended or not and returnd boolean
console.log(str6.endsWith('u')); //true
console.log(str6.endsWith('m')); //false

//replace(target , source)
//used to replace one string with another string
let str7 = "java sql"
console.log(str7);
console.log(str7.replace("sql" , "script"));

//trim()
//used to remove the space in starting and ending of an string
let str8 = "  hello wrold  "
console.log(str8);
console.log(str8.trim());

//conCat()
//used to concat two or more string
let m = "hello"
console.log(m);

let n = " world"
console.log(n);

console.log(m.concat(n));

//repeat()
console.log(m.repeat(5));












 























