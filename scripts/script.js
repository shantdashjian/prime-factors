var isPrime = function(number) {
	var flag = true;
	for (var i = 2; i < number; i++) {
		if ( number % i === 0) {
			flag = false;
			break;
		}
	}
	return flag;
};

var primeFactors = function(number) {
	var list = [];
	for (var i = 2; i < number; i++ ) {
		if (isPrime(i) && number % i === 0) {
			list.push(i);
		}
	}
	return list;
};


var number = 600851475143;
number = 100000;
console.log("The prime factors of " + number + " are " + primeFactors(number));
