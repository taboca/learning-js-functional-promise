class _Promise {

  constructor (user_exec_function) {
    this.endUserStartFunction = user_exec_function;
    this.endUserThenFunction = null;
    this.fTell = (data) => { this.resolveMethod(data) };
  }



  resolveMethod(data) {
    console.log(this.endUserThenFunction);
    this.endUserThenFunction(data);
  }

  then(endPassedThenFunction) {
    this.endUserThenFunction = endPassedThenFunction;
    this.endUserStartFunction( this.fTell );
  }
}

function myTest() {
  return new _Promise(
     callBackForCallingThen => {
        setTimeout( ()=> {
            callBackForCallingThen("oi")
        },3000);
     }
  );
}

myTest().then(data => {
  console.log('Result is ' + data);
});
