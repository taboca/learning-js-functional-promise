class _Promise {

  constructor (user_exec_function) {
    this.endUserStart = user_exec_function;
  }

  then(endPassedThenFunction) {
    this.endUserStart( endPassedThenFunction );
  }
}

function myTest() {
  return new _Promise(
     userThenFunction => {
        setTimeout( ()=> {
            userThenFunction("data")
        },3000);
     }
  );
}

myTest().then(data => {
  console.log('Result is ' + data);
});
