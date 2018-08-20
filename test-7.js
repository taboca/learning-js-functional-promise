class _Promise {

  constructor () {
  }

  then(endUserStartFunction, endPassedThenFunction) {
    endUserStartFunction( endPassedThenFunction );
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

test = new _Promise();
test.then(execCode, endCode); // register callback and call execode passing callback...
