import Footer from '@/components/Footer';
import HeroHome from '@/components/HeroHome';
import WhatsappButton from '@/components/WhatsappButton';

export default function Home() {
  return (
    <main style={{ justifyContent: 'center' }}>
      <HeroHome>

      </HeroHome>
      <div id='team'>
        <div className='team-title politicas-title'>
          <h2>Termos de<span className='purple'> Uso</span></h2>
        </div>
      </div>
      <div id='politicas'>
        <p><strong>Última atualização:</strong> 26 de fevereiro de 2025.</p>

        <p>Bem-vindo ao site <strong>InMariah.com.br</strong>. Ao utilizar nossos serviços, você concorda com os presentes Termos de Uso. Caso não concorde com qualquer parte deste documento, recomendamos que não utilize nossos serviços.</p>

        <h3>1. Objetivo</h3>
        <p>O site InMariah.com.br é uma plataforma online que oferece serviços de atendimento holístico através do nosso Instituto. Os serviços incluem consultas, produtos e ferramentas voltadas para o bem-estar e equilíbrio energético.</p>

        <h3>2. Cadastro e Acesso</h3>
        <p>Para acessar determinados serviços, pode ser necessário criar uma conta e fornecer informações precisas e atualizadas. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.</p>
        <p>O cadastro e uso da plataforma são permitidos apenas para maiores de 18 anos ou menores acompanhados de um responsável legal.</p>

        <h3>3. Uso dos Serviços</h3>
        <p>Ao utilizar os serviços da InMariah, você concorda em:</p>
        <ul>
            <li>Não utilizar o site para fins ilícitos ou prejudiciais.</li>
            <li>Fornecer informações verdadeiras e atualizadas.</li>
            <li>Não compartilhar sua conta com terceiros.</li>
            <li>Respeitar os direitos de propriedade intelectual do Instituto e de terceiros.</li>
        </ul>

        <h3>4. Compras e Pagamentos</h3>
        <p>Ao adquirir produtos ou serviços no site, você concorda com os preços e condições de pagamento informados no momento da compra. Reservamo-nos o direito de modificar valores e condições a qualquer momento.</p>

        <h3>5. Cancelamento e Reembolso</h3>
        <p>Os serviços e produtos adquiridos podem estar sujeitos a políticas de cancelamento e reembolso. Recomendamos que consulte as condições específicas no momento da compra ou entre em contato com nossa equipe para mais informações.</p>

        <h3>6. Propriedade Intelectual</h3>
        <p>Todo o conteúdo disponível no site, incluindo textos, imagens, logotipos e materiais interativos, é protegido por direitos autorais e pertence à InMariah ou a seus licenciantes. O uso indevido desse conteúdo poderá resultar em penalidades legais.</p>

        <h3>7. Limitação de Responsabilidade</h3>
        <p>O Instituto InMariah se compromete a oferecer serviços de qualidade, porém, não nos responsabilizamos por:</p>
        <ul>
            <li>Eventuais falhas técnicas que possam comprometer a experiência do usuário.</li>
            <li>Interpretação pessoal dos serviços prestados.</li>
            <li>Uso indevido das informações fornecidas na plataforma.</li>
        </ul>

        <h3>8. Alterações nos Termos de Uso</h3>
        <p>Podemos modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. Recomendamos que você revise este documento regularmente.</p>


      </div>
      <Footer />
      <WhatsappButton />
    </main>
  );
}
