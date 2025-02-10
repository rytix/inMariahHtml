import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import HeroHome from '@/components/HeroHome';
import TerapeutaCard from '@/components/TerapeutaCard';

export default function Home() {
  return (
    <main style={{ justifyContent: 'center' }}>
      <HeroHome>

      </HeroHome>
      <div id='team'>
        <div className='team-title'>
          <h2>Nossa equipe de <span className='purple'>terapeutas holísticos</span> <br></br>e especialistas em Frequenciamentos Dimensionais</h2>
        </div>
        <div id='socios'>
          <TerapeutaCard
            nome="Suzi Mariah"
            especialidade="Mentoring Espiritual"
            descricao="Cofundadora do Instituto InMariah, Suzi Mariah realiza o Mentoring Espiritual de Leitura de Energia/Frequenciamento, proporcionando transformação pessoal e espiritual."
            imagem="/images/suzi_mariah.webp"
            linkConsulta="https://wa.me/5511962880678"
            terapias={[
              { nome: "Mentoring Espiritual", descricao: "Leitura profunda de sua situação emocional, profissional, física, mental e espiritual, abrangendo aspectos de vidas passadas, presente, futuro e entre vidas." },
            ]}
          />
          <TerapeutaCard
            nome="Dr. Ronaldo Ramalho"
            especialidade="Terapia de Frequências"
            descricao="Cofundador do Instituto InMariah, Dr. Ronaldo tem mais de 25 anos de experiência ajudando pessoas através das terapias de frequências."
            imagem="/images/ronaldo.webp"
            linkConsulta="https://wa.me/5511962880678"
            terapias={[
            { nome: "Terapia de Biocomunicação", descricao: "Utiliza frequências para equilibrar o corpo e a mente." },
            { nome: "Terapia Quântica", descricao: "Trabalha com energias sutis para harmonizar emoções e pensamentos." },
            { nome: "Harmonia Energética", descricao: "Auxilia na liberação de bloqueios energéticos para promover bem-estar." }
            ]}
          /> 
          <TerapeutaCard
            nome="Rafael Praça"
            especialidade="Terapia dos Propósitos"
            descricao="Cofundador, empreendedor e pesquisador, Rafael transforma vibrações em oportunidades financeiras e empresariais, com suporte emocional e espiritual."
            imagem="/images/rafael_praca.webp"
            linkConsulta="https://wa.me/5511962880678"
            terapias={[
              { nome: "Terapia dos Propósitos", descricao: "Transforma vibrações em oportunidades financeiras e empresariais, oferecendo suporte emocional e espiritual." },
            ]}
          />
        </div>
        <div id='terapeutas'>
          <TerapeutaCard
            nome="Daniela Buffon"
            especialidade="Gestão de Emoções e Tratamento da Causa Raiz"
            descricao="Com mais de 30 anos de experiência ao lado de Suzi Mariah, Daniela auxilia no reequilíbrio das energias utilizando técnicas de regeneração e práticas holísticas."
            imagem="/images/daniela_buffon.webp"
            linkConsulta="https://wa.me/5511962880678"
            terapias={[
              { nome: "Gestão de Emoções", descricao: "Auxilia no reequilíbrio das energias utilizando técnicas de regeneração e práticas holísticas." },
            ]}
          />
          <TerapeutaCard
            nome="Jonathan Peruffo & Vanessa Alessi"
            especialidade="Limpeza Energética de Ambientes"
            descricao="Especialistas em limpeza energética à distância, harmonizam ambientes e pessoas através de técnicas avançadas."
            imagem="/images/jonathan_vanessa.webp"
            linkConsulta="https://wa.me/5511962880678"
            terapias={[
              { nome: "Limpeza Energética de Ambientes", descricao: "Harmonizam ambientes e pessoas através de técnicas avançadas de limpeza energética à distância." },
            ]}
          />
          <TerapeutaCard
            nome="Mi Aguero"
            especialidade="Frequenciamento Animal"
            descricao="Terapeuta, hipnoterapeuta e frequenciadora, Mi Aguero oferece comunicação intuitiva e terapias energéticas para pets."
            imagem="/images/mi.webp"
            linkConsulta="https://wa.me/5511962880678"
            terapias={[
              { nome: "Frequenciamento Animal", descricao: "Oferece comunicação intuitiva e terapias energéticas para pets, utilizando técnicas como o Sistema Arcturiano, Tameana, Reiki e Comunicação Animal." },
            ]}
          />
          <TerapeutaCard
            nome="Alline Correa"
            especialidade="Terapia de Autoabuso"
            descricao="Focada em combater o autoabuso, autodestruição e autopunição, seja consciente ou inconsciente."
            imagem="/images/alline.webp"
            linkConsulta="https://wa.me/5511962880678"
            terapias={[
              { nome: "Terapia de Autoabuso", descricao: "Focada em combater o autoabuso, autodestruição e autopunição, seja consciente ou inconsciente." },
            ]}
          />

        </div>
      </div>
        <Faq
          titulo="Perguntas Frequentes"
            faqs={[
            { pergunta: "O que é o Frequenciamento?", resposta: "O Frequenciamento Dimensional é uma técnica energética que busca resolver questões que afetam negativamente a vida de uma pessoa, ambiente ou até mesmo de um animal." },
            { pergunta: "Como é o Frequenciamento?", resposta: "O Frequenciamento transcende tempo e espaço, proporcionando uma leitura energética abrangente." },
            { pergunta: "Como escolher um terapeuta do InMariah?", resposta: "Nossos terapeutas são especialistas na técnica do Frequenciamento. Você pode conhecer cada terapeuta em nosso site." },
            { pergunta: "Quantas sessões vou precisar?", resposta: "Cada atendimento é único e muitas vezes uma única sessão pode ser suficiente." },
            { pergunta: "Qual a diferença entre o Frequenciamento com o Quantec PRO e com um terapeuta?", resposta: "No atendimento com um terapeuta há uma conversa aberta, enquanto o Quantec PRO realiza leituras automáticas e envios contínuos de frequências." }
          ]}
         />
        <Footer />
    </main>
  );
}
