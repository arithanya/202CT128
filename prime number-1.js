function primeFactorsTo(max)
{
    var store  = [2,3,5,7,11,13], i, j, primes = [2,3,5,7,11];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(primeFactorsTo(5));

console.log(primeFactorsTo(6));
