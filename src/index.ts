// const NUM = -1.005;
// const DP = 2;
import fetch from "node-fetch";

// console.log(`round off ${NUM} Math.Round() + Number.EPSILON() => ` + Math.round((NUM + Number.EPSILON) * 100) / 100);
// console.log(`round off ${NUM} toFixed() => `+ NUM.toFixed(2));
// console.log(`round off ${NUM} number(${NUM} + "e") => ` + Number(NUM +"e" + -DP));
// console.log(`round off ${NUM} Math.round(${NUM} * 100) / 100 => ` + Math.round(NUM * 100) / 100);

// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(response => response.json())
//   .then(json => console.log(json));
const url: string = "https://jsonplaceholder.typicode.com/comments";
async function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).then(j => {
        return j
    })
}

const result = api(url)
console.log(result);
// console.log(api(url));