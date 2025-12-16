import React, { useState } from "react";
import styles from './About.module.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    return (
        <>
            <h1 className={styles.modal}>О нас</h1>
            <h1 className={styles.modal}>Захаров Артём Пфейфер Иван</h1>
            <button className={styles.knopka } onClick={open}>Открыть модалку</button>

            {isOpen && (
                <div className={styles.modal1}>
                    <div className={styles.modaloverlay} onClick={close}>
                        <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
                            <h2>Мы</h2>
                            <p>Ничего</p>
                            <button onClick={close}>Закрыть</button>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    );
}

export default App;
