async function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("logged in");
      resolve();
    }, 1000);
  });
}
async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Showing details");
      resolve();
    }, 3000);
  });
}

async function displayData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Here is the data");
      resolve();
    }, 5000);
  });
}
async function AttemptTest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("attempted test");
      resolve();
    }, 1000);
  });
}
async function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("logged out");
      resolve();
    }, 500);
  });
}

async function main() {
  await login();
  await getData();
  await displayData();
  await AttemptTest();
  await logout();

  console.log("call other app");
}

main();

console.log('call other app');