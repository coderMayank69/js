// int = console.log("QR based attendence system");
// let str = "naughty";
// let size = 0;

// for ( let i of str ){
//     console.log("i = ", i);
//     size++;
// }
// console.log(size);

// let student = {
//     name: "mayank",
//     age : 18,
//     cgpa: 9.1,
// }
// for (let key in student){
//     console.log( key,student[key] ) ;
// }

// for(let i = 0; i <=100; i++){
//     if(i%2 === 0){
//     console.log(i);
//     }}


// let guessNo = 35;
// let userNo = prompt("Enter a no");

// do{
//      userNo = prompt("Enter");

// }while(userNo != guessNo);

// console.log("congratulation");

// str = "mayank";

// let student = {
//     name : "mayank",
//     cgpa : 9.1,
// };

// console.log("the cgpa of student",student.name, "is ", student.cgpa);
// console.log("the cgpa of student",student.name, "is ", student.cgpa);
// output = `the cgpa of student ${student.name} is ${student.cgpa}`;
// console.log(output)

// let str = "      Mayank   singh   ";
// console.log(str.toUpperCase(str));
// console.log(str.toLowerCase(str));
// console.log(str.trim(str));


// let name = "mayank"
// let serName = " singh"
// console.log(name.slice(4));
// console.log(name.concat(serName));
// console.log(name + serName);

// let str = "bella";
// console.log(str.replace("l" , "a"));
// console.log(str.replaceAll("l", "a"));
// console.log(str.charAt(3));


// let name = prompt("Enter your name");

// let userName = "@" + name + name.length;
// console.log(userName);

// let marks =  [79,78,98,70,97,98,79,89,76,97,69,80,90];

 // for (let i = 0 ; i< marks.length;i++){
//     console.log(marks[i]);
// }




//let char = ["a",  "s", "d", "f" , "g"];


// for (let c of char){
//     console.log(c.toUpperCase());
// }


let modeBtn = document.querySelector("#mode");
let body ;
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
       // body.classList.add("dark");
        //body.classList.remove("light");
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
       /* body.classList.add("light");
        body.classList.remove("dark");*/
    }
    console.log(currMode)
});
