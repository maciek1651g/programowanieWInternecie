import Game from "./game";
import styles from "./style.module.css";

const DialogBox = () => {
    return (
        <div id="dialogBox" className={styles.dialogBox}>
            <div className={styles.infoBox}>
                <h2>Gratulacje wygrałeś!</h2>
                <h3>Zmieniaj poziomy trudności oraz grafiki i baw się dobrze.</h3>
                <button
                    className={styles.dialogButton}
                    onClick={Game.closeDialogBox}
                >
                    Powrót
                </button>
            </div>
        </div>
    );
};

export default DialogBox;
