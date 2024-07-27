import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Modal, Card } from 'semantic-ui-react'

const ModalValores = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Card
        header='Principais valores éticos'
        description='Aqui você irá encontrar todos nossos valores éticos da Ótica e clinica Arco'
      />}
    >
      <Modal.Header>Principais Valores Éticos da Ótica Santo Grau e ARCO Oftalmologia</Modal.Header>
      <Modal.Content  >
        
        <Modal.Description>
          <h4>Honestidade</h4>
          <p>
          Honestidade é um dos princípios que rege a Ótica Santo Grau e ARCO Oftalmologia, para o seu relacionamento com os clientes, funcionários e fornecedores, portanto é inaceitável que, por quaisquer motivos, se roube, fraude ou minta. Assim, é ético no princípio da honestidade:

          Utilizar de forma adequada os recursos materiais, intelectuais e o nome da empresa;
          Recusar presentes, favores e/ou dinheiro para cumprir o seu trabalho ou favorecer a si mesmo ou a alguém;
          Agir em conformidade com as leis em nosso país, no exercício de suas funções.
          </p>

          <h4>Lealdade</h4>
          <p>
          Como empresa, trabalhamos para a prosperidade tanto econômica, quanto de relacionamentos, pois é através desta que cada um obterá sua prosperidade individual. Assim, é ético no princípio de lealdade:

          Contribuir de todas as formas para a prosperidade do grupo;
          Cumprir os princípios da confidencialidade e abster-se de situações de conflitos.
          </p>

          <h4>Observância da Lei</h4>
          <p>
          A Ótica Santo Grau e ARCO Oftalmologia esperam de seus funcionários que todas as relações e atos regulamentados na legislação brasileira sejam cumpridos, sendo considerada conduta inaceitável ter, fora do ambiente de trabalho, atitudes e/ou atividades ilegais.
          </p>

          <h4>Responsabilidade</h4>
          <p>
          As ações dos funcionários da Ótica Santo Grau e ARCO Oftalmologia influenciam no conceito da empresa como um todo, portanto, uma vez assumido seu cargo, o funcionário deve se responsabilizar pessoal, moral e legalmente por todos os seus atos no exercício de suas funções, assim como nos relacionamentos internos e externos, bem como por omissão de qualquer atitude que dele se esperaria. Assim sendo, é ético no princípio da responsabilidade:
            <br/> 
          Agir com pleno conhecimento dos assuntos submetidos à sua consideração, com a mesma diligência que um bom administrador usaria para os próprios bens;
          <br/> 
          Agregar valor ao seu trabalho através da dedicação, criatividade, desenvolvimento pessoal, contribuições estratégicas, sugestões, observância da ética empresarial, participação ativa e criativa na análise crítica e na solução de problemas;
          <br/> 
          Divulgar, orientar e garantir que o Código de Conduta Ética seja compreendido e seguido por todos os funcionários, a fim de manter o clima de ética dentro da empresa;
          <br/> 
          Informar quaisquer atos que julgar impróprios ao conteúdo deste Código.
          </p>

          <h4>Justiça</h4>
          <p>
          Na ÓTICA SANTO GRAU e ARCO Oftalmologia, a justiça, como conceito moral, é fundamental. Esta justiça é construída através de um senso comum que deseja encorajar as ações destinadas “ao bem”, de acordo com a nossa ética, e coibir as ações opostas aos princípios aqui dispostos.
          </p>

          <h4>Idoneidade</h4>
          <p>
          Na ÓTICA SANTO GRAU e ARCO Oftalmologia se entende por idoneidade, toda aptidão legal e moral para exercício das funções, portanto, sempre encorajamos todos os funcionários em busca de sua capacitação moral.
          </p>

          <h4>Bom Senso</h4>
          <p>
          No convívio com seus colegas e no exercício de seu cargo, deve haver por parte dos funcionários, total predominância de equilíbrio emocional, razoabilidade, praticidade, resultando no bem-estar e prosperidade de todos.
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

export default ModalValores
