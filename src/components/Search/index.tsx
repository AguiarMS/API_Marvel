import axios from "axios";
import React, { useEffect, useState } from "react"
import { Schemas } from '../../services/schemas'
import { Container } from "./styles";

const Search: React.FC = () => {

  const keys = [Schemas]

  const [Query, setQuery] = useState('');


  return (
    <Container>
      <p>Pesquisar heroi: </p>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event: any) => {
          setQuery(event.target.value)
          console.log(Query)
        }}
      />
    </Container>
  )
}

export default Search