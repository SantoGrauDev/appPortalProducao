import React, { useState } from 'react';
import { Container, Form } from './Login.style'
import Input from '../Input/Input'
import Botao from '../Botao/Botao'
import { validarEmail, validarSenha } from '../../Utils/Validadores'

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            alert('login')
            setLoading(false)
        } 
        catch {
            alert('Deu ruim')
        }
        
    }

    const handleChange = (event) => {
        console.log('digitando...', event.target.name, event.target.value)
        setForm({...form,[event.target.name]: event.target.value})
        console.log('Form', form)
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
    }
    console.log('Form está válido?', validadorInput())

    return (
        <Container>
            <Form>
            <h1>Faça seu login</h1>
                <Input 
                    name='email'
                    placeholder='Digite o seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <Input
                    name='password'
                    placeholder='Digite a sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <Botao
                    type='submit'
                    text='Entrar'
                    onClick={handleSubmit}
                    //disabled={!validandoInput()}
                />            
             <div>
                <p>Não possui conta?</p>
                <a>Cadastrar</a>
             </div>
            </Form>
        </Container>
    )
}

export default Login;