import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Modal, Card } from 'semantic-ui-react'

const RegulamentoInterno = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
      <Card className='{styles.CardContainer}'
        header='Regulamento interno de trabalho'
        description='Aqui você irá encontrar toda normas internas como: integração, admissão, deveres e obrigações, etc...'
      />}
    >
      <Modal.Header>Regulamento interno de trabalho</Modal.Header>
      <Modal.Content  >
        
        <Modal.Description>
        

    1. Integração no Contrato Individual de Trabalho<br/><br/>
       

       Art. 1º - O presente Regulamento integra o contrato individual de trabalho. A ação reguladora nele contida estende-se a todos os empregados, sem distinção hierárquica, e supre os princípios de direitos contidos na Consolidação das Leis do Trabalho.<br/>
       
       § Único – A obrigatoriedade de seu cumprimento perdura por todo o tempo de duração do Contrato de Trabalho, não sendo permitido, a ninguém, alegar seu desconhecimento.<hr/>
       
       
       
           2. Admissão<br/><br/>
              
       
       Art. 2º - A admissão de empregado condiciona-se a exame de seleção técnica e médica e mediante apresentação dos documentos exigidos, em prazo fixado.<br/>
       
       
       Art. 3º - A admissão só se efetiva após período experimental de 90 dias, conforme cargo, ressalvado o direito à prorrogação.<br/>
       
       
       Art. 4º - Casos de readmissão serão analisados e aprovados pela Diretoria respectiva.<hr/>
       
       
       
           3. Deveres, Obrigações e Responsabilidades dos Empregados<br/><br/>
              
       
       Art. 5º - Todo empregado deve:<br/>
       
       
           A. Cumprir os compromissos expressamente assumidos no Contrato Individual de Trabalho, com total zelo, atenção e competência profissional;<br/>
              
           B. Obedecer às ordens e instruções emanadas de superiores hierárquicos;<br/>
              
           C. Cumprir e fazer cumprir todas as Normas e Procedimentos da Empresa, tais como comunicados, circulares, etc;<br/>
              
           D. Zelar pela ordem e asseio do local de trabalho, para tanto, mensalmente é efetuada uma auditoria para controle da qualidade e organização de cada estabelecimento;<br/>
              
           E. Zelar pela boa conservação das instalações, equipamentos, máquinas e produtos, comunicando as anormalidades notadas, fornecendo “chek-list” mensal à Diretoria.<br/>
              
           F. Todos os funcionários da empresa devem usar uniforme determinado pela empresa, sendo fornecido da seguinte forma:<br/>
              
       
           • A empresa fornece o Uniforme inicial para funcionários da loja e Clínica: (compondo 02 blusinhas, 01 calça, 01 blazer, 01 colete, 01 vestido e 01 lenço), e para o e-Commerce (Compondo 3 Blusinhas), os quais devem ser devolvidos à empresa em caso de desligamento; a reposição é feita em média a cada 18 meses.<br/>
             
           • O funcionário fica encarregado de adquirir por sua conta os uniformes adicionais conforme se fizer necessário;<br/>
             
           • Todos os uniformes ficam sob total responsabilidade de seu usuário, tanto a limpeza quanto a conservação do mesmo;<br/>
             
       
           G. Prestar toda a colaboração à empresa e aos colegas, cultivando o espírito de comunhão e mútua fidelidade na realização do serviço em prol dos objetivos da empresa;<br/>
              
           H. Informar à Administração qualquer modificação em seus dados pessoais, tais como estado civil, militar, aumento ou redução de pessoas na família, eventual mudança de residência ou telefone, etc;<br/>
       
           I. Informar semanalmente à Administração, a agenda de trabalho da semana corrente, tais como: alteração de loja, acuidades ou eventos da empresa, folga, reuniões, treinamentos, inventários, ou qualquer compromisso que esteja dentro do horário de trabalho e fuja da rotina diária;<br/>
              
           J. Respeitar a honra, boa fama e integridade física de todas as pessoas com quem mantiver contato por motivo de emprego;<br/>
              
           K. Responder por prejuízos causados à empresa por dolo ou culpa (negligência ou imprudência), caracterizando-se a responsabilidades por:<br/>
              
       
           • Sonegação de valores ou objetos desaparecidos;<br/>
             
           • Danos e avarias em produtos ou equipamentos;<br/>
             
           • Erro doloso de cálculo contra a empresa, tais como: caixas, orçamentos, comissão e todos os erros que envolvam valores;<br/>
             
       
       § 1º - A responsabilidade administrativa não exime o funcionário da responsabilidade civil ou criminal;<br/>
       
       
       § 2º - As indenizações e reposições por prejuízos causados serão descontadas do salário do funcionário.<hr/>
       
       
       
               4. Horário de Trabalho<br/><br/>
                  
       
       Art. 6º - O horário de trabalho estabelecido deve ser seguido rigorosamente por todos os empregados, podendo, entretanto, ser alterado conforme necessidade de serviço.<br/>
       
       § Único – Os horários praticados na empresa são os seguintes:<hr/>
       
       
           • Administração:<br/>
             
       
       De 2ª a 6ª Feira – das 08h00 às 18h horas<br/>
       
       Sábados, Domingos e Feriados – Livres.<hr/>
       
       
       
           • Loja SA – Galão:<br/>
             
       
       Trainee:<br/>
       
       De 2ª a 6ª Feira – das 09h00 às 18h00 horas<br/>
       Sábado – das 09h00 às 13h00 horas (sem hora de almoço)<br/>
       Domingos e Feriados – Livres.<hr/>
       
       Vendedor (a) 01:<br/>
       De 2ª a 6ª Feira – das 08h30 às 17h00 horas<br/>
       Sábado – das 09h00 às 17h00 horas<br/>
       Domingos e Feriados – Livres.<hr/>
       
       Vendedor (a) 02:<br/>
       De 2ª a 6ª Feira – das 09h00 às 17h30 horas<br/>
       Sábado – das 09h00 às 17h00 horas<br/>
       Domingos e Feriados – Livres.<hr/>
       
       
       
       Supervisor (a):<br/>
       De 2ª a 6ª Feira – das 09h30 às 18h30 horas<br/>
       Sábado – das 08h30 às 17h00 horas<br/>
       Domingos e Feriados – Livres.<hr/>
       
       
           • Loja SA – Aggio:<br/>
       
       Trainee:<br/>
       De 2ª a 6ª Feira – das 08h00 às 17h00 horas<br/>
       Sábado – das 08h00 às 12h00 horas (sem hora de almoço)<br/>
       Domingos e Feriados – Livres.<hr/>
       
       Vendedor (a) 01:<br/>
       De 2ª a 6ª Feira – das 08h00 às 17h00 horas<br/>
       Sábado – das 08h00 às 17h00 horas<br/>
       Domingos e Feriados – Livres.<hr/>
       
       
       Vendedor (a) 02:<br/>
       De 2ª a 6ª Feira – das 08h30 às 17h30 horas<br/>
       Sábado – das 08h00 às 17h00 horas<br/>
       Domingos e Feriados – Livres.<hr/>
       
       
       Vendedor (a) 03:<br/>
       De 2ª a 6ª Feira – das 09h00 às 18h horas<br/>
       Sábado – das 08h00 às 17h00 horas<br/>
       Domingos e Feriados – Livres.<hr/>
       
       
       
       Domingos e Feriados – Das 14h00 às 20h00 com revezamento entre vendedores (as) 01, 02 e 03.<br/>
       Folgas – Todas as 2ª Feiras (se trabalhou no domingo)<hr/>
       
       
           • E-Commerce:<br/><br/>
       
       Equipe 1<br/>
       De 2ª a Sábado – das 09h00 às 15h20 horas<br/>
       (20min de almoço, e intervalo de 10min a cada 90 min trabalhados)<br/>
       Domingos e Feriados – á Combinar conforme necessidade da empresa.<br/>
       
       Equipe 2<br/>
       De 2ª a Sábado – das 15h30 às 21h50 horas<br/>
       (20min de almoço, e intervalo de 10min a cada 90 min trabalhados)<br/>
       Domingos e Feriados – á Combinar conforme necessidade da empresa<br/>
       
       Equipe 3:<br/>
       De Domingo a Sexta – das 09h00 às 15h20 horas<br/>
       (20min de almoço, e intervalo de 10min a cada 90 min trabalhados).<br/>
       A Cada 2 domingos trabalhados, será concedido um Domingo de Folga.<br/>
       Sábados e Feriados – á Combinar conforme necessidade da empresa.<br/>
       
       Equipe 4:<br/>
       De Domingo a Sexta – das 15h30 às 21h50 horas<br/>
       (20min de almoço, e intervalo de 10min a cada 90 min trabalhados).<br/>
       A Cada 2 domingos trabalhados, será concedido um Domingo de Folga.<br/>
       Sábados e Feriados – á Combinar conforme necessidade da empresa.<br/>
       
       § Único – As horas trabalhadas a mais serão estabelecidas e devidamente<br/> compensadas conforme departamento Administrativo.<hr/>
       
       
           • Clínica:<br/><br/>
       
       Recepcionista 01:<br/>
       De 2ª a 6ª Feira – das 08h00 às 17h00 horas<br/>
       Sábado – das 08h00 às 15h00 horas <br/>
       Domingos e Feriados – Livres.<br/>
       
       Recepcionista 02:<br/>
       De 2ª a 6ª Feira – das 09h00 às 18h00 horas<br/>
       Sábado – das 08h00 às 15h00 horas Domingos e Feriados – Livres.<br/>
       
       Coordenador (a):<br/>
       De 2ª a 6ª Feira – das 08h às 17h30 horas<br/>
       Sábado, Domingos e Feriados – Livres.<br/>
       
       Limpeza:<br/>
       De 2ª a 5ª Feira – das 07h00 às 17h00 horas<br/>
       6ª 07h00 às 16h00<br/>
       Sábado, Domingos e Feriados – Livres.<br/>
       
       
       § Único – Para todos os funcionários da empresa aplica-se o período de 01 hora de almoço, baseado em revezamento entre os funcionários de cada estabelecimento.<br/>
       
       Art. 7º - Os trabalhos extraordinários deverão ser previamente comunicados e autorizados por escrito, sendo este período computado em banco de horas, de acordo com o estabelecido na convenção coletiva de trabalho e por lei.<hr/>
       
       
               5. Ausências e Atrasos<br/><br/>
       
       Art. 8º - O empregado que se atrasar ao serviço, sair antes do término da jornada ou faltar por qualquer motivo, deve justificar-se ao superior imediato por escrito.<br/>
       
       § 1º - À empresa cabe descontar os períodos relativos a todas as saídas mais cedo, falta ao serviço e o conseqüente período da semana, excetuadas as faltas e ausências legais ou por ordem da Diretoria;<br/>
       
       § 2º - As faltas ilegais (sem atestado médico ou justificativa plausível) podem acarretar a aplicação de penalidades previstas no Capítulo 12.<hr/>
       
       
       
       
       
               6. Pagamentos<br/><br/>
       
       Art. 9º - A empresa paga os salários no 5º dia útil de cada mês;<br/>
       
       Art. 10º - O salário é depositado em conta corrente, no banco e agência estipulados pela empresa;<br/>
       
       Art. 11º - Eventuais erros ou diferenças são comunicados à Administração, no primeiro dia útil após o correspondente pagamento;<br/>
       
       Art. 12º - Não há adiantamentos de salários;<br/>
       
       Art. 13º - Não é permitido fazer empréstimo ou troca de dinheiro no caixa da loja.<hr/>
       
       
               7. Férias<br/><br/>
       
       Art. 14º - As férias são gozadas, anualmente, em período a ser fixado segundo a conveniência da empresa, ressalvado as exceções legais;<br/>
       
       Art. 15º - As férias são organizadas a cada início de ano, sendo assim, qualquer solicitação pode ser feita neste mesmo período para posterior análise.<hr/>
       
       
           8. Licenças<br/><br/>
       
       Art. 16º - A empresa concede ao empregado às licenças previstas na legislação, em dias corridos e consecutivos, por motivo de:<br/>
       
           • Casamento: 03 dias corridos;<br/>
           • Falecimento de cônjuge, descendente ou dependente (parente de 1º grau) declarado na CTPS – 02 dias corridos;<br/>
           • Licença paternidade – 05 dias corridos;<br/>
       
       § 1º - O empregado deve comunicar por escrito à Administração, na hipótese de casamento, com antecedência de 30 dias;<br/>
       § 2º - Em caso de morte e nascimento de filho, salvo impossibilidade, o empregado comunica o evento a Administração no respectivo dia;<br/>
       § 3º - Em qualquer caso, exige-se comprovação mediante documento.<hr/>
       
       
           9. Benefícios<br/><br/>
       
       Art. 17º - A empresa oferece os seguintes benefícios aos funcionários:<br/>
       
           • Vale Transporte;<br/>
           • Cursos de Especialização Profissional (estipulado pela empresa);<br/>
           • Desconto de 30 % nas compras de funcionários (exceto lentes de contato e Peças Promocionais);<br/>
           • Desconto de 20 % nas compras de familiares “pai, mãe, cônjuge e filhos” (exceto lentes de contato descartáveis);<br/>
           • Outros benefícios tais como Vale Alimentação e Refeição; são fornecidos somente aos funcionários da Clínica ARCO Oftalmologia por determinação do Sindicato da categoria e aos funcionários do administrativo.<hr/>
       
       Regulamento Interno de Trabalho
       Ótica Santo Grau e ARCO Oftalmologia
       
       
           10. Proibições<br/><br/>
       
           • Retirar brindes e acessórios destinados a clientes para uso pessoal;<br/>
           • Ocupar-se de qualquer atividade que possa prejudicar os interesses de serviço, bem como a utilização de máquinas, computadores, telefones, e outros disponíveis no ambiente de trabalho, para uso pessoal, sem autorização superior;<br/>
           • Promover algazarra, brincadeiras e discussões durante a jornada de trabalho;
           • Promover jogos de azar, rifas ou comércio dentro da empresa;<br/>
           • Usar palavras ou gestos impróprios à moralidade e respeito, nas dependências da empresa;<br/>
           • Fumar nas dependências da empresa ou nas portas das lojas/clínica;<br/>
           • Ingerir bebida alcoólica antes ou durante o expediente de trabalho, mesmo nos intervalos;<br/>
           • Retirar do local de trabalho, sem prévia autorização, qualquer equipamento, objeto ou documento;<br/>
           • Fazer parte de empresa ou iniciativas que concorram com quaisquer atividades da empresa;<br/>
           • Propagar ou incitar a insubordinação ao trabalho;<br/>
           • Introduzir pessoas estranhas ao serviço, em qualquer dependência da empresa, sem prévia autorização;<br/>
           • Divulgar, por qualquer meio, assunto ou fato de natureza privada ou confidencial da empresa;<br/>
           • O uso do estacionamento é exclusivo à clientes e pacientes, sendo assim, expressamente proibido o uso do mesmo por prestadores de serviço, funcionários, amigos, família, médicos e outros.<hr/>
       
       
           11. Relações Humanas<br/><br/>
       
       Art. 19►º - Todos os empregados, sem distinção, devem colaborar de forma eficaz à realização dos fins da empresa.<br/>
       
       Art. 20º - Harmonia, cordialidade, respeito e espírito de compreensão devem predominar nos contatos estabelecidos, independentemente da posição hierárquica;<br/>
       
       Art. 21º - O sentido de equipe deve predominar na execução das tarefas à realização dos objetivos da empresa;<br/>
       
       
       Art. 22º - A Diretoria da empresa, via departamento Administrativo, procura, sempre que solicitada e julgar conveniente, colaborar com a solução de problemas e questões de ordem pessoal e familiar dos empregados, com respeito e absoluto sigilo;<br/>
       
       Art. 23º - A empresa adota, nas relações com os empregados, os seguintes princípios:<br/>
       
           • Cumprir rigorosamente a legislação própria;<br/>
           • Reconhecer o mérito do empregado e agir condignamente. As promoções se regulam sobre capacidade, iniciativa, freqüência, pro-atividade e tempo de serviço. Quanto melhor o comportamento do empregado, tanto maior a possibilidade de promoção.<hr/>
       
       Regulamento Interno de Trabalho
       Ótica Santo Grau e ARCO Oftalmologia
       
           12. Penalidades<br/><br/>
       
       Art. 24º - Aos empregados transgressores das Normas e Procedimentos Internos e deste regulamento, aplica-se as seguintes penalidades:<br/>
       
           • Advertência verbal;<br/>
           • Advertência escrita;<br/>
           • Suspensão e<br/>
           • Demissão<br/>
       
       Art. 25º - As penalidades são aplicadas segundo a gravidade da transgressão, pelo Setor de Recursos Humanos;<br/>
       
       Art. 26º - As respectivas chefias elaboram relatório escrito e circunstanciado aos casos de demissão por justa causa.<hr/>
       
       
       
           13. Disposições Gerais<br/><br/>
       
       Art. 27º - Ao empregado é garantido o direito de formular sugestões ou reclamação acerca de qualquer assunto pertinente ao serviço e às atividades da empresa.<br/>
       
       Art. 28º - Os empregados devem observar o presente Regulamento, circulares, ordens de serviço, avisos, comunicados, mensagens eletrônicas e outras instruções expedidas pela direção da empresa ou por ordem dela.<br/>
       
       Art. 29º - Cada loja recebe um exemplar do presente regulamento. Declara, por escrito, tê-lo recebido, lido e estar de acordo com todos os seus preceitos.<br/>

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

export default RegulamentoInterno
