'use client';
import styles from './HeroHome.module.css';
import Image from 'next/image';

export default function HeroHome (){
    return (
        <div id='hero' className={styles.hero}>
            <div className={styles.heroinside}>
                <div className={styles.heroparagraph}>
                    <h1>Bem-vindo ao Instituto InMariah</h1>
                    <h3>Transformando vidas através de frequências energéticas.</h3>
                    <p>Terapeutas especializados para uma conexão profunda com as dimensões espirituais e emocionais de sua existência. <br></br>

                    Todos comprometidos com a transformação pessoal e coletiva, guiam os clientes em uma nova jornada de vida, marcada por harmonia, prosperidade e crescimento espiritual. </p>
                    <div>
                        <a href="https://inmariah.com.br/#team" className={styles.button}>Conheça os Terapeutas!</a>

                        <p>Salas Coletivas do Biocomunicador em manutenção!</p>

                    </div>
                </div>
                <div className={styles.heroimage}>
                    <Image src="/images/hero-inmariah.png" alt="InMariah Logo" width={500} height={500} />
                </div>
            </div>
        </div>
    )}