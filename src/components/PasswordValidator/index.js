// Write your code here
import {useState} from 'react'

import {
  ContainerElement,
  ValidatorContainer,
  Heading,
  Paragraph,
  InputElement,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const errorMsg =
    password.length >= 8 ? '' : 'Your password must be at least 8 characters'
  const changePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <ContainerElement>
      <ValidatorContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputElement
          type="password"
          value={password}
          onChange={changePassword}
        />
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </ValidatorContainer>
    </ContainerElement>
  )
}

export default PasswordValidator
