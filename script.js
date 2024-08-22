const host = 'api.frankfurter.app';
let EURamount = 100;
let toCur = 'USD';
fetch(`https://${host}/latest?amount=${EURamount}&to=${toCur}`)
  .then(resp => resp.json())
  .then((data) => {
    console.log(`${EURamount} EUR sind zuzeit ${data.rates[toCur]}`)
  });