import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  height: 100vh;

  background: linear-gradient(#a1ffce, #faffd1);

  flex-direction: column;

  padding: 25px 36px;
`

export const Header = styled.div`
  display: flex;

  justify-content: space-between;
`

export const UserName = styled.text`
  font-size: 44px;
  font-size: clamp(34px, 5vw, 44px);

  color: #000;
`

export const BackButton = styled.button`
  background: #fff;
  border: none;

  padding: 0px 48px;

  border-radius: 48px;

  cursor: pointer;
`

export const BackButtonText = styled.p`
  font-size: 28px;
  font-size: clamp(20px, 5vw, 28px);

  color: #000;
`

export const BooksTitle = styled.h3`
  font-size: 28px;
  font-size: clamp(20px, 5vw, 28px);

  color: #000;
`

export const BookContainer = styled.div`
  width: 28vw;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: #fff;
  border-radius: 31px;
  border: 1px solid #707070;

  padding: 30px 23px;

  cursor: pointer;
`

export const BookTitle = styled.p`
  max-lines: 1;

  margin: 0;

  font-size: 20px;
  font-size: clamp(16px, 5vw, 20px);

  font-weight: bold;

  color: #000;
`

export const BookItemRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BookItem = styled.p`
  max-lines: 1;
  margin: 0;
  margin-top: 20px;

  font-size: 20px;
  font-size: clamp(16px, 5vw, 20px);

  font-weight: bold;

  color: #000;

  width: 45%;

  span {
    font-weight: normal;
  }
`
