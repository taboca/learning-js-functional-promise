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

function execCode(visitorDone) {
   setTimeout( ()=> {
        visitorDone("oi")
   },3000);
}

function myTest() {
  let a = new _Promise( execCode );
  return a;
}

let test = myTest();
test.then(data => {
  console.log('Result is ' + data);
});
