import React, { Component } from "react";
import { Accordion, Icon, Embed } from "semantic-ui-react";
import Sidebar from "../Sidebar";

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Sidebar>
        <div style={{ width: "60vw", height: "60vh", margin: "45px 0 0 45px" }}>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />1 - Apresentação
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Embed id="fBP-D-ZgUyI" source="youtube" />
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />2 - Produto
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <Embed id="ciD7YkR4jtU" source="youtube" />
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />3 - Pedir foto
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <Embed id="DvBRTMZnwEI" source="youtube" />
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />4 - Receita
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              <Embed id="dv31KEk-J-I" source="youtube" />
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 5}
              index={5}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />5 - Lentes
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
              <Embed id="CzLMiKAeIbw" source="youtube" />
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 6}
              index={6}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />6 - Fechamento
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 6}>
              <Embed id="Cfxy-f9d_jU" source="youtube" />
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 7}
              index={7}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />7 - Agradecimento
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 7}>
              <Embed id="ru8ct2JPhnA" source="youtube" />
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 8}
              index={8}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />8 - Frases rotineiras
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 8}>
              <Embed id="f3LWQl3EnH8" source="youtube" />
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 9}
              index={9}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />9 - Resumo
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 9}>
              <Embed id="f3LWQl3EnH8" source="youtube" />
            </Accordion.Content>
          </Accordion>
        </div>
      </Sidebar>
    );
  }
}
