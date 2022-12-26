import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  margin: 40px;
  width: 100%;
  border: 1px solid green;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;
  border: 1px solid black;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #000;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  border: 1px solid red;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
