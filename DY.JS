// CONCAT EXAMPLE

let girlcount = 2
let Teamleader = "chemi"
let matchlocation = "dlihe"
console.log("girlcount: " + girlcount, "Teamleader: " + Teamleader, "matchlocation: " + matchlocation);

let name1 = "Tenzin"
let batch = "BCA"
let college = "Christ"
console.log("name: " + name1, "batch: " + batch, "college: " + college);

let dish = "Korean"
let fav = "Kimbab"
let Restuarant = "Hae kum gang"
console.log("dish:" + dish , "fav: " + fav , "Restuarant: " + Restuarant);

let music = "Calm Down"
let singer = "Selena Gomez"
let dancer = "Diyang"
console.log("music: " + music , "singer: " + singer, "dancer: " + dancer);

let Book = "English"
 let name2 = "Kite Runner"
 let author = "Khaled Hosseini"
 console.log("Book: " + Book, "name: " + name2, "author: " + author);

 let movie = "Hollywood"
  let name = "xoxo Kitty!"
 let season = "one"
 console.log("movie: " + movie, "name: " + name, "season: " + season);


// 6 example -Variable with operator



// // // //  Four Operation Examples;

//SUM EXAMPLE

let a = 20
let b = 20

let sum = a+b;
console.log("sum : " +sum);
console.log("sum : " +(a+b))

//DIFF OR MINUS EXAMPLE

let x = 6
let y = 6 
let diff = x-y;
console.log("diff :" +diff);
console.log("diff :"+(x-y))

//MULTIPLICATION EXAMPLE

let base = 30;
let power = 2;
console.log(base*power)

// EXPONENTIAL -the concept of incrementing a variable by 1
let num = 10;
inc = 10;
num++;
num = num + 1;

//REMAINDER/ MODULUS

let a1 = 4
let b1 = 2
  let remainder =(a%b);
console.log("remainder :" +remainder);
console.log("remainder :" +(a%b));


//DIVISION

let D = 20
let Y = 5

let division = (5/20)
console.log("division :" +division);
console.log("division :" +(5/20))


let d = 10;
d**= 3;
console.log(d);


//FUNCTION
function sayHello(personNAme){
  return "hello "+personNAme;    // hello diyang
}

let she = 'diyang';
console.log(sayHello(she));


// hello diyang good evening ... 
let z = sayHello(she); // hello diyang
z += "good evening";  // hello diyang good evening
console.log(z);


let boyname = "tses";
let m = sayHello(boyname);  
m += "Good morning";
console.log(m);

// hello tses
x+=" good morning...";   
console.log(x);
console.log(z);


//COMPARASON OPERATOR IN CONTROL FLOW (IF/ELSE)
let am = 9;

if(am <= 9 ){
  console.log("the time is : "+am);
  console.log("good morning ");
}

if(am >9 ){
  console.log("good afternoon : ")
}
else{
  console.log("good morning : ")
}


let pm = 24;

if(pm<=9){
  console.log("good morning ... ")
}
else if(pm<=12){
  console.log("good afternoon")
}

else if(pm <=16){
  console.log("good evening...")
}
else{
  console.log("good night ... ")
}


//FUNCTION PARAMETERS

function Sum1(){
  let a = 20;          //no return no parameter
  let b = 30 ;
  let sum1 = a + b;
  console.log(sum1);
}



//No return Yes parameter

function sum2(girl, boy) {
  console.log(girl + boy);
}

let girl = 10;
let boy = 20;
sum2(girl, boy);



function sum3(){
  let a = 10;
  let b = 30 ;        //yes return no parameter
  return (a+b);
  let sum = sum();

console.log("sum" + sum);
console.log("sum"+ sum());
}

function sum4(x,y){
  return(x+y);
}
                       //yes return,yes paramete
let  k= 10;
let  n= 20;
sum4(k,n);
console.log(sum4(k,n));


// // Functions 
function LetsGo(myPlace,myName ){
console.log("Hi shall we go to ",myPlace, "if you dont mind.");
  console.log("My good name is", myName,"and you?");

return
};
    
var myPlace = "Bylakuppee";
var myName = "Diyang";

LetsGo("Bylakuppe","Diyang");  


function toCelcius(f){
return (f-32) * (5/9);
};

 var myTemp = toCelcius(100)
console.log("My temp in C is",myTemp,"my degrees");




 
// jAVASCRIPT OBJECT TYPE 
let mycollege = {
  Number1 : "Christ",
  Number2 : "Apollo",
  Number3 : "MANIPAL",
  Description : "These three are the best college"
};
  //To insert new key value Pair ie; college.description = These are topmost best college.

 mycollege.description = "These are topmost best college.",

console.log(typeof(mycollege));


//ARRAY - multiple value in single variable

const cutegirl = ["Dolma", "Chemi", "Sonam", "Diyang"];

let l = cutegirl.length;
console.log(l);
console.log(cutegirl.length);


//ACCESS METHOD
console.log(cutegirl[0])
let firstname= cutegirl[0]
console.log(firstname)

//FOR LOOP IN ARRAY
let sweetgirl1 = ["Dolma", "Chemi", "Sonam", "Diyang"];

let T = sweetgirl1.length;
console.log(T);

for(let i = 0; i < sweetgirl1; i++){
  console.log(sweetgirl[i]);
}

for(let i = sweetgirl1 - 1; i >= 0; i--){
  console.log(sweetgirl[i]);
}


//UPDATE NEW ELEMENT IN INDEX
girl[0] = "Tenzin";
console.log(girl[0])



//FUNCTION RETURN
function getGrade(percentage){
  let grade = "";
  if(percentage>90){
    grade='A';
  }
  else if(percentage>70){
    grade='B'
  }
  else if(percentage > 50){
    grade='C';
  }
  else if(percentage>35){
    grade='D';
  }
  else{
    grade='E';
  }

  return grade;
}

function calPercentage(){
  let maths = 98;
  let tibetan =56;
  let english = 88;

  let percentage = Math.floor((maths+tibetan+english)/3);
  console.log(percentage)
  
  let grade = getGrade(percentage);
  console.log("your percentage : "+percentage+" grade : "+grade);
}

calPercentage();

let student = { Name : "Dol",
                 Age : "25yrs",
              college : "christ"
           }

console.log("Name:"+student.Name,"Age:"+ student.Age,"college:"+student.college);