function login(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('register end')   
      resolve();
    },2000)
    });   
 }
function getData(){
   return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('get data')   
      resolve();
    },5000)
});
}
function displaydata(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('display data end')   
      resolve();
    },3000)
});
}
function AttemptTest(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log('attempted ')   
      resolve();
    },1000)
});  
}
function logout(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
      console.log(' logout')   
      resolve();
    },1000)
});  
}

login()

.then(getData)
.then(displaydata)
.then(AttemptTest)
.then(logout)
.catch((err)=>{
console.log('Error:'+err);
})


console.log('call other application')