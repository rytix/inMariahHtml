'use client';
import { useState } from 'react';
import styles from './TerapeutaCard.module.css';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

interface Terapia {
  nome: string;
  descricao: string;
}

interface TerapeutaCardProps {
  nome: string;
  especialidade: string;
  descricao: string;
  imagem: string;
  linkConsulta: string;
  terapias: Terapia[];
}

export default function TerapeutaCard({
  nome,
  especialidade,
  descricao,
  imagem,
  linkConsulta,
  terapias,
}: TerapeutaCardProps) {
  const [terapiaAtiva, setTerapiaAtiva] = useState<number | null>(null);

  const toggleTerapia = (index: number) => {
    setTerapiaAtiva(terapiaAtiva === index ? null : index);
  };

  // Criando mensagem personalizada
  const mensagem = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${especialidade} com ${nome}.`);
  const linkWhatsApp = `${linkConsulta}?text=${mensagem}`;

  return (
    <div className={styles.card}>
      <Image className={styles.image} src={imagem} width={500} height={500} alt={nome} />

      <h3 className={styles.title}>{nome}</h3>
      <p className={`${styles.mb30} ${styles.subtitle}`}>{especialidade}</p>
      <p className={styles.mb30}>{descricao}</p>

      <div className={styles.terapias}>
        {terapias.map((terapia, index) => (
          <div key={index} className={styles.terapiaItem}>
            <button className={styles.terapiaButton} onClick={() => toggleTerapia(index)}>
              {terapia.nome}
              <FaChevronDown className={`${styles.chevron} ${terapiaAtiva === index ? styles.rotate : ''}`} />
            </button>
            <div className={`${styles.terapiaDescricao} ${terapiaAtiva === index ? styles.show : ''}`}>
              <p>{terapia.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      <a href={linkWhatsApp} className={styles.button} target="_blank">
        Entrar em Contato
      </a>
    </div>
  );
}
