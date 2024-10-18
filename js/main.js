function fibonacciSeries(n) {
	const fibSeries = [0, 1];
	for (let i = 2; i < n; i++) {
		fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
	}
	return fibSeries;
}

function printFibonacciSeries(n) {
	const series = fibonacciSeries(n);
	console.log(series.join(', '));
}

// Example usage:
printFibonacciSeries(10);
