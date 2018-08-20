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

function execCode(promise_done) {
   setTimeout( ()=> {
	// any code..
        promise_done("oi")
   },3000);
}

function endCode(data) {
  console.log('Result is ' + data);
}

test = new _Promise( execCode );
test.then(endCode);
