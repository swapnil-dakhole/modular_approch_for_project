// console.log("Script start");
// function abc() {
//   console.log("abc Called");
// }
// function xyz(func) {
//   console.log("xyz called");
//   func();
// }
// xyz(abc);

// console.log("Script End");

// console.log("Script start");
// function abc() {
//   console.log("abc Called");
// }
// setTimeout(() => {
//   console.log("In the setTimeout function");
//   abc();
// }, 4000);

// console.log("Script End");

// console.log("Script start");
// function abc() {
//   console.log("abc Called");
//   setTimeout(() => {
//     let msg = "In the setTimeout function";
//     console.log("In the setTimeout function after 4000 ms");
//     return msg;
//   }, 4000);
// }
// let message = abc();
// console.log("message ", message);
// console.log("Script End");

// Promises
// let myPromise = new Promise((resolve, reject) => {
//   let val = false;
//   if (val) {
//     resolve("excuted very well !!!!!!!!!!!!!!!1");
//   } else {
//     reject("something went wrong !!!!!!!!!!!!!!!");
//   }
// });
// myPromise
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("Script End");

console.log("Script start");
function abc() {
  console.log("abc Called");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let msg = "Cybage Software LTD.";
      //   console.log("In the setTimeout function after 4000 ms");
      resolve(msg);
    }, 4000);
    // reject("something wrong");
  });
}

async function get_mess() {
  let p = await abc();
  console.log(p);
}
get_mess();
// let message = abc();
// // console.log("message ", message);
// message.then((response) => {
//   console.log("company:", response);
// });
console.log("Script End");
