'use client';
import styles from './WhatsappButton.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function WhatsappButton() {
  const telefone = '5511962880678'; // Número do WhatsApp
  const mensagem = encodeURIComponent("Olá, gostaria de mais informações sobre os terapeutas e terapias, por favor!"); // Mensagem automática

  return (
    <Link
      href={`https://wa.me/${telefone}?text=${mensagem}`}
      target="_blank"
      className={styles.whatsappButton}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Image
        src="/images/whatsapp.webp"
        alt="WhatsApp"
        width={60}
        height={60}
        priority
      />
    </Link>
  );
}
