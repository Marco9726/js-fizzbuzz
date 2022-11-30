const container = document.querySelector('.container')

//1
for (let i=1; i<=100; i++){
    //4
    if ( i % 15 == 0 )
     {
        let word = 'Fizzbuzz'
        console.log(word);
        //5.3
        container.innerHTML += `<div class="square square-fizzbuzz">${word}</div>`
    }
    //3
    else if ( i % 5 == 0 )
    {
        let word = 'Buzz'
        console.log(word);
        //5.2
        container.innerHTML += `<div class="square square-buzz">${word}</div>`
    }
    //2
    else if ( i % 3 == 0 )
    {
        let word = 'Fizz' 
        console.log(word);
        //5.1
        container.innerHTML += `<div class="square square-fizz">${word}</div>`
    }
    else {
        let word = i
        console.log(word);
        //5
        container.innerHTML += `<div class="square">${word}</div>`  
    }
}

