import Game from "./game";

const DialogBox = () => {
    return (
        <div id="dialogBox" className="dialogBox">
			<div className="infoBox">
				<h2>Gratulacje wygrałeś!</h2>
				<h3>Zmieniaj poziomy trudności oraz grafiki i baw się dobrze.</h3>
				<button className="dialogButton" onClick={Game.closeDialogBox}>Powrót</button>
			</div>
		</div>
    )
}

export default DialogBox