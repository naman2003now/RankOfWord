
function factorial(n){
    result = 1
    for(i = 1; i <= n; i++){
        result *= i
    }
    return result
}

function getWord(){
    let word = document.getElementById("word").value
    word = word.toUpperCase().split("")
    return word
}

function wordToNumbers(word){
    let charId = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let number = []
    word.forEach(element => {
        for(i = 0; i < 26; i++){
            if(charId[i] == element){
                number.push(i)
            }
        }
    });
    return number
}

function FindTheRank(numberArray){
    let checking = false
    let i = 0
    let rank = 0
    let numberArraySorted = []
    numberArray.forEach(element => {numberArraySorted.push(element)})
    numberArraySorted.sort(function(a, b){return a-b})
    numberArray.forEach(element => {
        checking = true
        i = 0
        let n = numberArraySorted.length
        while(checking){
            let hello = numberArraySorted[i]
            if(numberArraySorted[i] == element){
                numberArraySorted.splice(i, 1)
                checking =false;
            }else{
                i += 1
                let damnDebug = factorial(numberArraySorted.length - 1)
                rank += (damnDebug/repeatation(numberArraySorted)) 
            }
        }
    })
    return rank + 1
}

function repeatation(numbers){
    let repeatArray = []
    let temp = 1
    numbers = numbers.sort(function(a, b){return a-b})
    for(i = 0; i < numbers.length; i++){
        if(numbers[i] == numbers[i + 1]){
            temp += 1
        }else{
            repeatArray.push(temp)
            temp = 1
        }
    }
    let output = 1
    repeatArray.forEach(element => {
        output *= factorial(element)
    })
    return output
}

function afterClick(){
    inputWord = getWord()
    numberArray = wordToNumbers(inputWord)
    rank = FindTheRank(numberArray)
    document.getElementById("output").innerHTML = "Rank: " + rank
}

