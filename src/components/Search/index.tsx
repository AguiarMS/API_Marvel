import React from "react";
import { Container } from "./styles";

const Search: React.FC = () => {

  return(
    <Container>
      <p>Pesquisar heroi: </p>
      <input type="text" placeholder="Search..."/>
    </Container>
  )
}

export default Search