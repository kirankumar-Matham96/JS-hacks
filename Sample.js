console.log('hello JS');
/**
 * Tips and Tricks for JS and topics
 */

/**
 * Integer check
 */
let numCheck = 1569;
let strNum = "1569";
console.log(` is ${numCheck} number?: ${Number.isInteger(numCheck)}`);
console.log(` is ${strNum} number?: ${ Number.isInteger(strNum) }`);

/**
 * isArray?
 */
let emoji_list = ['👍', '🙏🏼'];
console.log(`is 'emoji_list' an array?: ${Array.isArray(emoji_list)}`);

/**
 * C style
 */
// %s replaces an element with a string
console.log("Helllo I love %s","Javascript");
// %d  replaces an element with an integer
console.log("Helllo %d ",1);
// %f  replaces an element with a float
console.log("Helllo  %f ",1.078);
// %(o|O) | element is displayed as an object.
console.log("Helllo %O",{"Name":"Sidd"});
// %c | Applies the provided CSS
console.log("%cThis is a red text", "color:red");
// we can use console.table to show objects in tabular format
a=[{"city":"Banglore"},{"city":"Pune"},{"city":"Mumbai"}];
console.table(a);

/**
 * if-else-hack
 */
let a1 = 5;
let b = 6;
let c = 0
const add = (par1,par2) => par1+par2;

const mul = (par1,par2) => par1*par2;

if (mul(a1,b)){
        console.log("mul if", mul(a,b))
}

//can be written as

mul(a1,b) && console.log("mul hack",mul(a1,b));


if (mul(b,c)){
        console.log("mul if", mul(b,c));
}else{

        console.log("else add", add(b,c));
}

//can be written as

(mul(b, c) && console.log("mul hack", mul(b, c))) || console.log("add hack", add(b, c));

/**
 *
 */
// old way
let a2="hello";
let b2;
if(a2==undefined)
{
b2="Nothing";
}
else
{
b2=a2;
}
console.log(b2); //hello

//new way
//can check  ?? nullable operator
b2=a2||"Nothing";
console.log(b2); //hello

// old way
let data={"name":"Allen"};
if(data!=undefined)console.log(data.name);

// new way
data != undefined && console.log(data.name);

/**
 *
 */
let test1 = 'Kiran';
for (let i = 0; i < 5; i++) {
  test1 += 'Kiran ';
}
console.log(`test1: ${test1}`);
let test2 = 'Kumar ';
test2 = test2.repeat(5);
console.log(`test2${ test2 }`);

/**
 *
 */
console.log(Math.floor(Math.random() * 50));

console.log(~~(Math.random() * 50));

console.log(~~('WhiteDress'));//return 0

console.log(~~(NaN));//return 0

console.log(~~('500000'));

/**
 *
 */
console.log(typeof 12);
console.log(typeof "undefined");
console.log(typeof []);
console.log(typeof true);
console.log(typeof {});
console.log(typeof null);

/**
 *
 */
let ab = 5;
let ba = 10;
console.log(ab, ba);
[ab, ba] = [ba, ab];
console.log(ab, ba);

/***********
 * Arrays
 */
//clearing array
let array = ['a', 'b', 'c'];
console.log(array.length);
console.log(array);
array.length = 2;
console.log(array.length);
console.log(array);

//diff between delete and splice

//------------------------------------ */
let list1 = ['a', 'b', 'c', 'd', 'e'];
let list2 = ['f', 'g', 'h', 'i', 'j'];

console.log("here",list1.concat(list2)); // returns the merged values of both arrays, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//better way =>


let list3 = ['a', 'b', 'c', 'd', 'e'];
let list4 = ['f', 'g', 'h', 'i', 'j'];

console.log(list3.push.apply(list3, list4)); // returns 10, the new length of list3
console.log(list3); // returns ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

/**
 * filter
 */
const cars = [
  { make: 'Opel', class: 'Regular' },
  { make: 'Bugatti', class: 'Supercar' },
  { make: 'Ferrari', class: 'Supercar' },
  { make: 'Ford', class: 'Regular' },
  { make: 'Honda', class: 'Regular' },
];
const supercar = cars.filter(car => car.class === 'Supercar');
console.table(supercar); // returns the supercar class data in a table format


const cars2 = [
  { make: 'Opel', class: 'Regular' },
  null,
  undefined
];

const onlycars = cars2.filter(Boolean); // returns [{ make: 'O
console.table(onlycars);

/**
 * unique
 */
const cars1 = ['car1', 'car2', 'cars3','cars3'];
console.log(`cars1 ${cars1}`);
const unrepeated_cars = [... new Set(cars1)];
console.log(`unrepeated_cars ${ unrepeated_cars }`);

/**
 * --> for (faster)
 * --> forEach (slowest)
 * --> map (slowest)
 */
[...Array(10)].map((it, index) => console.log('index',index));

/**
 * slice
 */
array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`array3 ${array3}`);
console.log(array3.slice(-1));//returns [10] (just gets the element)
console.log(`array3 ${array3}`);//(reduces the array)
console.log(array3.splice(-1));
console.log(`array3 ${ array3 }`);

/**
 * shuffle
 */
//shuffle array elements
let my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("my_list",my_list);
my_list.sort(function() {
    return Math.random() - 0.5
});
console.log("shuffle_list", my_list);
//TODO: How this shuffle works

/**
 * flatten array
 */
let entries = [1, [2, 5], [6, 7], 9];
console.log('org array', entries);
let flat_array = [].concat(...entries);
console.log(`flat_array ${flat_array}`);

/**
 * object
 */
const obj = {
  "prop1": "value1",
  "prop2":"value2"
}
const obj2 = {};

console.log(Object.keys(obj).length);//will not work with undefined and null
console.log(Object.keys(obj2).length);

/**
 * spread operator
 */
let emp = {
 'id': 'EP01',
 'name': 'Pranjal',
 'age': 24,
 'addr': 'India'
};

let job = {
 'title': 'Data Scientist',
  'location': 'India'
};

// Using spread operator
let merged = {...emp, ...job};
console.log('Final merged', merged);
//TODO: when to use map, spread, concat, ... ?

/**
 * min, max
 */
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = Math.max(...array4);
console.log(`max: ${ max }`);

let min = Math.max(...array4);
console.log(`max: ${max}`);

/**
 * labelling
 */
//The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to.
loop1:
for (let i = 0; i < 5; i++) {
  loop2:
  for(let j=0;j<5;j++)
  {
    console.log(i,j)
    if(i==j)
    {
      continue loop1
    }
  }
}

/**
 * multiple assignments
 */
let [one, two, three] = [1, 2, 3];
console.log('one', one);

/**
 * converting other data types to boolean
 */
const data1 = "Hello";
const bool = !!data1;
console.log(`bool: ${bool}`);