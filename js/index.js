let promise = new Promise((resolve, reject) => {
  console.log("Resolved ");
  return resolve(1);
});

console.log("Promise created");
function sayMyName() {
  console.log("My name");
}

let firstPromise = new Promise((resolve, reject) => {
  setTimeout(sayMyName, 1000);
  resolve(1);
});

let promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});
promise1
  .then((message) => {
    console.log("the message says" + message);
  })
  .catch((error) => {
    console.log(error);
  });

let promisenew = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Promise resoved");
  } else {
    reject("Promise rejected");
  }
});

promisenew
  .then((message) => {
    console.log("1st the message says" + message);
    return "promise second to be resolve";
  })
  .then((message) => {
    console.log(" 2rd message): " + message);
    return "promise third to be resolve";
  })
  .then((message) => {
    console.log("3rd message: " + message);
  })
  .catch((error) => {
    console.log("internal server error: " + error);
  });

function creatingOrder() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Creating order");
      resolve();
    }, 1000);
  });
  return promise;
}
function payment() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment done");
      resolve();
    }, 1000);
  });
  return promise;
}
function orderSummary() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order summary");
      resolve();
    }, 1000);
  });
  return promise;
}

function main() {
  creatingOrder()
    .then(payment)
    .then(orderSummary)
    .then(() => {
      setTimeout(() => {
        console.log("All Order completed");
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
    });
}

main();

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}

getData();
