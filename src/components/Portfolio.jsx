import styles from './Portfolio.module.css';

function Portfolio() {
    return (
        <section className={styles.portfolio} id="projects">
            <div className={styles.container}>
                <h2 className={styles.title}>Мои Проекты</h2>
                <p className={styles.subtitle}>Посмотрите некоторые из моих работ</p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h1>Мы сделали эту практику без Копайлота</h1>
                        <p>Гип гип ура!</p>
                        <p>ШНЕЛЕ</p>
                        <button>Посмотреть</button>
                    </div>
                    <div className={styles.card}>
                        <h1>Клеш рояль</h1>
                        <p>МегаНайт</p>
                        <p>ШНЕЛЕ</p>
                        <button>Посмотреть</button>
                    </div>
                    <div className={styles.card}>
                        <h1>Календарь</h1>
                        <p>На реакт</p>
                        <p>ШНЕЛЕ</p>
                        <button>Посмотреть</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
