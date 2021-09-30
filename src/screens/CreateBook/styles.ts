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

export const InputRow = styled.div`
  display: flex;
  gap: 20px;

  flex-wrap: wrap;
`

export const Input = styled.input`
  margin-top: 5vh;

  width: 26vw;
  height: calc(30vw * 0.1121212121212121);

  border-radius: 8px;
  border: none;
  background: #fff;

  font-size: 22px;
  font-size: clamp(18px, 5vw, 22px);

  font-weight: bold;

  color: #000;

  padding: 0 2vw;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Button = styled.button`
  margin-top: 5vh;

  border: none;

  width: 30vw;
  height: calc(30vw * 0.1121212121212121);

  border-radius: 8px;
  background: #fff;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export const ButtonText = styled.p`
  font-size: 36px;
  font-size: clamp(28px, 5vw, 36px);

  font-weight: bold;

  color: #000;
`
