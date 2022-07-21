import { useState, useEffect } from "react";
import styled, { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*:focus {
   outline: none;
  }
`


const Title = styled.h1`
  font-size: 24px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  padding-bottom: .8rem;
  letter-spacing: .1rem;
`

const WordingClient = styled.div`
  height: auto;
  width: 498px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`
const ErrorClient = styled.div`
  padding-top: 1rem;
  color: #EB4160;
  display: ${props => props.color === 'Rouge' ? 'block' : 'none'};
`
const ErrorClient1 = styled.div`
  padding-top: 1rem;
  color: #EB4160;
  display: ${props => props.color === 'Rouge1' ? 'block' : 'none'};
`
const ErrorClient2 = styled.div`
  padding-top: 1rem;
  color: #FFC736;
  display: ${props => props.color === 'Orange' ? 'block' : 'none'};
`
const ErrorClient3 = styled.div`
  padding-top: 1rem;
  color: #5BCAC6;
  display: ${props => props.color === 'Vert' ? 'block' : 'none'};
`
const ErrorClient4 = styled.div`
  padding-top: 1rem;
  color: #5BCAC6;
  display: ${props => props.color === 'Vert1' ? 'block' : 'none'};
`
const ErrorClient5 = styled.div`
  padding-top: 1rem;
  color: #5BCAC6;
  display: ${props => props.color === 'Vert2' ? 'block' : 'none'};
`

const PasswordInput = styled.input`
  background-color: #F5F5F6;
  border: none;
  height: 48px;
  width: 498px;
  margin-bottom: 8px;
  font-size: 16px;
  padding: 15px 17px;
  font-family: 'Work Sans', sans-serif;
`
const Parent = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InputContainer = styled.div`
  height: 20%;
  width: auto;
  padding-left: 1.5rem;
`

const ErrorBar = styled.div`
  height: 8px;
  width: 498px;
  background-color: #c1c1c1;
  border-radius: 10px;
  transition: all .5s ease;
`
const ErrorBarStep1 = styled.div`
  position: absolute;
  height: 8px;
  width: 74.7px;
  background-color: #EB4160;
  border-radius: 10px;
  opacity: ${props => props.color === 'Rouge' ? 1 : 0};
`
const ErrorBarStep2 = styled.div`
  position: absolute;
  height: 8px;
  width: 74.7px;
  background-color: #EB4160;
  border-radius: 10px;
  opacity: ${props => props.color === 'Rouge1' ? 1 : 0};
`
const ErrorBarStep3 = styled.div`
  position: absolute;
  height: 8px;
  width: 165.25px;
  background-color: #FFC736;
  border-radius: 10px;
  opacity: ${props => props.color === 'Orange' ? 1 : 0};
`
const ErrorBarStep4 = styled.div`
  position: absolute;
  height: 8px;
  width: 249px;
  background-color: #5BCAC6;
  z-index: 4;
  border-radius: 10px;
  opacity: ${props => props.color === 'Vert' ? 1 : 0};
`
const ErrorBarStep5 = styled.div`
  position: absolute;
  height: 8px;
  width: 355.39px;
  background-color: #5BCAC6;
  z-index: 4;
  border-radius: 10px;
  opacity: ${props => props.color === 'Vert1' ? 1 : 0};
`
const ErrorBarStep6 = styled.div`
  position: absolute;
  height: 8px;
  width: 498px;
  background-color: #5BCAC6;
  z-index: 4;
  border-radius: 10px;
  opacity: ${props => props.color === 'Vert2' ? 1 : 0};
`



const InputUnkle = () => {

  const [textSave, setTextSave] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [statusColor, setStatusColor] = useState('')

  const entry = (event) => {
    setTextSave(event.target.value)
  }

  const verificationLenght = /^.{8,}$/.test(textSave);

  const verificationLenghtStrong = /^.{12,}$/.test(textSave);

   const verificationUpper = /^(?=.*[A-Z]).*$/.test(textSave);

   const verificationNumb = /^(?=.*[0-9]).*$/.test(textSave);

   const verificationLower = /^(?=.*[a-z]).*$/.test(textSave);

   const verificationCharac = /^(?=.*[@#&]).*$/.test(textSave);


    useEffect(() => {
      if (textSave.length > 0) {
        const verifications = [verificationCharac, verificationUpper, verificationNumb, verificationLower] 
        const goodGroup = verifications.filter((verification) => {
          return verification === true
        })

        // Very Strong + >= 12 caractères & 4 groupe //
        if (goodGroup.length === 4 && verificationLenghtStrong === true) {
          setErrorMsg("C'est du béton armé !");
          setStatusColor('Vert2')
          return;
        }

        // Strong + >= 8 caractères & 4 groupe //
        if (goodGroup.length === 4 && verificationLenght === true) {
          setErrorMsg("Nous avons besoin de 12 caractères et de : minuscule(s),majuscule(s), chiffre(s), caractères(s) spéciaux !");
          setStatusColor('Vert1')
          return;
        }

        // Medium + >= 8 caractères & 3 groupe //
        if (goodGroup.length === 3 && verificationLenght === true) {
          setErrorMsg("Nous avons besoin de 12 caractères et de : minuscule(s),majuscule(s), chiffre(s), caractères(s) spéciaux !");
          setStatusColor('Vert')
          return;
        }
        // Medium >= 8 caractères & 2 groupe //
        if (goodGroup.length === 2 && verificationLenght === true) {
          setErrorMsg("Nous avons besoin de 12 caractères et de : minuscule(s),majuscule(s), chiffre(s), caractères(s) spéciaux !");
          setStatusColor('Orange')
          return;
        }
        // Weak >= 8 caractères & 1 groupe //
        if (goodGroup.length === 1 && verificationLenght === true) {
          setErrorMsg("Nous avons besoin de 12 caractères et de : minuscule(s),majuscule(s), chiffre(s), caractères(s) spéciaux !");
          setStatusColor('Rouge1')
          return;
        }
        // Ultra weak < 8 caractères //
        if (verificationLenght === false) {
          setErrorMsg("C'est trop court...")
          setStatusColor('Rouge')
          return;
        }

      } else {
        setErrorMsg('')
        setStatusColor('')
      }
    }, [textSave])


    const noSpace = (e) => {
      if (e.which === 32) {
        e.preventDefault();
        return false;
      }
    }


  return (
    <Parent>
      <GlobalStyle  />
      <InputContainer>

        <Title>Unkle Team Password</Title>

        <PasswordInput type="password" value={textSave}  placeholder="12 caractères minimum" required onKeyDown={noSpace} onChange={entry} />

        <ErrorBar>
          <ErrorBarStep1 color={statusColor} />
          <ErrorBarStep2 color={statusColor} />
          <ErrorBarStep3 color={statusColor} />
          <ErrorBarStep4 color={statusColor} />
          <ErrorBarStep5 color={statusColor} />
          <ErrorBarStep6 color={statusColor} />
        </ErrorBar>

        <WordingClient>
          <ErrorClient color={statusColor}>{errorMsg}</ErrorClient>
          <ErrorClient1 color={statusColor}>{errorMsg}</ErrorClient1>
          <ErrorClient2 color={statusColor}>{errorMsg}</ErrorClient2>
          <ErrorClient3 color={statusColor}>{errorMsg}</ErrorClient3>
          <ErrorClient4 color={statusColor}>{errorMsg}</ErrorClient4>
          <ErrorClient5 color={statusColor}>{errorMsg}</ErrorClient5>
        </WordingClient>

      </InputContainer>
    </Parent>
   
  )
}

export default InputUnkle