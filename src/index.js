// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	var coins = [];
	console.log(currency);	
	if (currency > 10000) {
             return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	}
	if (currency === 0) {
              return {}; 
	}
	if ((currency/50) >= 1) {
			  var h = Math.floor(currency/50);
			  currency -= h*50;
			  coins["H"] = h;
	}
	if ((currency/25) >= 1) {
			  var q = Math.floor(currency/25);
			  currency -= q*25;
			  coins["Q"] = q;
	}
	if ((currency/10) >= 1) {
			  var d = Math.floor(currency/10);
			  currency -= d*10;
			  coins["D"] = d;
	}
	if ((currency/5) >= 1) {
			  var n = Math.floor(currency/5);
			  currency -= n*5;
			  coins["N"] = n;
	}
	if ((currency/1) >= 1) {
			  var p = currency;
			  currency -= p*1;
			  coins["P"] = p;
	}
	
	return coins;
}
	
	