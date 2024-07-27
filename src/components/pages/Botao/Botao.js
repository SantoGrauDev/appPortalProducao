import React from 'react';
import { BotaoCustomizado } from './Botao.style'

const Botao = ({
    type,
    text,
    onClick,
    //disabled,
}) => {
    return (         
        <BotaoCustomizado
            type={type}
            text={text}
            onClick={onClick}
        >
            {text}
        </BotaoCustomizado>
     );
}
 
export default Botao;