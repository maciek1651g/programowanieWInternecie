import Game from "./game";
import DialogBox from "./DialogBox";


const PuzzleGame = () => {



    return (
        <main className="main">
            <DialogBox />
			<section className="leftcolumn">
				<div className="game">
					<div className="description">
						<p className="descriptionP">Obrazek:</p>
						<p className="descriptionP">Poziom trudności:</p>
						<p id="descriptionButtonStartStop" className="descriptionP">Rozpocznij grę:</p>
					</div>
					<div className="control">
						<select id="picture" className="picture" name="picture" onChange={Game.changePicture}>
						  <option value="" defaultValue>(Wybierz obrazek)</option>
						  <option value="kotek">Kotek</option>
						  <option value="piesek">Piesek</option>
						  <option value="konik">Konik</option>
						</select>
						<select id="dificulty" className="dificulty" name="dificulty">
						  <option value="1" defaultValue>Łatwy(9 części)</option>
						  <option value="2">Średni(16 części)</option>
						  <option value="3">Trudny(25 części)</option>
						</select>
						<button id="startButton" className="startButton" onClick={Game.startGame}>Start!</button>
					</div>
					<div id="board" className="board">
						<p>By zagrać w puzzle wybierz obrazek z listy powyżej, dostosuj poziom trudności i kliknij start.</p>
						<noscript><p className="warning">Żeby zagrać w grę musisz włączyć obsługę skryptów w twojej przeglądarce</p></noscript>
					</div>
				</div>
			</section>
			<aside className="rightcolumn">
				<div className="artykul">
					<h2>Puzzle</h2>
					<p>Wybierz obrazek, poziom trudności, kliknij start i ciesz się grą!</p>
				</div>
			</aside>
		</main>
    )
}


export default PuzzleGame