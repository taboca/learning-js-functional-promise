class _Promise {

  constructor (user_exec_function) {
    this.endUserStartFunction = user_exec_function;
    this.endUserThenFunction = null;
  }

  public_resolveMethod(data) {
    this.endUserThenFunction(data);
  }

  then(endPassedThenFunction) {
    this.endUserThenFunction = endPassedThenFunction;
    this.endUserStartFunction( this );
  }
}

function execCode(promiseThis) {
   setTimeout( ()=> {
	// any code..
        promiseThis.public_resolveMethod("oi")
   },3000);
}

function endCode(data) {
  console.log('Result is ' + data);
}

test = new _Promise( execCode );
test.then(endCode); // register callback and call execode passing callback...
