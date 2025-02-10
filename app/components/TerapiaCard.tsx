'use client';
import styles from './TerapiaCard.module.css';
import Image from 'next/image';

interface TerapiaCardProps {
  titulo: string;
  terapeuta: string;
  descricao: string;
  imagem: string;
  link: string;
}

export default function TerapiaCard({ titulo, terapeuta, descricao, imagem, link }: TerapiaCardProps) {
  return (
    <div className={styles.card}>
        <div>
            <Image className={styles.image} src={imagem} width={500} height={500} alt={titulo} />
        </div>
        <div>

            <h2 className={styles.title}>{titulo}</h2>
            <p className={styles.terapeuta}>{terapeuta}</p>
            <p className={styles.mb30}>{descricao}</p>
            
            <a href={link} className={styles.button}>Saiba mais sobre esta terapia</a>
        </div>
    </div>
  );
}
