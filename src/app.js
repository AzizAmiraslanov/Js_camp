

function findPrime(...numbers) {
    let bolunen = numbers;
    let bolen = [];
    let sayac;
    for (let i = 0; i < bolunen.length; i++) {
        sayac = 0;
        for (let j = 2; j < bolunen[i]; j++) {
            if (bolunen[i] % j == 0) {
                sayac++;
            }
        }
        if (sayac == 0) {
            console.log(bolunen[i] + "      ===>     Bu sayi bir asal sayidir");
        } else {
            console.log(bolunen[i] + "      ===>     Bu bir asla sayi diyildir");
        }
    }
}

findPrime(5, 11, 15, 68, 67, 109, 111, 222);

console.log("************************************************************************************");




function friendNumber(firstNumber, secondNumber) {
    let firstNumberSum = 0;
    let secondNumberSum = 0;
    for (let i = 1; i < firstNumber; i++) {
        if (firstNumber % i == 0) {
            firstNumberSum = firstNumberSum + i;
        }
    }
    for (let j = 1; j < secondNumber; j++) {
        if (secondNumber % j == 0) {
            secondNumberSum = secondNumberSum + j;
        }
    }

    if (firstNumberSum == secondNumber && secondNumberSum == firstNumber) {
        console.log(firstNumber + " ve " + secondNumber + " Arkadas sayilar sayilir");
    } else {
        console.log(firstNumber + " ve " + secondNumber + " Arkadas sayilar diyildir");
    }
}

friendNumber(8619765, 9627915);

console.log("************************************************************************************");



function realNUmber (){
    for(let numbers = 1; numbers<1000; numbers++){
        let toplam = 0;
        for(let i=1; i<numbers; i++){
            if (numbers % i == 0) {
               toplam = toplam + i;
            }
            if(numbers==toplam) {
                console.log(numbers + " Mükemmel Sayıdır");
            }  
        }
    }
}

realNUmber();


console.log("************************************************************************************");



function findPrimeNumbers(n) {
    let primeNumbers = []
    for (let i = 1; i <= n; i++) {
        let count = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++
                
            }
        }
        if (count == 0) {
            primeNumbers.push(i)
         
        }
        count == 0
   
    }  
    console.log("1000 qeder olan sayilar :" + "\n" +primeNumbers + "\n" )
}

findPrimeNumbers(1000)

console.log("************************************************************************************");
