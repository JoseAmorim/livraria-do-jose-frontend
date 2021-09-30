import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import TextInput from 'react-autocomplete-input'
import 'react-autocomplete-input/dist/bundle.css'

import {
  BackButton,
  BackButtonText,
  Button,
  ButtonText,
  Container,
  Header,
  Input,
  InputRow,
  UserName,
} from './styles'
import { api } from '../../services/api'

export const CreateBook: React.FC = () => {
  const [title, setTitle] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [pages, setPages] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [genre, setGenre] = useState('')
  const [genreId, setGenreId] = useState('')

  const [genres, setGenres] = useState<any[]>([])

  const getGenres = async () => {
    try {
      const response = await api.get('/genres')

      setGenres(response.data.genres)
    } catch (err) {
      alert('Ocorreu um erro!')
    }
  }

  useEffect(() => {
    getGenres()
  }, [])

  const handleGenre = (selected: string, trigger: string) => {
    const genreSelected = genres.find(
      (item: any) =>
        item.name.trim().toLowerCase() === selected.trim().toLowerCase(),
    )

    setGenreId(genreSelected._id)
    setGenre(selected)
  }

  const history = useHistory()

  const user = JSON.parse(localStorage.getItem('user') ?? '')

  const handleExit = () => {
    localStorage.clear()

    history.replace('/login')
  }

  const handleNewBook = async () => {
    if (!genreId.trim()) {
      alert(
        `Os gêneros disponiveis são ${genres
          .map((item) => item.name)
          .join(', ')}`,
      )

      return
    }

    try {
      const authorResponse = await api.post('/authors', {
        name: author,
      })
      const publisherResponse = await api.post('/publishers', {
        name: publisher,
      })

      console.log(authorResponse.data)
      console.log(publisherResponse.data)

      await api.post('/books', {
        title,
        pages,
        synopsis,
        author_id: authorResponse.data.author._id,
        publisher_id: publisherResponse.data.publisher._id,
        genre_id: genreId,
        user_id: user._id,
      })

      history.replace('/')
    } catch (err) {
      console.log(err)
      alert('Ocorreu um erro!')
    }
  }

  return (
    <Container>
      <Header>
        <UserName>Bem vindo, {user.name}</UserName>
        <BackButton onClick={handleExit}>
          <BackButtonText>Sair</BackButtonText>
        </BackButton>
      </Header>
      <InputRow>
        <Input
          name={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Insira o titulo"
        />
        <Input
          name={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
          placeholder="Insira a sinopse"
        />
        <Input
          name={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="Insira o número de páginas"
        />
        <Input
          name={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Insira o autor"
        />
        <Input
          name={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          placeholder="Insira a editora"
        />
        <TextInput
          placeholder="Insira o gênero"
          options={genres.map((item: any) => item.name)}
          trigger=""
          Component={Input}
          onSelect={handleGenre}
        />
      </InputRow>
      <Button onClick={handleNewBook}>
        <ButtonText>INSERIR</ButtonText>
      </Button>
    </Container>
  )
}
