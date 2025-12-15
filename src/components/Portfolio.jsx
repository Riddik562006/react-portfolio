import styles from './Portfolio.module.css';

function Portfolio() {
    return (
        <section className={styles.portfolio} id="projects">
            <div className={styles.container}>
                <h2 className={styles.title}>Мои Проекты</h2>
                <p className={styles.subtitle}>Посмотрите некоторые из моих работ</p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>E-Commerce Platform</h3>
                        <p className={styles.cardDescription}>Полнофункциональная платформа электронной коммерции с каталогом товаров и корзиной покупок</p>
                        <div className={styles.techStack}>
                            <span className={styles.techTag}>React</span>
                            <span className={styles.techTag}>Node.js</span>
                            <span className={styles.techTag}>MongoDB</span>
                        </div>
                        <a href="#" className={styles.cardLink}>Посмотреть →</a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Weather App</h3>
                        <p className={styles.cardDescription}>Приложение для отслеживания погоды в реальном времени с прогнозом на неделю</p>
                        <div className={styles.techStack}>
                            <span className={styles.techTag}>React</span>
                            <span className={styles.techTag}>API</span>
                            <span className={styles.techTag}>CSS</span>
                        </div>
                        <a href="#" className={styles.cardLink}>Посмотреть →</a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Task Manager</h3>
                        <p className={styles.cardDescription}>Приложение для управления задачами с функциями фильтрации и сортировки</p>
                        <div className={styles.techStack}>
                            <span className={styles.techTag}>React</span>
                            <span className={styles.techTag}>Redux</span>
                            <span className={styles.techTag}>LocalStorage</span>
                        </div>
                        <a href="#" className={styles.cardLink}>Посмотреть →</a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Social Media Dashboard</h3>
                        <p className={styles.cardDescription}>Панель управления социальными сетями с аналитикой и статистикой</p>
                        <div className={styles.techStack}>
                            <span className={styles.techTag}>React</span>
                            <span className={styles.techTag}>Firebase</span>
                            <span className={styles.techTag}>Chart.js</span>
                        </div>
                        <a href="#" className={styles.cardLink}>Посмотреть →</a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Blog Platform</h3>
                        <p className={styles.cardDescription}>Платформа для создания и публикации статей с системой комментариев</p>
                        <div className={styles.techStack}>
                            <span className={styles.techTag}>React</span>
                            <span className={styles.techTag}>Express</span>
                            <span className={styles.techTag}>PostgreSQL</span>
                        </div>
                        <a href="#" className={styles.cardLink}>Посмотреть →</a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Music Player</h3>
                        <p className={styles.cardDescription}>Музыкальный плеер с поддержкой плейлистов и рекомендациями</p>
                        <div className={styles.techStack}>
                            <span className={styles.techTag}>React</span>
                            <span className={styles.techTag}>Web Audio API</span>
                            <span className={styles.techTag}>Spotify API</span>
                        </div>
                        <a href="#" className={styles.cardLink}>Посмотреть →</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
