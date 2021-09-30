import React, { useEffect, useState } from 'react'
import GridList from 'react-gridlist'
import { useHistory } from 'react-router'
import { api } from '../../services/api'

import {
  BackButton,
  BackButtonText,
  BookContainer,
  BookItem,
  BookItemRow,
  BooksTitle,
  BookTitle,
  Container,
  Header,
  UserName,
} from './styles'

function getGridGap(elementWidth: number, windowHeight: number) {
  if (elementWidth > 720 && windowHeight > 480) {
    return 10
  } else {
    return 5
  }
}

function getColumnCount(elementWidth: number, gridGap: number) {
  return 3
}

function getWindowMargin(windowHeight: number) {
  return 159
}

function getItemData(item: any, columnWidth: number) {
  return {
    key: item.toString(),
    height: 210,
  }
}

export const Dashboard: React.FC = () => {
  const history = useHistory()

  const user = JSON.parse(localStorage.getItem('user') ?? '')
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
      const response = await api.get('/books')

      setBooks(response.data.books)
    } catch (err) {
      alert('Ocorreu um erro!')
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  const handleExit = () => {
    localStorage.clear()

    history.replace('/login')
  }

  return (
    <Container>
      <Header>
        <UserName>Bem vindo, {user.name}</UserName>
        <BackButton onClick={handleExit}>
          <BackButtonText>Sair</BackButtonText>
        </BackButton>
      </Header>
      <BooksTitle>Meus livros</BooksTitle>
      <GridList
        items={books}
        getGridGap={getGridGap}
        getColumnCount={getColumnCount}
        getWindowMargin={getWindowMargin}
        getItemData={getItemData}
        renderItem={(item) => {
          return (
            <BookContainer>
              <BookTitle>{item.title}</BookTitle>
              <BookItemRow>
                <BookItem>
                  Autor: <span>{item.author.name}</span>
                </BookItem>
                <BookItem>
                  Páginas: <span>{item.pages}</span>
                </BookItem>
              </BookItemRow>
              <BookItemRow>
                <BookItem>
                  Editora: <span>{item.publisher.name}</span>
                </BookItem>
                <BookItem>
                  Autor: <span>{item.genre.name}</span>
                </BookItem>
              </BookItemRow>
            </BookContainer>
          )
        }}
      />
    </Container>
  )
}
