function login(cb) {
  setTimeout(() => {
    console.log("logged in");
    cb();
  }, 1000);
}
function getData(cb) {
  setTimeout(() => {
    console.log("Fetching details");
    cb();
  }, 3000);
}

function DisplayData(cb) {
  setTimeout(() => {
    console.log("Here is the data");
    cb();
  }, 5000);
}
function AttemptTest(cb) {
  setTimeout(() => {
    console.log("attempted test");
    cb();
  }, 1000);
}
function logout() {
  setTimeout(() => {
    console.log("logged out");
  }, 500);
}

login(function() {
  getData(function() {
    AttemptTest(function() {
      DisplayData(function() {
        logout();
      });
    });
  });
});

console.log('call other app');