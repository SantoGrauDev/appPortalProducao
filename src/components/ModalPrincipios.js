import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Modal, Card } from 'semantic-ui-react'

const ModalPrincipios = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Card
        header='Principios básicos de relacionamento'
        description='Postura do Funcionário em Relação aos Colegas e ao Ambiente de Trabalho'
      />}
    >
      <Modal.Header>Postura do Funcionário em Relação aos Colegas e ao Ambiente de Trabalho</Modal.Header>
      <Modal.Content  >
        
        <Modal.Description>
          <p>            
          É ético para com os colegas de trabalho:
          <br/>

          Cortesia e respeito mútuo durante todo o expediente, independente da posição ocupada, procurando dispensar a todos, tratamento igualitário em situações similares; <br/>
            Ser transparente e honesto, bem como respeitar os colegas de trabalho, agindo com objetividade, clareza e franqueza na comunicação;
            <br/>
            Trabalhar em equipe, cooperando mutuamente com os seus membros;
            <br/>
            Ensinar ou ajudar um funcionário que tem uma dificuldade em uma determinada tarefa, desde que domine o assunto;
            <br/>
            Elogiar tudo o que achar interessante, louvável e bem-feito, no momento oportuno.
            <br/>

            É antiético para com os colegas de trabalho:
            <br/>

            Ignorar ou fazer alguma preferência no ambiente de trabalho, apesar das afinidades pessoais;
            <br/>
            Discriminar a crença religiosa, cor de pele, qualificação e formatação profissional, preferência sexual, estado civil, classe social ou incapacidade física ou mental de qualquer funcionário;
            <br/>
            Fazer ou colaborar com brincadeiras pejorativas, apelidos ou qualquer atitude que possa provocar revolta ou expor o funcionário a situações constrangedoras ou de stress emocional;
            <br/>

            Empregar o tempo oficial de trabalho para atividades que não sejam as requeridas pelos seus deveres, ou solicitar a outrem que o faça;
            <br/>
            Utilizar os bens da empresa para fins particulares e/ou propósitos que não sejam aqueles para os quais tenham sido destinados;
            <br/>
            Expor a “terceiros” (parentes, amigos, colegas de trabalho) quaisquer informações (médicas inclusive) sobre funcionários, pacientes, clientes, ou qualquer pessoa do grupo Ótica Santo Grau e ARCO Oftalmologia.
            <br/>
            
          </p>
          
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

export default ModalPrincipios
