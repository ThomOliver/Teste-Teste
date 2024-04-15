import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [buttonPosition, setButtonPosition] = useState({ top: 'initial', left: 'initial', position: 'static' });

  const handleMouseOver = () => {
    // Ajusta o botão "Não" para uma posição aleatória e muda para posição absoluta.
    const newPosition = {
      top: Math.random() * (window.innerHeight - 20),
      left: Math.random() * (window.innerWidth - 20),
      position: 'absolute'
    };
    setButtonPosition(newPosition);
  };

  const redirectToYouTube = () => {
    window.location.href = "https://www.youtube.com";
  };

  return (
    <>
      <Head>
        <title>Participe Hoje</title>
      </Head>
      <div className={styles.container}>
        <h1>Quer participar hoje?</h1>
        <div className={styles.buttonContainer}>
          <button onClick={redirectToYouTube} className={styles.yesButton}>
            Sim
          </button>
          <button
            onMouseOver={handleMouseOver}
            style={{ top: buttonPosition.top, left: buttonPosition.left, position: buttonPosition.position }}
            className={styles.noButton}>
            Não
          </button>
        </div>
      </div>
    </>
  );
}