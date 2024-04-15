import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  // Alterar a tipagem para aceitar string ou number.
  const [buttonPosition, setButtonPosition] = useState<{ top: string | number; left: string | number; position: string }>({
    top: 'initial',
    left: 'initial',
    position: 'static'
  });

  const handleMouseOver = () => {
    // Gerar nova posição aleatória para o botão "Não"
    const newPosition = {
      top: Math.random() * (window.innerHeight - 20),
      left: Math.random() * (window.innerWidth - 20),
      position: 'absolute'
    };
    setButtonPosition(newPosition);
  };

  const redirectToYouTube = () => {
    window.location.href = "https://www.youtube.com/watch?v=Zn28zfPwjus";
  };

  return (
    <>
      <Head>
        <title>Cuzinho</title>
      </Head>
      <div className={styles.container}>
        <h1>Cuzinho hoje?</h1>
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
