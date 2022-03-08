import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { CardList } from './styles'
import { Card } from './styles'
import { ButtonMore } from './styles'


interface ResponseData {
  id: string,
  name: string,
  description: string,
  thumbnail: {
    path: string,
    extension: string
  }
}

const Characters: React.FC = () => {


  const [characters, setCharacters] = useState<ResponseData[]>([])

  useEffect(() => {
    api.get('/characters')
      .then(response => {
        setCharacters(response.data.data.results)
        console.log(response.data.data.results)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <Container>
      <CardList>
        {characters.map(character => {
          return(
            <Card key={character.id} thumbnail={character.thumbnail}>
              <div id="img" />
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </Card>
          )
        })}
      </CardList>

      <ButtonMore> More Heroes </ButtonMore>
      
    </Container>
  )
}

export default Characters