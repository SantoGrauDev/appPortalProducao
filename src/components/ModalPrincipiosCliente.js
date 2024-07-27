import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Modal, Card } from 'semantic-ui-react'

const ModalPrincipiosClientes = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Card
        header='Postura do Funcionário no Relacionamento com os Clientes.'
        description='É ético para com os clientes...'
      />}
    >
      <Modal.Header>Principais Valores Éticos da Ótica Santo Grau e ARCO Oftalmologia</Modal.Header>
      <Modal.Content  >
        
        <Modal.Description>
        Cortesia e respeito durante todo o expediente sejam em atendimento de vendas, de pedidos de informações ou ao ouvir reclamações, independente da posição ocupada;
            <br/>
            Buscar soluções que atendam e satisfaçam os interesses dos mesmos;
            <br/>
            Atender os clientes com cortesia e entusiasmo, bem como transmitir informações claras, transparentes e completas;
            <br/>
            Escutar sempre o cliente e dar-lhe um bom tratamento e resposta;
            <br/>
            Elaborar todas as estimativas de possíveis atrasos nas previsões de entregas futuras, de maneira concisa e verdadeira, deixando claras as possíveis variações quando for o caso;
            <br/>
            Sempre cumprir o que prometer, oferecendo, portanto, condições para que possam ser concretizadas, mesmo sobre risco de perder uma venda.
            <br/>

            <strong>É antiético para com os clientes:</strong>
            <br/>

            Transmitir ou divulgar a terceiros (parentes, amigos, colegas de trabalho ou concorrência) quaisquer informações sobre os clientes ou pacientes.
            <br/>
            Falar utilizando gírias, palavrões ou frases inacabadas;
            <br/>
            Oferecer e/ou receber pagamentos, benefícios ou presentes impróprios de pessoas relacionadas ao negócio, mesmo ao custo de se perder a venda ou negociação.
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

export default ModalPrincipiosClientes
