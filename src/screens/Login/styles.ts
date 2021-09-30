import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  height: 100vh;

  background: linear-gradient(#a1ffce, #faffd1);

  flex-direction: column;

  align-items: center;
`

export const LogoContainer = styled.div`
  flex-direction: column;

  width: max-content;

  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 36px;
  font-size: clamp(28px, 5vw, 36px);

  color: #000;
`

export const Logo = styled.img`
  width: 307px;
  height: auto;
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

export const RegisterButton = styled.button`
  border: none;
  background: none;

  font-size: 22px;
  font-size: clamp(18px, 5vw, 22px);

  font-weight: bold;

  color: red;

  margin: 0 auto;
  margin-top: 10vh;

  cursor: pointer;
`
