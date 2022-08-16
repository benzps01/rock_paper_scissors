//const u1 = document.getElementById("u1")
const u2 = document.getElementById("u2")
const res = document.getElementById("res")
const uscore = document.getElementById('uscore')
const cscore = document.getElementById('cscore')
const sbtn = document.getElementById('submit')
const rbtn = document.getElementById('rock')
const pbtn = document.getElementById('paper')
const scibtn = document.getElementById('scissors')
const choices = ["Rock","Paper","Scissors","Player 1","Player 2"];
var userScore = 0
var compScore = 0

function computeValue(){
    let p1 = Math.floor(Math.random() * 3);
    let p2 = Math.floor(Math.random() * 3);
    //u1.textContent = choices[p1]
    u2.textContent = choices[p2]

    if(choices[p1] == 'Rock' && choices[p2] == 'Scissors'){
        res.textContent = "Player 1 wins!"
    }
    else if(choices[p1] == 'Paper' && choices[p2] == 'Rock'){
        res.textContent = "Player 1 wins!"
    }
    else if(choices[p1] == 'Scissors' && choices[p2] == 'Paper'){
        res.textContent = "Player 1 wins!"
    }
    else if(choices[p1] == choices[p2]){
        res.textContent = "It's a Draw!!"
    }
    else{
        res.textContent = "Player 2 wins!"
    }
}
function resetValue(){
    u1.textContent = choices[3]
    u2.textContent = choices[4]
    res.textContent = "Result!!"
}

function computeGame(userchoice){
    let cp = Math.floor(Math.random() * 3);
    u2.textContent = choices[cp]

    if(userchoice == 'rock' && choices[cp] == 'Scissors'){
        res.textContent = "User wins!"
        userScore += 1
    }
    else if(userchoice == 'paper' && choices[cp] == 'Rock'){
        res.textContent = "User wins!"
        userScore += 1
    }
    else if(userchoice == 'scissors' && choices[cp] == 'Paper'){
        res.textContent = "User wins!"
        userScore += 1
    }
    else if(userchoice == choices[cp]){
        res.textContent = "It's a Draw!!"
    }
    else{
        res.textContent = "Computer wins!"
        compScore += 1
    }

    uscore.textContent = `User Score: ${userScore}`
    cscore.textContent = `Computer Score: ${compScore}`
}