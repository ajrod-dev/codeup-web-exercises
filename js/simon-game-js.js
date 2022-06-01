'use strict';

const sequence = []

function computerSequence (count){
    sequence.length = count
    sequence.push(randomNumber())
    console.log(sequence)
}

computerSequence(2)

function playerSequence(){
    const playerSequence = []

}


function randomNumber(){
    return Math.ceil((Math.random() * 4 - 1) + 1)
}

