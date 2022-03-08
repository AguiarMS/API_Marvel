import styled from "styled-components";

interface ThumbNailData {
  thumbnail: {
    path: string,
    extension: string
  }
}

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
`

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`

const urlimg = (props: ThumbNailData) => `${props.thumbnail.path}.${props.thumbnail.extension}`


export const Card = styled.div`
  background-color: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 20px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  padding: 10px;

  h2, p {
    padding: 5px;
    text-align: justify;
  }

  div#img {
    height: 400px;
    width: 100%;
    background: url(${urlimg}) no-repeat center;
    background-size: cover;

    transition: all 1s;
  }

  &:hover{
    div#img{
      height: 100px;
    }
  }
`

export const ButtonMore = styled.div`
  font-size: 28px;
  cursor: pointer;
  margin: 10px auto;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  height: 50px;
  width: 50%;
  border-radius: 20px;
  background-color: #FF3333;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
  }

`