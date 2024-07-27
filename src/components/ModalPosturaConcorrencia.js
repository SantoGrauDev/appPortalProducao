import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Modal, Card } from 'semantic-ui-react'

const ModalPosturaConcorrencia = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Card
        header='Postura dos Funcionários no Relacionamento com a Concorrência'
        description='É ético para com a concorrência'
      />}
    >
      <Modal.Header>Postura dos Funcionários no Relacionamento com a Concorrência:</Modal.Header>
      <Modal.Content  >
        
        <Modal.Description>
        Respeitar as empresas concorrentes na mesma medida em que esta empresa espera ser tratada;
        <br/>
        No caso de algum cliente e/ou fornecedor falar ou, sobretudo, escrever críticas a concorrentes, deve-se ouvi-los com o princípio da tolerância e se abster de comentários (sobretudo em comunicações não-verbais);
        <br/>

        Na ÓTICA SANTO GRAU e ARCO Oftalmologia, todo o relacionamento com fornecedores deve ser feito através do escritório da empresa, 	fazendo com que todas as solicitações, 	pedidos, trocas e reclamações fiquem centralizadas em um único ambiente.
        <br/>


        É antiético para com a concorrência:
        <br/>


Desqualificar diante de clientes ou fornecedores as empresas concorrentes;
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

export default ModalPosturaConcorrencia
