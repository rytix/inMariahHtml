'use client';
import { useState } from 'react';
import styles from './Faq.module.css';
import { FaChevronDown } from 'react-icons/fa';

interface FaqItem {
  pergunta: string;
  resposta: string;
}

interface FaqProps {
  titulo: string;
  faqs: FaqItem[];
}

export default function Faq({ titulo, faqs }: FaqProps) {
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  return (
    <section className={styles.faq} id='faq'>
      <h2>{titulo}</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
              {faq.pergunta}
              <FaChevronDown
                className={`${styles.chevron} ${faqAberto === index ? styles.rotate : ''}`}
              />
            </button>
            <div className={`${styles.faqAnswer} ${faqAberto === index ? styles.show : ''}`}>
              <p>{faq.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
