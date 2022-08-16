//const u1 = document.getElementById("u1")
const u2 = document.getElementById("u2")
const res = document.getElementById("res")
const sbtn = document.getElementById('submit')
const rbtn = document.getElementById('rock')
const pbtn = document.getElementById('paper')
const scibtn = document.getElementById('scissors')
const choices = ["Rock","Paper","Scissors","Player 1","Player 2"];
var rock = 0
var paper = 0
var scissors = 0

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

function userChoice(choice){
    if (choice == 'rock'){
        rock += 1
    }
    else if(choice == 'paper'){
        paper += 1
    }
    else if(choice == "scissors"){
        scissors += 1
    }
    u2.textContent = rock
}