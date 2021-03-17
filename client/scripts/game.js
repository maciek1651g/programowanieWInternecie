placeEmptySquare = [];
positionsTab = [];
isStartGame = false;

function getImageSource(text)
{
	return "./img/" + text + ".webp";
}

function changePicture(str)
{
	if(isStartGame==false || (str && str=="Win!"))
	{
		var src = document.getElementById("picture").value;
		if(src==="")
		{
			document.getElementById("board").innerHTML = '<p>By zagrać w puzzle wybierz obrazek z listy powyżej, dostosuj poziom trudności i kliknij start.</p>';
		}
		else
		{
			var img = '<img class="obraz" src="'+getImageSource(src)+'" alt="'+src+'" />';
			document.getElementById("board").innerHTML = img;
		}
	}
}

function tryMoveElement(event)
{
	var i = parseInt(event.target.getAttribute("data-possition-i"));
	var j = parseInt(event.target.getAttribute("data-possition-j"));
	
	if((i-1)>=0 && placeEmptySquare[i-1][j]==1)
	{
		moveElement(event.target, i-1, j);
		sprWin(i, j);
	}
	else if((i+1)<placeEmptySquare.length && placeEmptySquare[i+1][j]==1)
	{
		moveElement(event.target, i+1, j);
		sprWin(i, j);
	}
	else if((j-1)>=0 && placeEmptySquare[i][j-1]==1)
	{
		moveElement(event.target, i, j-1);
		sprWin(i, j);
	}
	else if((j+1)<placeEmptySquare.length && placeEmptySquare[i][j+1]==1)
	{
		moveElement(event.target, i, j+1);
		sprWin(i, j);
	}
}

function sprWin(i, j)
{
	placeEmptySquare[i][j]=1;
	
	if(i==placeEmptySquare.length-1 && j ==placeEmptySquare.length-1)
	{
		var child = document.getElementById("board").childNodes;
		for(var k=0; k<child.length; k++)
		{
			var current_i = parseInt(child[k].getAttribute("data-possition-i"));
			var current_j = parseInt(child[k].getAttribute("data-possition-j"));
			var right_i = parseInt(child[k].getAttribute("data-right-possition-i"));
			var right_j = parseInt(child[k].getAttribute("data-right-possition-j"));
			
			if(current_i!=right_i || current_j!=right_j)
			{
				return
			}	
		}
		
		win();
	}
}

function win()
{
	stopGame();
	openDialogBox();
}

function openDialogBox()
{
	document.getElementById("dialogBox").style.display = "block";
}

function closeDialogBox()
{
	document.getElementById("dialogBox").style.display = "none";
}

function moveElement(element, i, j)
{
	element.setAttribute("data-possition-i", i);
	element.setAttribute("data-possition-j", j);
	element.style.top = positionsTab[i][j]["top"]+"px";
	element.style.left = positionsTab[i][j]["left"]+"px";
	placeEmptySquare[i][j]=0;
}

function shufflingPicture()
{
	var child = document.getElementById("board").childNodes;
	for(var i=0;i<100;i++)
	{
		var a = random(0, child.length);
		var b = random(0, child.length);
		
		a_i = parseInt(child[a].getAttribute("data-possition-i"));
		a_j = parseInt(child[a].getAttribute("data-possition-j"));
		b_i = parseInt(child[b].getAttribute("data-possition-i"));
		b_j = parseInt(child[b].getAttribute("data-possition-j"));
		moveElement(child[a], b_i, b_j)
		moveElement(child[b], a_i, a_j)
	}
}

function random(a, b)
{
	if(a<b)
	{
		var interval = b-a;
		var numOfDigits = interval.toString().length;
		var r = Math.random()*Math.pow(10,numOfDigits);
		r = Math.round(r);
		r = r%interval;
		r+=a;
		return r;
	}
}

function stopGame()
{
	document.getElementById("startButton").setAttribute("onclick", "startGame()");
	document.getElementById("startButton").innerText = "Start!"
	document.getElementById("descriptionButtonStartStop").innerText = "Rozpocznij grę:"
	var board = document.getElementById("board")
	if(board.getAttribute("data-imgName")!==null)
	{
		document.getElementById("picture").value = board.getAttribute("data-imgName");
	}
	board.removeAttribute("data-imgName");
	changePicture("Win!");
	placeEmptySquare = [];
	positionsTab = [];
	isStartGame = false;
}

function startGame()
{
	var src = document.getElementById("picture").value;
	if(src==="")
		return;
	
	var difficult = parseInt(document.getElementById("dificulty").value);
	var board = document.getElementById("board");
	board.setAttribute("data-imgName", src);
	src = getImageSource(src);
	difficult+=2;
	var size = 540/difficult;
	
	document.getElementById("startButton").setAttribute("onclick", "stopGame()");
	document.getElementById("startButton").innerText = "Stop"
	document.getElementById("descriptionButtonStartStop").innerText = "Zatrzymaj grę:"
	
	//https://stackoverflow.com/questions/481351/programmatically-clip-cut-image-using-javascript
	//https://stackoverflow.com/questions/21933043/split-an-image-using-javascript?fbclid=IwAR33I4zOA0Dy6PFwSTetyjYPBK37xaF44Z83g4j0i64qNfjdAToiBhnTYNY


	board.innerHTML = "";
	placeEmptySquare = [];
	positionsTab = [];
	isStartGame = true;
	
	for(var i=0;i<difficult;i++)
	{
		positionsTab.push([]);
		placeEmptySquare.push([]);
		for(var j=0;j<difficult;j++)
		{
			var top = size*i;
			var left = size*j;
			placeEmptySquare[i][j] = 0;
			positionsTab[i][j] = [];
			positionsTab[i][j]["top"] = top;
			positionsTab[i][j]["left"] = left;
			
			var div = document.createElement('div');
			div.classList.add("partPicture");
			div.setAttribute("data-possition-i", i);
			div.setAttribute("data-possition-j", j);
			div.setAttribute("data-right-possition-i", i);
			div.setAttribute("data-right-possition-j", j);
			div.style.top = top+"px";
			div.style.left = left+"px";
			div.style.height = size+"px";
			div.style.width = size+"px";
			div.style.background = "url("+src+") -"+left+"px -"+top+"px";
			div.addEventListener("click", tryMoveElement, false)
			board.appendChild(div);
		}	
	}
	placeEmptySquare[placeEmptySquare.length-1][placeEmptySquare.length-1] = 1;
	board.removeChild(board.lastChild);
	shufflingPicture();
}