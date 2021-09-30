import React, { useState } from 'react'
import { useHistory } from 'react-router'

import logo from '../../assets/books.svg'
import { api } from '../../services/api'

import {
  Button,
  ButtonText,
  Container,
  Input,
  Logo,
  LogoContainer,
  RegisterButton,
  Title,
} from './styles'

type ScreenMode = 'login' | 'register'

export const Login: React.FC = () => {
  let history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mode, setMode] = useState<ScreenMode>('login')

  const handleLogin = async () => {
    try {
      const response = await api.post('/sessions', {
        email,
      })

      localStorage.setItem('user', JSON.stringify(response.data.user))

      history.push('/')
    } catch (err: any) {
      alert(err.response.data.erro)
    }
  }

  const handleRegister = async () => {
    try {
      const response = await api.post('/register', {
        email,
        name,
      })

      localStorage.setItem('user', JSON.stringify(response.data.user))

      history.push('/')
    } catch (err: any) {
      alert(err.response.data.erro)
    }
  }

  const renderInputs = () => {
    return (
      <>
        {mode === 'register' && (
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Insira seu nome"
          />
        )}
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Insira seu e-mail"
        />
      </>
    )
  }

  const renderButton = () => {
    if (mode === 'register') {
      return (
        <Button onClick={handleRegister}>
          <ButtonText>REGISTRAR</ButtonText>
        </Button>
      )
    }

    return (
      <Button onClick={handleLogin}>
        <ButtonText>ENTRAR</ButtonText>
      </Button>
    )
  }

  const renderModeButton = () => {
    if (mode === 'register') {
      return (
        <RegisterButton onClick={() => setMode('login')}>
          Já tem conta? Acesse a plataforma
        </RegisterButton>
      )
    }

    return (
      <RegisterButton onClick={() => setMode('register')}>
        Não tem conta? registre-se
      </RegisterButton>
    )
  }

  return (
    <Container>
      <LogoContainer>
        <Title>Livraria do José</Title>
        <Logo src={logo} />
      </LogoContainer>
      {renderInputs()}
      {renderButton()}
      {renderModeButton()}
    </Container>
  )
}
