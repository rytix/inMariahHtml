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
          <h2>Politicas de<span className='purple'> Privacidade</span></h2>
        </div>
      </div>
      <div id='politicas'>
          <p><strong>Última atualização:</strong> 26 de fevereiro de 2025.</p>

          <p>A sua privacidade é uma prioridade para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nossos serviços no site <strong>InMariah.com.br</strong>.</p>

          <p>Ao acessar nosso site e utilizar nossos serviços, você concorda com as práticas descritas nesta política. Caso tenha dúvidas, entre em contato conosco através dos canais de atendimento disponíveis.</p>

          <h3>1. Dados Coletados e Finalidade</h3>

          <h3>1.1. Informações Coletadas</h3>
          <p>Podemos coletar as seguintes informações pessoais ao longo da sua experiência em nossa plataforma:</p>
          <ul>
              <li><strong>Autenticação via Google (OAuth):</strong> Nome, e-mail e foto de perfil (caso autorizado).</li>
              <li><strong>Dados Pessoais para Compra:</strong> Nome completo, data de nascimento, e-mail e outras informações necessárias para processamento do atendimento.</li>
              <li><strong>Foto do cliente:</strong> Utilizada exclusivamente para tratamentos dentro do Instituto, sendo armazenada internamente na ficha do cliente.</li>
          </ul>

          <h3>1.2. Finalidade da Coleta</h3>
          <p>Os dados coletados são utilizados para:</p>
          <ul>
              <li>Viabilizar a compra e utilização dos serviços oferecidos pelo nosso Instituto de atendimento holístico.</li>
              <li>Personalizar o atendimento de acordo com o perfil do cliente.</li>
              <li>Garantir a segurança e a confiabilidade do serviço.</li>
          </ul>
          <p>Se você fornecer informações de terceiros (como nome ou foto de outra pessoa), você declara ter a autorização necessária para utilizá-las.</p>

          <h3>2. Compartilhamento de Dados</h3>
          <p>Não compartilhamos, vendemos ou divulgamos seus dados pessoais com terceiros, exceto:</p>
          <ul>
              <li>Se exigido por lei ou por ordem judicial.</li>
              <li>Quando necessário para cumprir obrigações legais e regulatórias.</li>
              <li>Com prestadores de serviço essenciais para a operação da plataforma, sempre garantindo a segurança e confidencialidade dos dados.</li>
          </ul>

          <h3>3. Armazenamento e Segurança dos Dados</h3>
          <p>Os dados coletados são armazenados em sistemas internos com medidas rigorosas de segurança, incluindo:</p>
          <ul>
              <li><strong>Criptografia e Proteção de Acesso:</strong> Somente profissionais autorizados têm acesso às informações.</li>
              <li><strong>Controle de Permissões:</strong> Garantimos que os dados sejam utilizados apenas para os fins descritos nesta política.</li>
              <li><strong>Monitoramento e Auditoria:</strong> Implementamos práticas de segurança para evitar acessos não autorizados, vazamentos ou manipulação indevida dos dados.</li>
          </ul>
          <p>A retenção dos dados será pelo período necessário para o cumprimento das finalidades para as quais foram coletados, respeitando prazos legais aplicáveis.</p>

          <h3>4. Direitos do Usuário</h3>
          <p>Conforme as leis de proteção de dados vigentes, você tem o direito de:</p>
          <ul>
              <li><strong>Acessar seus dados</strong> e entender como são utilizados.</li>
              <li><strong>Corrigir informações</strong> que estejam incorretas ou desatualizadas.</li>
              <li><strong>Solicitar a exclusão</strong> dos seus dados, quando aplicável.</li>
              <li><strong>Revogar consentimentos</strong> concedidos anteriormente para o tratamento de seus dados.</li>
          </ul>
          <p>Para exercer seus direitos ou esclarecer dúvidas, entre em contato conosco pelos canais de atendimento.</p>

          <h3>5. Uso de Cookies e Tecnologias Semelhantes</h3>
          <p>Utilizamos cookies para melhorar a sua experiência em nosso site. Esses arquivos permitem funcionalidades como:</p>
          <ul>
              <li>Personalização da navegação.</li>
              <li>Registro de preferências do usuário.</li>
              <li>Análise de desempenho da plataforma.</li>
          </ul>
          <p>Você pode gerenciar as configurações de cookies pelo seu navegador a qualquer momento.</p>

          <h3>6. Alterações na Política de Privacidade</h3>
          <p>Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nos nossos serviços ou nas legislações aplicáveis. Recomendamos que você revise este documento regularmente.</p>
          <p>Caso façamos alterações significativas, notificaremos os usuários por e-mail ou pelo próprio site.</p>

          <h3>7. Contato</h3>
          <p>Se tiver dúvidas ou precisar de mais informações sobre o tratamento dos seus dados pessoais, entre em contato conosco:</p>

          <p>
              📧 <strong>E-mail:</strong> <a href="mailto:contato@reflexoesdouniversalismo.com.br">contato@reflexoesdouniversalismo.com.br</a><br></br>
              📞 <strong>Telefone:</strong> <a href="tel:+5511962880678">+55 11 96288-0678</a><br></br>
              🌍 <strong>Site:</strong> <a href="https://www.InMariah.com.br" target="_blank">www.InMariah.com.br</a>
          </p>

          <p>Ao continuar utilizando nossos serviços, você concorda com os termos desta Política de Privacidade.</p>

      </div>
      
      <Footer />
      <WhatsappButton />
    </main>
  );
}
