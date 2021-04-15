let gameOver = false;
let currentPlayer = 1;
let matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
let clicks = 0;
let leftIcon = document.getElementById("leftIconActive");
let rightIcon = document.getElementById("rightIconPassive");
let crossBar = document.getElementById("crossBar");
let mainDiv = document.getElementById("mainDiv");
let reloadDiv = document.getElementById("reloadDiv");

function CheckGame() {
    let c0, c1, c2, r0, r1, r2, d1, d2;
    c0 = c1 = c2 = r0 = r1 = r2 = d1 = d2 = 0;
    
    for(let i = 0; i < 3; i++){
        c0 += matrix[i][0];
        c1 += matrix[i][1];
        c2 += matrix[i][2];
        r0 += matrix[0][i];
        r1 += matrix[1][i];
        r2 += matrix[2][i];
        d1 += matrix[i][i];
        d2 += matrix[i][2 - i];
    }  

    if(c0 == 3) return "c01";
    else if(c0 == -3) return "c0-1";
    else if(c1 == 3) return "c11";
    else if(c1 == -3) return "c1-1";
    else if(c2 == 3) return "c21";
    else if(c2 == -3) return "c2-1";
    else if(r0 == 3) return "r01";
    else if(r0 == -3) return "r0-1";
    else if(r1 == 3) return "r11";
    else if(r1 == -3) return "r1-1";
    else if(r2 == 3) return "r21";
    else if(r2 == -3) return "r2-1";
    else if(d1 == 3) return "d11";
    else if(d1 == -3) return "d1-1";
    else if(d2 == 3) return "d21";
    else if(d2 == -3) return "d2-1";

    if(clicks == 9)
        return "tie";

    return (0);
}
function GameOver(winner){
    gameOver = true;
    leftIcon.id = 'leftIconPassive';
    rightIcon.id = 'rightIconPassive';
    crossBar.id = winner;
    if(winner.length == 3)  crossBar.style.backgroundColor = "#42d6ed";
    else    crossBar.style.backgroundColor = "#ff5f47";

    reloadDiv.id = "reloadDivActive";
}

function Clicked(row, column) {
    if(matrix[row][column] == 0 && !gameOver){
        clicks++;
        matrix[row][column] = currentPlayer;
        let currentId = "" + row + column;
        document.getElementById(currentId).classList.add("_" + currentPlayer);
        currentPlayer *= -1;
        let status = CheckGame();
        
        if(currentPlayer == 1){
            leftIcon.id = 'leftIconActive';
            rightIcon.id = 'rightIconPassive';
        }

        else{
            leftIcon.id = 'leftIconPassive';
            rightIcon.id = 'rightIconActive';
        }


        if(status != 0)
            GameOver(status); 
    }
}

function reloadPage() {
    location.reload();
    return false;
} 

function Update() {
    mainDiv.style.height = mainDiv.style.width = window.innerWidth * 0.35 + "px";

    window.requestAnimationFrame(Update);
}

Update();