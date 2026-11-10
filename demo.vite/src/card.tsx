import { useState } from 'react';
import styles from './Card.module.css';

const words = ['Abenteuer', 'Sonne', 'Wolke', 'Katze', 'Blume', 'Stern', 'Wald', 'Lachen', 'ayri'];

type Props = {
    title: string;
    text: string;
    image: string;
}

export default function Card({ title, text, image }: Props) {
    const [randomNumber] = useState(() => Math.floor(Math.random() * 10));
    const [randomWord] = useState(() => words[Math.floor(Math.random() * words.length)]);

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{text}</p>
            <p>Zufallszahl: {randomNumber}</p>
            <p>Zufallswort: {randomWord}</p>
        </div>
    );
}
