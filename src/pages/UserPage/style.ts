import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  margin-top: 30px;
`

export const FormHeader = styled.header`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const InputContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid;
  outline: none;
  margin-top: 10px;
  font-size: 1.25rem;
`

export const FormInputLabel = styled.label`
  font-size: 1.5rem;
`

export const FormSubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${(theme.colors.MAIN_BLUE)};
  color: ${(theme.colors.WHITE)};
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.15rem;
  cursor: pointer;
  margin-top: 20px;

  &:disabled {
    background-color: ${(theme.colors.MEDIUM_RED)};
    cursor: not-allowed;
  }
`

export const FormErrorMessage = styled.span`
  color: ${(theme.colors.MEDIUM_RED)};
`