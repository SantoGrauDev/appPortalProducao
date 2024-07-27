Gerenciar as rotas
### npm install react-router-dom

transformar o css em components
### npm install --save styled-components

validações auth fire base
### npm install --save firebase

Material UI
### npm install @mui/material @emotion/react @emotion/styled

Este projeto foi construido na intenção de substituir a pasta vender (Pasta onde era necessário efetuar uma busca via excel comparando estoque com as fotos que possuem na pasta), onde os vendedores utilizavam para saber se tinha ou não a peça em questão para efetuar a venda. 
O fluxo de informações era o seguinte: Marketing auditando estoque com pasta -> Vendedores utilizam para consulta.
O problema não é o processo em questão, mas sim o tempo gasto e problemas humanos envolvidos, como possuir a peça e não estar atualizada a pasta, perdendo venda; ou não possuir a peça e efetuar a venda, pois a pasta esta desatualizada com estoque. Cada vez que o excel efetuava essa comparação, o tempo gasto para checagem era muito grande, e dependendo da quantidade de erros, a repetição de processos manuais causavam erros.
O papel do desenvolvedor para perfeito funcionamento do aplicativo: 
    1º Manter banco de dados atualizado (Inserindo produtos novos ou alterando atributos de reposições, sempre consultar).
    2º Acompanhamento de bugs e velocidade de funcionamento.
    3º Manter home page atualizada.
    4º Monitorar funcionamento de API's, nessa aplicação foi criado api utilizando PHP, para extrair dados do estoque e também foi criado API em NodeJs do googlesheets para estoque do OUTLET.
    5º O outlet: Ele possui o seguinte fluxo: Setor do estoque atualiza planilha -> verificação do marketing. Os dados da planilha estão 100% integrados, então observar se a entrega de informações para o usuário final é fundamental.
Tecnologias utilizadas: PHP e NodeJs para backEnd, ReactJs para FrontEnd, Firebase para banco de dados (OBS: Utilizado firebase via ibexpert, nativo desktop, que ja era o que a empresa possuia e utilizado o firebase console, que é em nuvem, para AUTH de usuários).