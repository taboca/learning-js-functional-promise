function execCode(done) {
   setTimeout( ()=> {
	// any code..
        done("oi")
   },3000);
}

function endCode(data) {
  console.log('Result is ' + data);
}

execCode(endCode);
