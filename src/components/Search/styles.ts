import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  color: white;
  margin-top: 30px;

  height: 35px;
  border-radius: 50px;

  input{
    border: 2px solid red;
    border-radius: 4px;
    font-size: 18px;
    color: white;

    margin: 0 5px;
  }

  p{
    display: flex;
    font-size: 18px;
    align-items: center;
    padding: 0 10px;
  }
`;
