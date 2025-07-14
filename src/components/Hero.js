import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Wonseok</h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">Musicology PhD | Researcher, Educator & Performer</p>
      </div>
    </section>
  );
}
