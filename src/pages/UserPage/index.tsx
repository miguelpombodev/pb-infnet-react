import { useContext, useEffect, useState } from "react";

import Form from "../../components/Form";
import { Container, FormContentContainer, FormErrorMessage, FormHeader, FormInput, FormInputLabel, FormSubmitButton, InputContentContainer } from "./style";
import UserProfile from "../../components/UserProfile";
import { UserContext } from "../../context";

function UserPage () {
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroPassword, setErroPassword] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const { userLogged, setUserLogged } = useContext(UserContext)

  const validarNome = () => {
    if (nome.trim() === '' || /[^a-zA-Z\s]/.test(nome)) {
      setErroNome('Nome inválido. Não use caracteres especiais.');
      return false;
    } else {
      setErroNome('');
      return true;
    }
  };

  const validarPassword = () => {
    if (nome.trim() === '' || /[^a-zA-Z\s]/.test(nome)) {
      setErroPassword('Nome inválido. Não use caracteres especiais.');
      return false;
    } else {
      setErroPassword('');
      return true;
    }
  };

  const validarEmail = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !regexEmail.test(email)) {
      setErroEmail('E-mail inválido.');
      return false;
    } else {
      setErroEmail('');
      return true;
    }
  };

  const validarFormulario = () => {
    const nomeValido = validarNome();
    const emailValido = validarEmail();
    setIsFormValid(nomeValido && emailValido);
  };

  const handleBlurNome = () => {
    validarNome();
  };

  const handleBlurPassword = () => {
    validarPassword();
  };

  const handleBlurEmail = () => {
    validarEmail();
  };

  const handleChangeNome = (e) => {
    setNome(e.target.value);
    validarFormulario();
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    validarFormulario();
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    validarFormulario();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setUserLogged(true)
      localStorage.setItem("userLogged", JSON.stringify(true))
    } else {
      alert('Por favor, corrija os erros antes de enviar.');
    }
  };

  useEffect(() => {
    const hasUserLogged = localStorage.getItem("userLogged")

    if(!hasUserLogged) {
      setUserLogged(false)
      return;
    }

    const getLoggedUserValue = Boolean(JSON.parse(hasUserLogged))
    setUserLogged(getLoggedUserValue)
  }, [])

  return (
    <Container>
      { !userLogged ?
        (
          <Form handleSubmit={handleSubmit}>
          <FormHeader>
            <h1>Cadastre-se!</h1>
          </FormHeader>
          <FormContentContainer>
          <InputContentContainer>
            <FormInputLabel htmlFor="nome">Nome:</FormInputLabel>
            <FormInput
              type="text"
              id="nome"
              value={nome}
              onChange={handleChangeNome}
              onBlur={handleBlurNome}
            />
            {erroNome && <FormErrorMessage className="erro">{erroNome}</FormErrorMessage>}
          </InputContentContainer>
          <InputContentContainer>
            <FormInputLabel htmlFor="email">E-mail:</FormInputLabel>
            <FormInput
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              onBlur={handleBlurEmail}
            />
            {erroEmail && <FormErrorMessage className="erro">{erroEmail}</FormErrorMessage>}
          </InputContentContainer>
          <InputContentContainer>
            <FormInputLabel htmlFor="password">Senha:</FormInputLabel>
            <FormInput
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              onBlur={handleBlurPassword}
            />
            {erroPassword && <FormErrorMessage className="erro">{erroPassword}</FormErrorMessage>}
          </InputContentContainer>
          </FormContentContainer>
          <FormSubmitButton type="submit" disabled={!isFormValid}>Enviar</FormSubmitButton>
        </Form>
      ) : userLogged && (<UserProfile />)
    }
    </Container>
  )
}

export default UserPage;