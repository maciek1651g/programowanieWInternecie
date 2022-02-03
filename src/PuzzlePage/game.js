import styles from "./style.module.css";

let placeEmptySquare = [];
let positionsTab = [];
let isStartGame = false;

const getImageSource = (text) => "/puzzle/img/" + text + ".jpg";
const $ = (id) => document.getElementById(id);

function changePicture(str) {
    if (!isStartGame || (str && str === "Win!")) {
        let src = $("picture").value;
        const board = $("board");
        if (src === "") {
            board.innerHTML =
                "<p>By zagrać w puzzle wybierz obrazek z listy powyżej, dostosuj poziom trudności i kliknij start.</p>";
        } else {
            let img =
                '<img class="' +
                styles.obraz +
                '" src="' +
                getImageSource(src) +
                '" alt="' +
                src +
                '" />';
            board.innerHTML = img;
        }
    }
}

function tryMoveElement(event) {
    let target = event.target;
    let i = parseInt(target.getAttribute("data-possition-i"));
    let j = parseInt(target.getAttribute("data-possition-j"));

    if (i - 1 >= 0 && placeEmptySquare[i - 1][j] === 1) {
        moveEmptySquare(target, i, j, i - 1, j);
    } else if (i + 1 < placeEmptySquare.length && placeEmptySquare[i + 1][j] === 1) {
        moveEmptySquare(target, i, j, i + 1, j);
    } else if (j - 1 >= 0 && placeEmptySquare[i][j - 1] === 1) {
        moveEmptySquare(target, i, j, i, j - 1);
    } else if (j + 1 < placeEmptySquare.length && placeEmptySquare[i][j + 1] === 1) {
        moveEmptySquare(target, i, j, i, j + 1);
    }
}

function moveEmptySquare(target, i1, j1, i2, j2) {
    placeEmptySquare[i2][j2] = 0;
    placeEmptySquare[i1][j1] = 1;
    moveElement(target, i2, j2);
    sprWin(i1, j1);
}

function sprWin(i, j) {
    if (i === placeEmptySquare.length - 1 && j === placeEmptySquare.length - 1) {
        let child = $("board").childNodes;
        for (let k = 0; k < child.length; k++) {
            let current_i = parseInt(child[k].getAttribute("data-possition-i"));
            let current_j = parseInt(child[k].getAttribute("data-possition-j"));
            let right_i = parseInt(child[k].getAttribute("data-right-possition-i"));
            let right_j = parseInt(child[k].getAttribute("data-right-possition-j"));

            if (current_i !== right_i || current_j !== right_j) {
                return;
            }
        }

        win();
    }
}

function win() {
    stopGame();
    openDialogBox();
}

function openDialogBox() {
    $("dialogBox").style.display = "block";
}

function closeDialogBox() {
    $("dialogBox").style.display = "none";
}

function moveElement(element, i, j) {
    element.setAttribute("data-possition-i", i);
    element.setAttribute("data-possition-j", j);
    element.style.top = positionsTab[i][j]["top"] + "px";
    element.style.left = positionsTab[i][j]["left"] + "px";
}

function shufflingPicture() {
    let child = $("board").childNodes;
    for (let i = 0; i < 100; i++) {
        let a = random(0, child.length);
        let b = random(0, child.length);

        let a_i = parseInt(child[a].getAttribute("data-possition-i"));
        let a_j = parseInt(child[a].getAttribute("data-possition-j"));
        let b_i = parseInt(child[b].getAttribute("data-possition-i"));
        let b_j = parseInt(child[b].getAttribute("data-possition-j"));
        moveElement(child[a], b_i, b_j);
        moveElement(child[b], a_i, a_j);
    }
}

function random(a, b) {
    if (a < b) {
        let interval = b - a;
        let numOfDigits = interval.toString().length;
        let r = Math.random() * Math.pow(10, numOfDigits);
        r = Math.round(r);
        r = r % interval;
        r += a;
        return r;
    }
}

function stopGame() {
    const startButton = $("startButton");

    const newElement = startButton.cloneNode(true);
    newElement.innerText = "Start";
    newElement.addEventListener("click", startGame, false);
    startButton.parentNode.replaceChild(newElement, startButton);

    $("descriptionButtonStartStop").innerText = "Rozpocznij grę:";
    let board = document.getElementById("board");
    if (board.getAttribute("data-imgName") !== null) {
        $("picture").value = board.getAttribute("data-imgName");
    }
    board.removeAttribute("data-imgName");
    changePicture("Win!");
    placeEmptySquare = [];
    positionsTab = [];
    isStartGame = false;
}

function startGame() {
    let src = $("picture").value;
    if (src === "") {
        return;
    }

    let difficult = parseInt($("dificulty").value);
    let board = $("board");
    board.setAttribute("data-imgName", src);
    src = getImageSource(src);
    difficult += 2;
    let size = 540 / difficult;

    const startButton = $("startButton");

    const newElement = startButton.cloneNode(true);
    newElement.innerText = "Stop";
    newElement.addEventListener("click", stopGame, false);
    startButton.parentNode.replaceChild(newElement, startButton);

    $("descriptionButtonStartStop").innerText = "Zatrzymaj grę:";

    //https://stackoverflow.com/questions/481351/programmatically-clip-cut-image-using-javascript
    //https://stackoverflow.com/questions/21933043/split-an-image-using-javascript?fbclid=IwAR33I4zOA0Dy6PFwSTetyjYPBK37xaF44Z83g4j0i64qNfjdAToiBhnTYNY

    board.innerHTML = "";
    placeEmptySquare = [];
    positionsTab = [];
    isStartGame = true;

    for (let i = 0; i < difficult; i++) {
        positionsTab.push([]);
        placeEmptySquare.push([]);
        for (let j = 0; j < difficult; j++) {
            let top = size * i;
            let left = size * j;
            placeEmptySquare[i][j] = 0;
            positionsTab[i][j] = [];
            positionsTab[i][j]["top"] = top;
            positionsTab[i][j]["left"] = left;

            let div = document.createElement("div");
            div.classList.add(styles.partPicture);
            div.setAttribute("data-possition-i", i);
            div.setAttribute("data-possition-j", j);
            div.setAttribute("data-right-possition-i", i);
            div.setAttribute("data-right-possition-j", j);
            div.style.top = top + "px";
            div.style.left = left + "px";
            div.style.height = size + "px";
            div.style.width = size + "px";
            div.style.background = "url(" + src + ") -" + left + "px -" + top + "px";
            div.addEventListener("click", tryMoveElement, false);
            board.appendChild(div);
        }
    }

    placeEmptySquare[placeEmptySquare.length - 1][placeEmptySquare.length - 1] = 1;
    board.removeChild(board.lastChild);
    shufflingPicture();
}

const toExport = { changePicture, startGame, closeDialogBox };

export default toExport;
