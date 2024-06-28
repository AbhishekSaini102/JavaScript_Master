//Singleton
// Object.create

const mySymbol = Symbol("mySymbol");

//Object literal
const jsUser = {
    name:"Abhsihek", //"name"-> key, "Abhishek"-> value and String
    "full Name": "Abhishek Kumar",
    // mySymbol: "key1", //wrong syntax
    [mySymbol]: "key1",
    age: 25,
    email: "abhishek@google.com",
    location: "India",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser.mySymbol);
// console.log(jsUser[mySymbol]);
// console.log(jsUser.mySymbol);


// jsUser.email = "Abhishek@chatgpt.com"
// Object.freeze(jsUser);
// jsUser.email = "Abhishek@Microsoft.com"
// console.log(jsUser.email);
// console.log(jsUser);


// jsUser.greeting = function(){
//     // console.log("Hello, " + this.name);

//     return "Hello, " + this.name;
// };
// console.log(jsUser.greeting());
// console.log(jsUser.greeting);

// jsUser.greetingTwo = function () {
// //   console.log(`Hello Js User, ${this.name}`);

//   return `Hello Js User, ${this.name}`;
// };
// console.log(jsUser.greetingTwo());






//Using Singleton or using Constructor

// const Instagram = new Object(); //singleton Object
// console.log(Instagram);
const Facebook = {}; //Not a singleton Object

Facebook.id = 123456;
Facebook.name = "Abhishek"; 
Facebook.email = "abhishek@Facebook.com"
Facebook.location = "India";
Facebook.isLoggedin = false;

// console.log(Facebook);

// const regularUser = {
//     // name: "Abhishek",
//     email: "some@gmail.com",
//     fullname:{
//         userFullName:{
//             firstname: "Abhishek",
//             lastname: "Kumar"
//         }
//     },
// }   
// // console.log(regularUser.fullname?.userFullName);
// // console.log(regularUser.fullname);
// // console.log(regularUser);
// console.log(regularUser.fullname?.userFullName.firstname,regularUser.fullname?.userFullName.lastname);

 
const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {4: "four", 5: "five"}
const extraObjs = {6: "six", 7: "seven"}

// const obj3 = {obj1, obj2}
// const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign(obj1, obj2, extraObjs); //return true if obj3 === obj1 
const obj3 = Object.assign({},obj1, obj2, extraObjs) //{}-> target object, obj1, obj2-> source object or return false if obj3 === obj1
// console.log(obj3)
// if(obj3 === obj1){
//     // return true;
//     console.log("Same Object")
// }
// console.log(obj3 === obj1)

const users = [
    {
        name: "Abhishek",
        email: "abhishek@google.com",
    },
    {
        name: "camille",
        email: "cami@camimail.com",
    },
    {
        name: "james",
        email: "james@jamesgmail.com",
    }
]

users[1].email
// console.log(Facebook);
// console.log(users[0].email);

// console.log(Object.keys(Facebook));
// console.log(Object.values(Facebook));
// console.log(Object.entries(Facebook));
// console.log(Object.getOwnPropertyNames(Facebook));
// console.log("symbel:",Object.getOwnPropertySymbols(Facebook));
// console.log(Object.getOwnPropertyDescriptors(Facebook));
// console.log(Object.getPrototypeOf(Facebook));
// console.log(Object.isExtensible(Facebook));
// console.log(Object.isFrozen(Facebook));
// console.log(Object.isSealed(Facebook));
// console.log(Object.keys(Facebook).length);
// console.log(Object.values(Facebook).length);
// console.log(Facebook.hasOwnProperty("isLoggedin"));
// console.log(Object.is(Facebook, Facebook));
// console.log(Object.is(Facebook, {}));
// console.log(Facebook.propertyIsEnumerable("isLoggedin"));
// console.log(Facebook.propertyIsEnumerable("id"));

// Object.defineProperty(Facebook, "id", {writable: false});
// console.log(Object.getOwnPropertyDescriptors(Facebook));

// Object.defineProperty(Facebook, "createdOn", {
//     value: new Date(),
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(Facebook.propertyIsEnumerable("createdOn"));


// const course = {
//   courseName: "JavaScript",
//   courseDuration: "2 months",
//   courseFee: "2000",
//   courseType: "Online",
//   courseRating: "4.5",
//   courseAuthor: "Abhishek",
//   courseDescription: "This is a JavaScript course",
//   courseModules: ["Module1", "Module2", "Module3"],
//   courseTopics: ["Topic1", "Topic2", "Topic3"],
// //   courseEnrolledStudents: 100,
// //   courseCompletedStudents: 50,
// //   courseProgress: 50,
// //   courseStatus: "Active",
// //   courseStartDate: new Date(),
// //   courseEndDate: new Date(),
// //   courseCertificate: true,
// //   courseCertificateType: "Digital",
// //   courseCertificateValidity: "Lifetime",
// //   courseCertificateDownloaded: 50,
// //   courseCertificateDownloadable: true,
// //   courseCertificateDownloadableTill: new Date(),
// //   courseCertificateDownloadableFor: ["Module1", "Module2"],
// //   courseCertificateDownloadableForStudents: 50,
// //   courseCertificateDownloadableForStudentsCompleted: 25,
// //   courseCertificateDownloadableForStudentsProgress: 50,
// //   courseCertificateDownloadableForStudentsStatus: "Active",
// //   courseCertificateDownloadableForStudentsStartDate: new Date(),
// //   courseCertificateDownloadableForStudentsEndDate: new Date(),
// //   courseCertificateDownloadableForStudentsCertificate: true,
// //   courseCertificateDownloadableForStudentsCertificateType: "Digital",
// //   courseCertificateDownloadableForStudentsCertificateValidity: "Lifetime",
// //   courseCertificateDownloadableForStudentsCertificateDownloaded: 25,
// //   courseCertificateDownloadableForStudentsCertificateDownloadable: true,
// //   courseCertificateDownloadableForStudentsCertificateDownloadableTill:
// //     new Date(),
// };

// console.log(course);
// course.courseAuthor
const {courseAuthor : instructor} = course
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "Abhishek")


//json format of object
// {
//     "name": "Abhishek",
//     "course": "JavaScript",
//     "price":"free",
// }

//Array of Objects
// [
//     {},
//     {},
//     {}
// ]