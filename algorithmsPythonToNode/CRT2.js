function inv(a, m) 
{ 
	let m0 = m; 
	let x0 = 0; 
	let x1 = 1; 

	if (m == 1) 
	return 0; 

	// Apply extended Euclid Algorithm 
	while (a > 1) 
	{ 
		// q is quotient 
		let q = parseInt(a / m); 

		let t = m; 

		// m is remainder now, process 
		// same as euclid's algo 
		m = a % m; 
		a = t; 

		t = x0; 

		x0 = x1 - q * x0; 

		x1 = t; 
	} 

	// Make x1 positive 
	if (x1 < 0) 
	x1 += m0; 

	return x1; 
} 

// k is size of num[] and rem[]. 
// Returns the smallest 
// number x such that: 
// x % num[0] = rem[0], 
// x % num[1] = rem[1], 
// .................. 
// x % num[k-2] = rem[k-1] 
// Assumption: Numbers in num[] 
// are pairwise coprime (gcd for 
// every pair is 1) 
function findMinX(num, rem, k) 
{ 
	// Compute product of all numbers 
	let prod = 1; 
	for (let i = 0; i < k; i++) 
		prod *= num[i]; 

	// Initialize result 
	let result = 0; 

	// Apply above formula 
	for (let i = 0; i < k; i++) 
	{ 
		pp = parseInt(prod / num[i]); 
		result += rem[i] * inv(pp, 
    num[i]) * pp; 
	} 

	return result % prod; 
} 

// Driver Code 
// 11
let num = new Array(3, 4, 5); 
let rem = new Array(2, 3, 1);

// 23
// let num = new Array(3,5,7); 
// let rem = new Array(2,3,2); 

// 158
// let num = new Array(5,6,7); 
// let rem = new Array(3,2,4); 

// 26
// let num = new Array(3,4,5); 
// let rem = new Array(2,2,1); 
let k = num.length;
console.log("n value is: " + findMinX(num, rem, k)); 
