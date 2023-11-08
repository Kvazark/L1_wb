const MathX = (function() {
    function fibonacci(n) {
        ///////первый способ
        ////Простая рекурсивная функция, которая вызывает сама себя, пока не дойдет до момента когда n = 0 или n = 1.
        // if ( n === 0 ) return 0;
        //
        // if (n === 1) return 1;
        // return MathX.fibonacci(n-2) + MathX.fibonacci(n-1);

        ///второй способ(оптимизированный). Используется цикл для вычисления чисел в ряду Фибоначчи, начиная с базовых значений 0 и 1.
        ///Здесь сохраняются только необходимые числа, что позволяет избежать повторных вычислений
        let fib = [0, 1];

        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        return fib[n];
    }

    function fibonacciSeries(n) {
        ////Поскольку первые два значения ряда фиксированы 0 и 1, мы начинаем цикл с i = 2 и повторяем до тех пор, пока i < n
        let series = [0,1];

        for (let i = 2; i < n; i++) {

            series[i] = series[i - 1] + series[i - 2];
        }
        return series
    }

    function isPrime(num) {
        if (num <= 1) { return false; }

        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    function primeNumbers(n) {
        let primes = [];

        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }

        return primes;
    }

    return {
        fibonacci: fibonacci,
        fibonacciSeries: fibonacciSeries,
        isPrime: isPrime,
        primeNumbers: primeNumbers
    };
})();

console.log(MathX.fibonacci(6));
console.log(MathX.fibonacciSeries(10));
console.log(MathX.isPrime(17));
console.log(MathX.primeNumbers(30));