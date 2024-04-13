const isprime = num =>{
    for(let i =2; i<= Math.sqrt(num); i++) {
        if (num % i ===0) return false;
    }
    return num > 1;

};
const logPrimeStatus = num => console.log('${num} $ {isPrime(num) ?');
