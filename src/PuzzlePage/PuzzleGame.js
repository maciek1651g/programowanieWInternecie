import Game from "./game";
import DialogBox from "./DialogBox";
import styles from "./style.module.css";

const PuzzleGame = () => {
    return (
        <main className={styles.main}>
            <DialogBox />
            <section className={styles.leftcolumn}>
                <div className={styles.game}>
                    <div className={styles.description}>
                        <p className={styles.descriptionP}>Obrazek:</p>
                        <p className={styles.descriptionP}>Poziom trudności:</p>
                        <p
                            id="descriptionButtonStartStop"
                            className={styles.descriptionP}
                        >
                            Rozpocznij grę:
                        </p>
                    </div>
                    <div className={styles.control}>
                        <select
                            id="picture"
                            className={styles.picture}
                            name="picture"
                            onChange={Game.changePicture}
                        >
                            <option value="" defaultValue>
                                (Wybierz obrazek)
                            </option>
                            <option value="kotek">Kotek</option>
                            <option value="piesek">Piesek</option>
                            <option value="konik">Konik</option>
                        </select>
                        <select
                            id="dificulty"
                            className={styles.dificulty}
                            name="dificulty"
                        >
                            <option value="1" defaultValue>
                                Łatwy(9 części)
                            </option>
                            <option value="2">Średni(16 części)</option>
                            <option value="3">Trudny(25 części)</option>
                        </select>
                        <button
                            id="startButton"
                            className={styles.startButton}
                            onClick={Game.startGame}
                        >
                            Start!
                        </button>
                    </div>
                    <div id="board" className={styles.board}>
                        <p>
                            By zagrać w puzzle wybierz obrazek z listy powyżej,
                            dostosuj poziom trudności i kliknij start.
                        </p>
                        <noscript>
                            <p className="warning">
                                Żeby zagrać w grę musisz włączyć obsługę skryptów w
                                twojej przeglądarce
                            </p>
                        </noscript>
                    </div>
                </div>
            </section>
            <aside className={styles.rightcolumn}>
                <div className={styles.artykul}>
                    <h2>Puzzle</h2>
                    <p>
                        Wybierz obrazek, poziom trudności, kliknij start i ciesz się
                        grą!
                    </p>
                </div>
            </aside>
        </main>
    );
};

export default PuzzleGame;
