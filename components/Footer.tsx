'use client';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      {/* Seção de Contato */}
      <section className={styles.contactSection}>
        <h3 id='sac'>Ficou com alguma dúvida?</h3>
        <p>Entre em contato com nosso time de atendimento!</p>
        <div className={styles.inlineSocial}>
          <Link href="https://www.instagram.com/institutoinmariah/" target="_blank">
            <Image src="/images/instagram.webp" alt="Instagram" width={40} height={40} />
          </Link>
          <Link href="https://wa.me/5511962880678" target="_blank">
            <Image src="/images/whatsapp.webp" alt="WhatsApp" width={40} height={40} />
          </Link>
          <span>(11) 96288-0678</span>
        </div>
      </section>

      {/* Seção Principal do Footer */}
      <section className={styles.logoSection}>
        <Link href="#hero">
          <Image src="/images/logo.webp" alt="InMariah Logo" width={150} height={50} />
        </Link>
      </section>

      <section className={styles.links}>
        <ul>
          <li><Link href="#hero">Home</Link></li>
          <li><Link href="#team">Terapeutas</Link></li>
          <li><Link href="#sac">Contato</Link></li>
        </ul>
      </section>

      <div className={styles.divisor}></div>

      <section className={styles.trademark}>
        <p>Instituto InMariah © <span>{year}</span>. Todos os direitos reservados.<br></br>
        CNPJ: 54.593.238/0001-05</p>
      </section>
    </footer>
  );
}
