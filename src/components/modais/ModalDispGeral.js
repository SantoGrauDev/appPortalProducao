import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Modal, Card } from 'semantic-ui-react'

const ModalDispGeral = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
      <Card className='{styles.CardContainer}'
        header='Disposições Gerais'
        description='Aqui você irá encontrar normas sobre uso de celular, compartilhamento de informações institucionais, entre outros.'
      />}
    >
      <Modal.Header>Postura dos Funcionários no Relacionamento com a Concorrência:</Modal.Header>
      <Modal.Content  >
        
        <Modal.Description>
        <strong>Confidencialidade das Informações</strong>

Informações confidenciais são patrimônios da empresa. Nenhum funcionário deve revelar nenhum tipo de informação fora da organização sob quaisquer circunstâncias, exceção feita a alguma exigência legal.
<br/>
Todas as informações que são tratadas dentro da empresa são consideradas confidenciais, tais como reuniões, circulares, implantação de sistemas, etc.;
<br/>
Não é apropriado discutir assuntos confidenciais da empresa com pessoas não autorizadas, nem mesmo com parentes e/ou amigos que inadvertidamente, nem mesmo repassar informações. Evitar comentários sobre cifras, ganhos e perdas com pessoas correlacionadas ao assunto.
<hr/>


<strong>Uso do Telefone</strong>
<br/>
O telefone é para a empresa, um importantíssimo instrumento de trabalho, portanto, é preciso utilizá-lo com certos critérios e regras de polidez para que ele seja um instrumento a nosso favor a não ao contrário, o que acontece com freqüência quando mal-utilizado.
<br/>

Use somente para fins de trabalho. Por princípios de justiça e bom-senso, não será censurado o funcionário que fizer uso do telefone para situações particulares relevantes;
<br/>
Ao usar o telefone para resolver algum problema pessoal, observe a discrição para que o ambiente de trabalho não tenha que ficar participante de situações íntimas, delicadas ou meramente de cunho pessoal;
<br/>
Quando um cliente passar a ser descortês ou claramente ofensivo, de forma alguma responda da mesma forma e termine a conversação. Nestes casos, o funcionário deve sempre ouvir o cliente e procurar entendê-lo melhor, para poder ajudá-lo.
É expressamente proibido deixar celulares nas gavetas das lojas ou da clínica, assim como atender ligações pessoais na frente de clientes ou pacientes;
<br/>
O celular da empresa é para uso exclusivo da empresa, sendo feito mensalmente um controle dos minutos utilizados, assim, para que haja uma utilização mais eficaz, utilizamos os seguintes critérios:
<br/>


Ligações de Fixo para Fixo
<br/>
Ligações de Celular para Celular
<hr/>


<strong>Ética Eletrônica</strong>
<br/>

A forma mais corrente de comunicação na empresa é o WHATSAPP. Diferentemente de uma comunicação verbal, o Whats gera um ar permanente na conversação. Qualquer mensagem que você envia pode ser retransmitida para outras pessoas. Portanto, como as comunicações escritas não têm os mesmos recursos das verbais (como tom de voz, postura, fisionomia), deve-se ter muita precaução ao enviá-las. Sugere-se que, no caso de divergências entre quaisquer funcionários, de quaisquer posições hierárquicas, para se evitar problemas que os poucos recursos da língua escrita oferecem, as conversas devem ser concluídas pessoalmente.
<br/>

O funcionário deve ter o máximo de certeza que a mensagem enviada não seja considerada abusiva, obscena, ofensiva, rude ou preconceituosa;
<br/>
Qualquer funcionário a quem se tenha dado o direito de se conectar a rede deve fazê-lo para uso exclusivo do seu trabalho. É proibido fazer downloads de qualquer arquivo ou programa ou músicas que não seja apropriado para uso do trabalho, ou por solicitação da empresa;
<br/>
É vedada a utilização da caixa postal da empresa (servidores de e-mail) e o Whatsapp para fins pessoais;
<br/>
Não podem ser acessadas salas, chats, Facebook pessoal ou qualquer outro tipo de “bate-papo” via internet, exceto o programa de mensagens padronizado ou autorizado pela empresa, quando usado exclusivamente para os interesses da mesma;
<br/>
Abrir qualquer site que não seja para uso e interesse exclusivo da função ocupada;
<br/>
É vedada a navegação e o uso de material pornográfico entre os e-mails e Whats da empresa, tanto recebimento como envio, bem como o acesso a páginas da internet com teor pornográfico;
<br/>
É vedada a utilização de computadores alheios para obtenção de senhas e informações pessoais.
<br/>

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Fechar <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalDispGeral
