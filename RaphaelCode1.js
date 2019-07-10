let turn = ["x", "o"], arr = [[], [], []], j1 = ["x", "o"];

function jogadas (j1, posX, posY){
    console.log(arr);    
    arr[posX][posY] = j1;
    if (j1 != "x" && j1 != "o"){
        console.log("Jogada inválida.")
    }
    else{
        console.log("Pode jogar.")
    if (posX >= 0 && posX <= 2 && posY >= 0 && posY <= 2){
    console.log("Jogada válida.")
    }
    else{
        console.log("Jogada inválida")
    }
    jogadas("o", 1, 1);