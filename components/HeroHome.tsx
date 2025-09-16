'use client';
import styles from './HeroHome.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroHome() {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.heroinside}>
        <div className={styles.heroparagraph}>
          <h1>Bem-vindo ao Instituto InMariah</h1>
          <h3>Transformando vidas através de frequências energéticas.</h3>
          <p>
            Terapeutas especializados para uma conexão profunda com as dimensões espirituais e
            emocionais de sua existência. <br />
            Todos comprometidos com a transformação pessoal e coletiva, guiam os clientes em uma
            nova jornada de vida, marcada por harmonia, prosperidade e crescimento espiritual.
          </p>

          <div>
            {/* CTAs principais + dropdown compacto de parcerias */}
            <div className="flex flex-wrap  gap-2 flex-col">
              <Link
                href="https://inmariah.com.br/#team"
                className={styles.button}
                aria-label="Conheça os Terapeutas do Instituto InMariah"
              >
                Conheça os Terapeutas!
              </Link>

                
              {/* Dropdown nativo: simples, acessível e robusto */}
              <details className="relative inline-block">
                <summary
                  className={`${styles.button} cursor-pointer select-none inline-flex items-center gap-2 list-none`}
                  aria-label="Abrir menu de Salas Parceiras"
                >
                  Salas do Quantec
                  
                </summary>

                {/* Painel do menu (inline para máxima compatibilidade) */}
                <div className="mt-2 w-full md:w-[280px] rounded-lg border border-gray-200 bg-white shadow-md p-2 text-sm">
                  <div className="px-2 py-2 text-xs uppercase tracking-wide text-gray-500">
                    Parcerias oficiais
                  </div>
                    <Link
                    href="https://prana.inmariah.com.br"
                    className="block px-2 py-2 rounded-md hover:bg-gray-50 text-gray-800"
                    aria-label="Ver todas as Salas no Prana"
                  >
                    Ver todas as Salas Quantec
                  </Link>
                  <Link
                    href="/paranormal"
                    className="block px-2 py-2 rounded-md hover:bg-gray-50 text-gray-800"
                    aria-label="Ir para Salas Paranormal Experience"
                  >
                    Paranormal Experience • Salas Quantec
                  </Link>

                  <Link
                    href="/alegriadeviver"
                    className="block px-2 py-2 rounded-md hover:bg-gray-50 text-gray-800"
                    aria-label="Ir para Sala Alegria de Viver"
                  >
                    Alegria de Viver • Proteção Espiritual
                  </Link>

                  <hr className="my-2 border-gray-200" />

                  
                </div>
              </details>
            </div>
          </div>
        </div>

        <div className={styles.heroimage}>
          <Image
            src="/images/hero-inmariah.png"
            alt="InMariah Logo"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
}
