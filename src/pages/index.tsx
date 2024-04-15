import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/home.module.scss';

type ButtonPosition = {
  top: string | number;
  left: string | number;
  position: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky' | undefined;
};

export default function Home() {
  const [buttonPosition, setButtonPosition] = useState<ButtonPosition>({
    top: 'initial',
    left: 'initial',
    position: 'static'
  });

  const handleMouseOver = () => {
    const newPosition: ButtonPosition = {
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
