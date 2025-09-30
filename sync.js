function login() {
  setTimeout(() => {
    console.log("logged in");
  }, 1000);
}
function getData() {
  setTimeout(() => {
    console.log("Fetching details");
  }, 3000);
}
function displayData() {
  setTimeout(() => {
    console.log("Here is the data");
  }, 5000);
}
function AttemptTest() {
  setTimeout(() => {
    console.log("attempted test");
  }, 1000);
}
function logout() {
  setTimeout(() => {
    console.log("logged out");
  }, 500);
}

login();
getData();
displayData();
AttemptTest();
logout();

console.log('Call other app');