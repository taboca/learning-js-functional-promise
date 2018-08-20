class _Promise {

  constructor (user_exec_function) {
    this.endUserStartFunction = user_exec_function;
    this.endUserThenFunction = null;
  }

  public_resolveMethod(data) {
    this.endUserThenFunction(data);
  }

  then(endPassedThenFunction) {
    this.endUserStartFunction( endPassedThenFunction );
  }
}

function execCode(done) {
   setTimeout( ()=> {
	// any code..
        done("oi")
   },3000);
}

function endCode(data) {
  console.log('Result is ' + data);
}

test = new _Promise( execCode );
test.then(endCode); // register callback and call execode passing callback...
